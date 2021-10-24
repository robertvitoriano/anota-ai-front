import {Wrapper,
NoteContainer,
PageTitle,
NoteTitleInput,
NoteBody,
NoteBodyTextArea
} from './styled'
 export default function UpdateNotes() {

   return (
   <Wrapper>
     <PageTitle>Let's type a note !</PageTitle>
     <NoteContainer>
       <NoteTitleInput/>
       <NoteBody>
          <NoteBodyTextArea/>
       </NoteBody>
     </NoteContainer>
   </Wrapper>
   );
 }
