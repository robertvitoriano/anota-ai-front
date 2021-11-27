import { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router';
import api from 'services/api';
import Swal from 'sweetalert2'
import { PhoneBreakPoint, DesktopBreakPoint } from 'components/responsive_utilities'
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from 'store/modules/loading/reducer'
import AddCategoryButton from 'components/AddCategoryButton';
import AddCategoryModal from 'components/AddCategoryModal';
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
import { setToken } from 'store/modules/auth/reducer';
export default function UpdateNotes() {

  const location = useLocation();

  const [noteTitle, setNoteTitle] = useState<string>();
  const [noteBody, setNoteBody] = useState<string>();
  const [isCreating, setIsCreating] = useState<boolean>(location.pathname.includes('create') );
  const [showCategoriesModal, setShowCategoriesModal] = useState<boolean>(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.auth.token);


  useEffect(() => {
    fetchNote();
  }, []);

  // @ts-ignore
  const { id } = useParams();

  const fetchNote = async () => {
    try {

      if (!isCreating) {
        dispatch(setIsLoading(true));
        //@ts-ignore
        const response = await api.get(`/notes/${id}`,
          {
            headers: {
              authorization: token || ''
            }
          });

        const { title, body } = response.data;

        setNoteTitle(title);
        setNoteBody(body);
        dispatch(setIsLoading(false));

      }

    } catch (error: any) {
       console.error(error);
       dispatch(setToken(''));
       history.push('/')

    }
  }

  const createNote = async (mode:string) => {

    Swal.fire({
      title: `Do you really want to ${mode} this note ? `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',  // blue     
    }).then(async (result) => {
      if(mode==='create'){
      await api.post('/notes', { title: noteTitle, body: noteBody },
        {
          headers: {
            authorization: token || ''
          }
        });
      }else{
        await api.post('/notes/' + id, { title: noteTitle, body: noteBody },
        {
          headers: {
            authorization: token || ''
          }
        });
      }
      if (result.value) {
        Swal.fire({
          title: `Note Successufully ${mode}d`!,
          text: `You ${mode==='create'?'Created':'Updated'} a Note !`,
          icon: "success",
          confirmButtonText: 'Ok !'
        }).then(() => history.push('/notes'))
      }
    }).catch((error) => {

      console.error(error)

      return Swal.fire(
        'Um erro aconteceu',
        String(error.message),
        'error'
      ).then(() => {
        dispatch(setToken(''));
        history.push('/')
      })

    })
  }

  const deleteNote = async (id: string) => {

    Swal.fire({
      title: 'Do You Really Want To Delete This Note ? ',
      text: `You Won't be Able To Undo This !`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
    }).then(async (result) => {
      await api.delete('/notes/' + id,
        {
          headers: {
            authorization: token || ''
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
    }).catch((error) => {

      console.error(error)

      return Swal.fire(
        'Um erro aconteceu',
        String(error.message),
        'error'
      ).then(() => {
        dispatch(setToken(''));
        history.push('/')
      })

    })
  }

  return (
    <>
      <DesktopBreakPoint>
       {showCategoriesModal && <AddCategoryModal isCreating = {isCreating} show ={showCategoriesModal} onHide = {()=> setShowCategoriesModal(false)}/>}
        <Wrapper>
          <PageTitle>Let's Write a Note !</PageTitle>
         <AddCategoryButton  onClick = {()=>setShowCategoriesModal(true)}/>


          <NoteContainer>
            <NoteTitleInput value={noteTitle} onChange={(event) => setNoteTitle(event.target.value)} />
            <NoteBody>
              <NoteBodyTextArea value={noteBody} onChange={(event) => setNoteBody(event.target.value)} />
            </NoteBody>
          </NoteContainer>
          <Button
            onClick={() => createNote(isCreating ? 'create' : 'update')}
          >{isCreating ? 'Create Note' : 'Update Note'}
          </Button>
          {isCreating ? '' : <Button onClick={() => deleteNote(id)}>Delete Note</Button>}
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
            <Button onClick={() => createNote(isCreating ? 'create' : 'update')}>{location.pathname.includes('create') ? 'Create Note' : 'Update Note'}</Button>
            {isCreating ? '' : <Button onClick={() => deleteNote(id)}>Delete Note</Button>}
          </MobileNoteContainer>
        </Wrapper>
      </PhoneBreakPoint>
    </>
  );
}
