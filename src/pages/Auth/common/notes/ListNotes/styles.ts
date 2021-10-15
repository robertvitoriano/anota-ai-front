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