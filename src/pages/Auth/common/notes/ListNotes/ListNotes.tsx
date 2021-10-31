import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import api from 'services/api'
import {
  Wrapper,
  NameTitle,
  Note,
  NotesContainer,
  NoteTitle,
  NoteBody,
  AddNoteButton,
  AddNoteButtonIcon,
  MobileAddNoteButton,
  MobileAddNoteButtonIcon,
  MobileAddNoteButtonText,
  MobileNotesContainer,
  MobileAddNoteButtonTextContainer
} from './styles'
import LoadingModal from 'components/LoadingModal'
import plusSign from 'assets/plus-sign.png'
import { PhoneBreakPoint, DesktopBreakPoint } from 'components/responsive_utilities'


const ListNotes = () => {

  const [userName, setUserName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [notes, setNotes] = useState([])

  const getUserFirstaname = async () => {
    try{
      setIsLoading(true)
      const response = (await api.get("/users/me"));
      setIsLoading(false)
      const { name } = response.data
      setUserName(name)
      
    }catch(error:any){
      console.error(error)
      setIsLoading(false)

      Swal.fire(
        'Um erro aconteceu',
        String(error.message),
        'error'
      )
    }
  }
  async function loadNotes() {
    try {
      const response = await api.get("/notes");

      const notes = response.data

      setNotes(notes)

    } catch (error:any) {
      console.error(error)
      setIsLoading(false)

      Swal.fire(
        'Um erro aconteceu',
        String(error.message),
        'error'
      )
    }
  }
  useEffect(() => {
    getUserFirstaname()
    loadNotes()
    return function cleanup() {
      console.log('cleanup')
    }
  }, [])


  return (
    <>
      <DesktopBreakPoint>
        <Wrapper>
          {isLoading ? <LoadingModal show={isLoading} /> : ""}
          <NameTitle>Seja Bem-vindo(a) {userName}</NameTitle>
          <NotesContainer>
            {notes && notes.map(({ _id, title, body }) =>
              <Note key={_id}>
                <Link to={{ pathname: `/note/${_id}`, state: { title, body } }}  >
                  <NoteTitle>{title}</NoteTitle>
                </Link>
                <NoteBody>
                  {body}
                </NoteBody>
              </Note>)}
            <Link to={`/note/create`}>
              <AddNoteButton>
                <AddNoteButtonIcon src={plusSign} />
              </AddNoteButton>
            </Link>
          </NotesContainer>
        </Wrapper>
      </DesktopBreakPoint>
      <PhoneBreakPoint>
        <Wrapper>
          {isLoading ? <LoadingModal show={isLoading} /> : ""}
          <NameTitle>Olá {userName.split(' ')[0]}</NameTitle>
          <Link to={`/note/create`}>
            <MobileAddNoteButton >
              <MobileAddNoteButtonIcon src={plusSign} />
              <MobileAddNoteButtonTextContainer>
                <MobileAddNoteButtonText>Add New Note !</MobileAddNoteButtonText>
              </MobileAddNoteButtonTextContainer>
            </MobileAddNoteButton>
          </Link>
          <MobileNotesContainer>
            {notes && notes.map(({ _id, title, body }) =>
              <Note key={_id} mobile>
                <Link to={{ pathname: `/note/${_id}`, state: { title, body } }}  >
                  <NoteTitle>{title}</NoteTitle>
                </Link>
                <NoteBody>
                  {body}
                </NoteBody>
              </Note>)}
          </MobileNotesContainer>
        </Wrapper>
      </PhoneBreakPoint>
    </>
  )

}

export default ListNotes