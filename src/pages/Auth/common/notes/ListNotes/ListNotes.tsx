import { Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import api from 'services/api'
import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz'
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
  MobileAddNoteButtonTextContainer,
  NoteDate,
  SearchBar,
  SearchBarLabel,
  SearchBarWrapper
} from './styles'
import plusSign from 'assets/plus-sign.png'
import { PhoneBreakPoint, DesktopBreakPoint } from 'components/responsive_utilities'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoading } from 'store/modules/loading/reducer'
import { setToken } from 'store/modules/auth/reducer'

const ListNotes = () => {

  const [userName, setUserName] = useState('')
  const [notes, setNotes] = useState([])

  const history = useHistory()
  const dispatch = useDispatch()
  //@ts-ignore
  const token = useSelector(state => state.auth.token)
  useEffect(() => {
    getUserFirstaname()
    loadNotes()
  }, [])

  const getUserFirstaname = async () => {
    dispatch(setIsLoading(true))

    try {
      const response = await api.get("/users/me", {
        headers: {
          authorization: token || ''
        }
      });

      //@ts-ignore
      const { name } = response?.data
      setUserName(name)

      dispatch(setIsLoading(false))


    } catch (error: any) {
      dispatch(setIsLoading(false));

      console.error(error)

      return Swal.fire(
        'Um erro aconteceu',
        String(error.message),
        'error'
      ).then(() => {
        dispatch(setToken(''));
        history.push('/')
      })

    }
  }
  async function loadNotes() {
    try {
      dispatch(setIsLoading(true))

      const response = await api.get("/notes", {
        headers: {
          authorization: token || ''
        }
      });

      const notes = response.data

      setNotes(notes)

      dispatch(setIsLoading(false))

    } catch (error: any) {
      console.error(error)

      Swal.fire(
        'Um erro aconteceu',
        String(error.message),
        'error'
      )
    }
  }

  const getFormattedDate = (timestamp: string) => {
    const date = new Date(timestamp)
    const timeZone = 'Brazil/Sao_Paulo'
    const pattern = 'd/M/yyyy - HH:mm:ss'
    const output = format(date, pattern, { timeZone })
    return output
  }

  return (
    <>
      <DesktopBreakPoint>
        <Wrapper>
          <NameTitle>Welcome {userName}</NameTitle>
          <SearchBarWrapper>
            <SearchBarLabel >Search:</SearchBarLabel>
            <SearchBar placeholder='Search Notes' />
          </SearchBarWrapper>
          <NotesContainer>
            {notes && notes.map(({ _id, title, body, createdAt }) =>
              <Note key={_id}>
                <Link to={{ pathname: `/note/${_id}`, state: { title, body } }}  >
                  <NoteTitle>{title}</NoteTitle>
                </Link>
                <NoteBody>
                  {body}
                </NoteBody>
                <NoteDate>{getFormattedDate(createdAt)}</NoteDate>
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
          <NameTitle>Olá {userName.split(' ')[0]}</NameTitle>
          <Link to={`/note/create`}>
            <MobileAddNoteButton >
              <MobileAddNoteButtonIcon src={plusSign} />
              <MobileAddNoteButtonTextContainer>
                <MobileAddNoteButtonText>Add New Note !</MobileAddNoteButtonText>
              </MobileAddNoteButtonTextContainer>
            </MobileAddNoteButton>
          </Link>
          <SearchBarWrapper>
            <SearchBar placeholder='Search Notes'/>
          </SearchBarWrapper>
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