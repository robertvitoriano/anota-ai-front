import styled from 'styled-components'
interface Props {
backgroundImage:any
}
export const Wrapper = styled.div<Pick<Props, 'backgroundImage'>>`
display: flex;
align-items: center;
flex-direction: column;
background-image: url('${(props) => props.backgroundImage}') ;
width: 100vw;
height: 100vh;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`
export const NameTitle = styled.h1`
font-family: 'Calligraffitti', cursive;
font-weight: bold;
margin-top: 1.5rem;
font-size: 2.5rem;
`

export const NotesContainer = styled.div`
width:90vw;
height:80vh;
list-style: none;
display: grid;
grid-template-columns: 28% 28% 28%;
grid-gap: 8%;
position: absolute;
top:0;
padding: 30px;
overflow: auto;
margin-top: 100px;
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

`

export const NoteTitle = styled.h2`
text-align: center;
margin-top:5px;
&:hover{
  text-decoration: underline;
  cursor:pointer;
  }
`

export const NoteBody = styled.p`
text-align: justify;
margin-top:5px;
`
export const NoteContent = styled.div``