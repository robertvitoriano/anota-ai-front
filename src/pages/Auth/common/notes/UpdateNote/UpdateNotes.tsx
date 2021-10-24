import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import api from 'services/api';
import {
  Wrapper,
  NoteContainer,
  PageTitle,
  NoteTitleInput,
  NoteBody,
  NoteBodyTextArea
} from './styled'
export default function UpdateNotes() {

  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');
  const { noteId } = useParams();

  useEffect(() => {
    fetchNote();
  }, []);

  const fetchNote = async () => {
    const { title, body } = await api.get(`/notes/${noteId}`);
    setNoteTitle(title);
    setNoteBody(body);
  }

  return (
    <Wrapper>
      <PageTitle>Let's type a note !</PageTitle>
      <NoteContainer>
        <NoteTitleInput value={noteTitle} onChange={(event) => setNoteTitle(event.target.value)} />
        <NoteBody>
          <NoteBodyTextArea value={noteBody} onChange={(event) => setNoteBody(event.target.value)} />
        </NoteBody>
      </NoteContainer>
    </Wrapper>
  );
}
