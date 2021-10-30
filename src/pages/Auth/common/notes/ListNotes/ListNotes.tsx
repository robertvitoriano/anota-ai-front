import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import api from 'services/api'
import { Wrapper,
         NameTitle, 
         Note, 
         NotesContainer, 
         NoteTitle, 
         NoteBody, 
         AddNoteButton, 
         AddNoteButtonIcon, 
         MobileNotesContainer } from './styles'
import LoadingModal from 'components/LoadingModal'
import plusSign from 'assets/plus-sign.png'
import { PhoneBreakPoint, DesktopBreakPoint } from 'components/responsive_utilities'


const ListNotes = () => {

  const [userName, setUserName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [notes, setNotes] = useState([])

  const getUserFirstaname = async () => {
    setIsLoading(true)
    const response = (await api.get("/users/me"));
    setIsLoading(false)
    const { name } = response.data
    setUserName(name)
  }
  async function loadNotes() {
    try {
      const response = await api.get("/notes");

      const notes = response.data

      setNotes(notes)

    } catch (error) {
      console.error(error)
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
          <MobileNotesContainer>
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
              <AddNoteButton mobile >
                <AddNoteButtonIcon src={plusSign} mobile />
              </AddNoteButton>
            </Link>
          </MobileNotesContainer>
        </Wrapper>
      </PhoneBreakPoint>
    </>
  )

}

export default ListNotes