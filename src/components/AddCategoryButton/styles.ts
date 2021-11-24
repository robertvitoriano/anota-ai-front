import styled from 'styled-components'

export const Wrapper = styled.div`
border: dashed 4px #370502;
display: flex;
justify-content:space-evenly;
align-items: center;
width:10rem;
color: #370502;
font-weight: bold;
/* font-family: 'Calligraffitti', cursive; */
border-radius: 10%;
&:hover{
    cursor: pointer;
}
`

export const PlusSign = styled.div`
font-size: 2rem;

&:after{
    content: '+';

}


`