import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import api from 'services/api';
import LoadingModal from 'components/LoadingModal'
import Swal from 'sweetalert2'

import {
  Wrapper,
  NoteContainer,
  PageTitle,
  NoteTitleInput,
  NoteBody,
  NoteBodyTextArea,
  CreateNoteButton
} from './styled'
export default function UpdateNotes() {

   
  const [noteTitle, setNoteTitle] = useState<string>();
  const [noteBody, setNoteBody] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const history = useHistory();


  useEffect(() => {
    fetchNote();
  }, []);

  // @ts-ignore
  const { id } = useParams();

  const fetchNote = async () => {
    if (id !== 'create') {
      setIsLoading(true)

      //@ts-ignore
      const response = await api.get(`/notes/${id}`);
      
      
      const {title, body } = response.data;
      
      setNoteTitle(title);
      setNoteBody(body);
      
      setIsLoading(false)
    }
  }

  const createNote = async () => {

    try {
      setIsLoading(true)

      //@ts-ignore
      await api.post('/notes', { title: noteTitle, body: noteBody });
      setIsLoading(false)
      Swal.fire({
        title: "Anotação criada com sucesso !",
        text: `Você criou uma anotação !`,
        icon: "success",
        confirmButtonText: 'Ok !'
      }).then(()=> history.push('/notes'))

    } catch (error) {
      console.error(error)
      Swal.fire(
        'Cancelled',
        String(error),
        'error'
      )
    }
  }

  return (
    <Wrapper>
      {isLoading ? <LoadingModal show={isLoading} /> : ""}
      <PageTitle>Let's Write a Note !</PageTitle>
      <NoteContainer>
        <NoteTitleInput value={noteTitle} onChange = {(event)=>setNoteTitle(event.target.value)} />
        <NoteBody>
          <NoteBodyTextArea value={noteBody} onChange = {(event)=>setNoteBody(event.target.value)}  />
        </NoteBody>
      </NoteContainer>
      <CreateNoteButton onClick={() => createNote()}>Create Note</CreateNoteButton>
    </Wrapper>
  );
}
