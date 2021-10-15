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
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;

}
&::-webkit-scrollbar-thumb {
  background-color: #817059;
  border-radius:10px;
}

`
export const Note = styled.div`
background-color: white;
height: 200px;
`

export const NoteContent = styled.div``