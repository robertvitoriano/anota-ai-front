import React, { useState, useEffect } from 'react'
import api from 'services/api'
import { Wrapper, NameTitle, Note, NotesContainer } from './styles'
import backgroundImage from 'assets/notes_list_background.jpg'
import LoadingModal from 'components/LoadingModal'

const ListNotes = () => {

  const [userName, setUserName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [notes, setNotes] = useState(false)


  const getUserFirstaname = async () => {
    setIsLoading(true)
    const response = (await api.get("/users/me", {
      headers: {
        //@ts-ignore
        token: localStorage.getItem("token")

      },
    }));
    setIsLoading(false)
    const { name } = response.data

    setUserName(name)

    console.log('RESPONSE ', response)

  }
  async function loadNotes() {
    try {
      const response = await api.get("/notes", {
        headers: {
          //@ts-ignore
          token: localStorage.getItem("token"),
        },
      });

      const { notes } = response.data

      setNotes(notes)

    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getUserFirstaname()
    loadNotes()
  }, [])


  return <Wrapper backgroundImage={backgroundImage}>
    {isLoading ? <LoadingModal show={isLoading} /> : ""}
    <NameTitle>Seja Bem-vindo(a) {userName}</NameTitle>
    <NotesContainer>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      
    </NotesContainer>

  </Wrapper>
}

export default ListNotes