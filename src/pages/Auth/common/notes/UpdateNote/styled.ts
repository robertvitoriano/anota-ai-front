import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
width: 100%;
height: 100vh;
`
export const NoteContainer = styled.div``

export const NoteBody = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height:50vh;
width:30vw;
background-color: white;
border-radius:1.5rem;
border:1rem solid #370502;

`

export const PageTitle = styled.h1`
font-family: 'Calligraffitti', cursive;
font-weight: bold;
margin-top: 1.5rem;
font-size: 2.5rem;
`

export const NoteTitleInput = styled.input`
border:solid 1rem  #370502;
width:30vw;
height:8vh;
border-radius:1.5rem;
margin-bottom: 5px;
padding-left: 1rem;


`
export const NoteBodyTextArea = styled.textarea`
width:100%;
border: none;
resize: none;
height:100%;
outline: none;
padding: 1rem;
border-radius:1.5rem;

`

export const CreateNoteButton = styled.div`
&:hover{
    cursor: pointer;
}
border-radius: 5%;
background-color: #F1D9CF;
padding: 1rem;
font-weight: bolder;
font-family: 'Calligraffitti', cursive;
font-size: 1.5rem;


`