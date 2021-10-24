import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
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

  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    fetchNote();
  }, []);

  // @ts-ignore
  const { noteId } = useParams();

  const fetchNote = async () => {
    if (noteId !== 'create') {
      //@ts-ignore
      const { title, body } = await api.get(`/notes/${noteId}`);
      setNoteTitle(title);
      setNoteBody(body);
    }
  }

  const createNote = async () => {

    try {
      setIsLoading(true)

      //@ts-ignore
      await api.post('/notes', { title: noteTitle, body: noteBody }, {
        headers: {
          authorization: String(localStorage.getItem('token'))
        }
        //@ts-ignore
      });
      setIsLoading(false)
      Swal.fire({
        title: "Anotação criada com sucesso !",
        text: `Você criou uma anotação !`,
        icon: "success",
        confirmButtonText: 'Ok !'
      })

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
        <NoteTitleInput value={noteTitle} onChange={(event) => setNoteTitle(event.target.value)} />
        <NoteBody>
          <NoteBodyTextArea value={noteBody} onChange={(event) => setNoteBody(event.target.value)} />
        </NoteBody>
      </NoteContainer>
      <CreateNoteButton onClick={() => createNote()}>Create Note</CreateNoteButton>
    </Wrapper>
  );
}
