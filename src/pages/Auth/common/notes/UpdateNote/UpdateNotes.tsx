import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
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
  CreateNoteButton,
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

  const fetchNote = async () => {
    try {

      if (id !== 'create') {
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

    //@ts-ignore

    try {
      await api.post('/notes', { title: noteTitle, body: noteBody },
        {
          headers: {
            authorization: localStorage.getItem('token') || ''
          }
        });

    } catch (error: any) {
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

    Swal.fire({
      title: "Anotação criada com sucesso !",
      text: `Você criou uma anotação !`,
      icon: "success",
      confirmButtonText: 'Ok !'
    }).then(() => history.push('/notes'))


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
          <CreateNoteButton onClick={() => createNote()}>Create Note</CreateNoteButton>
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
            <CreateNoteButton onClick={() => createNote()}>Create Note</CreateNoteButton>
          </MobileNoteContainer>
        </Wrapper>
      </PhoneBreakPoint>
    </>
  );
}
