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
  MobileNoteTitleInput,
  ButtonsWrapper
} from './styled'
import { setToken } from 'store/modules/auth/reducer';
export default function UpdateNotes() {

  const location = useLocation();

  const [noteTitle, setNoteTitle] = useState<string>();
  const [noteBody, setNoteBody] = useState<string>();
  const [isCreating, setIsCreating] = useState<boolean>(location.pathname.includes('create'));
  const [showCategoriesModal, setShowCategoriesModal] = useState<boolean>(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');
  const [selectedCategoryName,setSelectedCategoryName] = useState<string>('');

  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.auth.token);

  interface Note {
    _id: string;
    title: string;
    body: string;
    categoryId: string;
    categoryName: string;

  }


  useEffect(() => {
    fetchNote(); 
  }, []);

  // @ts-ignore
  const { id } = useParams();

  const fetchNote = async () => {
    try {

      if (!isCreating) {
        dispatch(setIsLoading(true));
        const response = await api.get(`/notes/${id}`,
          {
            headers: {
              authorization: token || ''
            }
          });

        const { title, body, categoryId, categoryName }:Note = response.data;

        setNoteTitle(title);
        setNoteBody(body);
        setSelectedCategoryName(categoryName);
        setSelectedCategoryId(categoryId);
        dispatch(setIsLoading(false));

      }

    } catch (error: any) {
      console.error(error);
      dispatch(setToken(''));
      history.push('/')

    }
  }

  const createNote = async (mode: string) => {

    const missingField = !noteTitle || !noteBody || !selectedCategoryId;

    let missingFieldName = '';
    
    if(!selectedCategoryId) missingFieldName = 'Category';
    if(!noteBody) missingFieldName = 'Body';
    if(!noteTitle) missingFieldName = 'Title';

    if(missingField){
      Swal.fire({
        title: 'Missing field',
        text: `${missingFieldName} is required`,
        icon: 'error'
      })
      return;
    }

    Swal.fire({
      title: `Do you really want to ${mode} this note ? `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',  // blue     
    }).then(async (result) => {
      if (mode === 'create') {
        await api.post('/notes', { title: noteTitle, body: noteBody, categoryId: selectedCategoryId },
          {
            headers: {
              authorization: token || ''
            }
          });

      } else {
        await api.post('/notes/' + id, { title: noteTitle, body: noteBody, categoryId: selectedCategoryId },
          {
            headers: {
              authorization: token || ''
            }
          });
      }
      if (result.value) {
        Swal.fire({
          title: `Note Successufully ${mode}d`!,
          text: `You ${mode === 'create' ? 'Created' : 'Updated'} a Note !`,
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

  const handleCategorySelection = (categoryId: string, categoryName:string) => {
    setSelectedCategoryId(categoryId);
    setSelectedCategoryName(categoryName)
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
      {showCategoriesModal && <AddCategoryModal onSelect={handleCategorySelection} isCreating={isCreating} show={showCategoriesModal} onHide={() => setShowCategoriesModal(false)} />}
        <Wrapper>
          <PageTitle>Let's Write a Note !</PageTitle>
          <AddCategoryButton selectedCategoryName = {selectedCategoryName}  onClick={() => setShowCategoriesModal(true)} />
          <NoteContainer>
            <NoteTitleInput value={noteTitle} onChange={(event) => setNoteTitle(event.target.value)} />
            <NoteBody>
              <NoteBodyTextArea value={noteBody} onChange={(event) => setNoteBody(event.target.value)} />
            </NoteBody>
          </NoteContainer>
          <ButtonsWrapper>
          <Button
            onClick={() => createNote(isCreating ? 'create' : 'update')}
          >{isCreating ? 'Create Note' : 'Update Note'}
          </Button>
          {isCreating ? '' : <Button onClick={() => deleteNote(id)}>Delete Note</Button>}
          </ButtonsWrapper>
        </Wrapper>
      </DesktopBreakPoint>
      <PhoneBreakPoint>
      {showCategoriesModal && <AddCategoryModal mobile onSelect={handleCategorySelection} isCreating={isCreating} show={showCategoriesModal} onHide={() => setShowCategoriesModal(false)} />}

        <Wrapper>
          <PageTitle mobile>Let's Write a Note !</PageTitle>
          <AddCategoryButton selectedCategoryName = {'Add Category'} onClick={() => setShowCategoriesModal(true)} />
          <MobileNoteContainer>
            <MobileNoteTitleInput value={noteTitle} onChange={(event) => setNoteTitle(event.target.value)} />
            <MobileNoteBody>
              <NoteBodyTextArea value={noteBody} onChange={(event) => setNoteBody(event.target.value)} />
            </MobileNoteBody>
            <Button mobile onClick={() => createNote(isCreating ? 'create' : 'update')}>{location.pathname.includes('create') ? 'Create Note' : 'Update Note'}</Button>
            {isCreating ? '' : <Button  mobile  onClick={() => deleteNote(id)}>Delete Note</Button>}
          </MobileNoteContainer>
        </Wrapper>
      </PhoneBreakPoint>
    </>
  );
}
