import styled from 'styled-components';

type mobile =  {
    mobile?: boolean;
}

interface PageTitleProps extends mobile {}
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
margin-top: ${({mobile}:PageTitleProps)=>(mobile?'3.5rem':'1.5rem')};
font-size: ${({mobile}:PageTitleProps)=>(mobile?'2rem':'2.5rem')};
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
text-align: center;

`

// MOBILE

export const MobileNoteContainer = styled.div`

`
export const MobileNoteBody = styled.div`

display: flex;
align-items: center;
flex-direction: column;
height:50vh;
width:80vw;
background-color: white;
border-radius:1.5rem;
border:.5rem solid #370502;
margin-bottom: 1rem;

`
export const MobileNoteTitleInput = styled.input`
border:solid .5rem  #370502;
width:80vw;
height:8vh;
border-radius:1.5rem;
margin-bottom: 5px;
padding-left: 1rem;
outline: none;
`