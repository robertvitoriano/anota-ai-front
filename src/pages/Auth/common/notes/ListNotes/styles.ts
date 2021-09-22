import styled from 'styled-components'
interface Props {
backgroundImage:any
}
export const Wrapper = styled.div<Pick<Props, 'backgroundImage'>>`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-image: url('${(props) => props.backgroundImage}') ;
width: 100vw;
height: 100vh;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`