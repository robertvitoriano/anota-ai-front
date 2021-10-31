import { Link,useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import api from 'services/api'
import to from 'await-to-js'
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

  const history = useHistory()

  useEffect(() => {
    getUserFirstaname()
    loadNotes()
    return function cleanup() {
      console.log('cleanup')
    }
  }, [])

  const getUserFirstaname = async () => {

      try{

        setIsLoading(true)
      const response =  await api.get("/users/me",{
          headers:{
            authorization: localStorage.getItem('token') || ''
          }
        });

        setIsLoading(false)
        //@ts-ignore
        const { name } = response?.data
        setUserName(name)
  

      }catch(error:any){
        console.error(error)
        setIsLoading(false)
  
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
  async function loadNotes() {
    try {
      const response = await api.get("/notes",{
        headers:{
          authorization: localStorage.getItem('token') || ''
        }
      });

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