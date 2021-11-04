import { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router';
import api from 'services/api';
import Swal from 'sweetalert2'
import { PhoneBreakPoint, DesktopBreakPoint } from 'components/responsive_utilities'
import { useDispatch } from 'react-redux';
import { setIsLoading } from 'store/modules/loading/reducer'

import {
  Wrapper,
  NoteContainer,
  PageTitle,
  NoteTitleInput,
  NoteBody,
  NoteBodyTextArea,
  Button,
  MobileNoteContainer,
  MobileNoteBody,
  MobileNoteTitleInput
} from './styled'
import to from 'await-to-js';
export default function UpdateNotes() {


  const [noteTitle, setNoteTitle] = useState<string>();
  const [noteBody, setNoteBody] = useState<string>();

  const history = useHistory();
  const dispatch = useDispatch();


  useEffect(() => {
    fetchNote();
  }, []);

  // @ts-ignore
  const { id } = useParams();
  const location = useLocation();


  const fetchNote = async () => {
    try {

      if (!location.pathname.includes('create')) {
        dispatch(setIsLoading(true));
        //@ts-ignore
        const response = await api.get(`/notes/${id}`,
          {
            headers: {
              authorization: localStorage.getItem('token') || ''
            }
          });


        const { title, body } = response.data;

        setNoteTitle(title);
        setNoteBody(body);
        dispatch(setIsLoading(false));

      }

    } catch (error: any) {
      dispatch(setIsLoading(false));

      console.error(error)

      return Swal.fire(
        'Um erro aconteceu',
        String(error.message),
        'error'
      ).then(() => {
        localStorage.removeItem('token')
        //@ts-ignore
        window.location.href = '/'
      })

    }
  }

  const createNote = async () => {

    Swal.fire({
      title: 'Do you really want to create this note ? ', 
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',  // blue     
    }).then(async(result) => {
      await api.post('/notes', { title: noteTitle, body: noteBody },
      {
        headers: {
          authorization: localStorage.getItem('token') || ''
        }
      });
      if (result.value) {
        Swal.fire({
          title: "Note Successufully created!",
          text: `You Created a Note !`,
          icon: "success",
          confirmButtonText: 'Ok !'
        }).then(() => history.push('/notes'))
      }
    }).catch((error)=>{

      console.error(error)

      return Swal.fire(
        'Um erro aconteceu',
        String(error.message),
        'error'
      ).then(() => {
        localStorage.removeItem('token')
        //@ts-ignore
        window.location.href = '/'
      })

    })
  }

  const deleteNote = async (id:string) => {

    Swal.fire({
      title: 'Do You Really Want To Delete This Note ? ', 
      text: `You Won't be Able To Undo This !`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',  
    }).then(async(result) => {
      await api.delete('/notes/'+id,
      {
        headers: {
          authorization: localStorage.getItem('token') || ''
        },
      });
      if (result.value) {
        Swal.fire({
          title: "Note Successufully Deleted!",
          text: `You Deleted a Note !`,
          icon: "success",
          confirmButtonText: 'Ok !'
        }).then(() => history.push('/notes'))
      }
    }).catch((error)=>{

      console.error(error)

      return Swal.fire(
        'Um erro aconteceu',
        String(error.message),
        'error'
      ).then(() => {
        localStorage.removeItem('token')
        //@ts-ignore
        window.location.href = '/'
      })

    })
  }

  return (
    <>
      <DesktopBreakPoint>
        <Wrapper>
          <PageTitle>Let's Write a Note !</PageTitle>
          <NoteContainer>
            <NoteTitleInput value={noteTitle} onChange={(event) => setNoteTitle(event.target.value)} />
            <NoteBody>
              <NoteBodyTextArea value={noteBody} onChange={(event) => setNoteBody(event.target.value)} />
            </NoteBody>
          </NoteContainer>
          <Button onClick={() => createNote()}>{location.pathname.includes('create')?'Create Note':'Update Note'}</Button>
          {location.pathname.includes('create')?'':<Button onClick={() => deleteNote(id)}>Delete Note</Button>}
        </Wrapper>
      </DesktopBreakPoint>
      <PhoneBreakPoint>
        <Wrapper>
          <PageTitle mobile>Let's Write a Note !</PageTitle>
          <MobileNoteContainer>
            <MobileNoteTitleInput value={noteTitle} onChange={(event) => setNoteTitle(event.target.value)} />
            <MobileNoteBody>
              <NoteBodyTextArea value={noteBody} onChange={(event) => setNoteBody(event.target.value)} />
            </MobileNoteBody>
            <Button onClick={() => createNote()}>{location.pathname.includes('create')?'Create Note':'Update Note'}</Button>
          {location.pathname.includes('create')?'':<Button onClick={() => deleteNote(id)}>Delete Note</Button>}
          </MobileNoteContainer>
        </Wrapper>
      </PhoneBreakPoint>
    </>
  );
}
