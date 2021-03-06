import styled from 'styled-components'
type MobileProp = {
  mobile?: boolean
}

interface NoteProps extends MobileProp {}
interface WrapperProps extends MobileProp {}


export const Wrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: ${({mobile}:WrapperProps)=>(mobile?'100vw':'100%')};
height: 100vh;
`
export const NameTitle = styled.h1`
font-family: 'Calligraffitti', cursive;
font-weight: bold;
margin-top: 1.5rem;
font-size: 2.5rem;
`

export const NotesContainer = styled.div`
width:80%;
height:80%;
list-style: none;
display: grid;
grid-template-columns: 28% 28% 28%;
grid-gap: 8%;
padding: 30px;
overflow: auto;
&::-webkit-scrollbar {
    width: 1em;
}
&::-webkit-scrollbar-track {
    background-color: transparent;

}
&::-webkit-scrollbar-thumb {
  background-color: #817059;
  border-radius:10px;
  
}

`
export const Note = styled.div`
background-color: white;
height: 200px;
border:5px solid #242324;
border-radius:15px;
word-wrap: break-word;
padding:0 10px;
margin-bottom: ${({mobile}:NoteProps)=>(mobile?'.5rem':'none')};
width: 100%;
position:relative;
overflow: hidden;
`

export const NoteTitle = styled.h2`
text-align: center;
margin-top:5px;
&:hover{
  text-decoration: underline;
  cursor:pointer;
  }
  color:black
`


export const NoteBody = styled.p`
text-align: justify;
margin-top:5px;
`
export const NoteContent = styled.div``

export const AddNoteButton = styled.div`
height: 200px;
display: flex;
justify-content: center;
align-items: center;
&:hover{
  cursor: pointer;
}
`
export const NoteDate = styled.div`
background-color:red;
width:fit-content;
background-color: white;
position:absolute;
bottom:0.5rem;
right:1rem;
font-weight: bold;
font-size: 1rem;
`

export const AddNoteButtonIcon = styled.img`
width: 200px;
;
`

export const SearchBar = styled.input`
width: 80%;
height: 40px;
border-radius: 5px;
border: 1px solid #242324;
outline: none;
padding: 0 10px;
font-size: 1.5rem;
text-align: center;
`
export const SearchBarLabel = styled.label`
font-size: 1.5rem;
margin-right: .5rem ;
`
export const SearchBarWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 1rem;
margin-bottom: 1rem;

`
export const MobileNotesContainer = styled.div`
height: 100%;
overflow: auto;
width: 80vw;
`

export const MobileAddNoteButton = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
&:hover{
  cursor: pointer;
}
padding: .5rem;
background-color: white;
border:1px solid #242324;
width: 60vw;
border-radius: 1rem;
margin-bottom: .5rem;

`

export const MobileAddNoteButtonIcon = styled.img`
width: 40px;
`
export const MobileAddNoteButtonText = styled.span`
color:black;
font-family: 'Calligraffitti', cursive;
font-weight: bold;
font-size: 1rem;
`
export const MobileAddNoteButtonTextContainer = styled.div`
text-align: center;
width: 100%;
`
