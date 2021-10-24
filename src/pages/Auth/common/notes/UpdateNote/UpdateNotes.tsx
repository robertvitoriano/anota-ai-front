import { useState } from 'react';
import {Wrapper,
NoteContainer,
PageTitle,
NoteTitleInput,
NoteBody,
NoteBodyTextArea
} from './styled'
 export default function UpdateNotes() {

  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');

   return (
   <Wrapper>
     <PageTitle>Let's type a note !</PageTitle>
     <NoteContainer>
       <NoteTitleInput value = {noteTitle} onChange= {(event) =>setNoteTitle(event.target.value)}/>
       <NoteBody>
          <NoteBodyTextArea value = {noteBody} onChange={(event)=>setNoteBody(event.target.value)}/>
       </NoteBody>
     </NoteContainer>
   </Wrapper>
   );
 }
