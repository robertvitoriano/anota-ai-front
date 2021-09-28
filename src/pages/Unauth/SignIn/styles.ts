import styled from 'styled-components'
import { Input as AntDesignInput } from "antd";
import { Form as AntDesignForm} from "antd";
import { Button as AntDesignButton} from "antd";

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
export const FormContainer = styled.div`

`
export const Content = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
width: 100%;
height: 100vh;
background-position: center;
background-repeat: no-repeat;
background-size: cover;


`
export const PresentationSection = styled.div`
width: 50%;
height: 100%;

`

export const FormSection = styled.div`
width: 40%;
height: 80%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border: 10px solid gray;
border-radius: 15px;
opacity: 0.5;
margin-right: 12%; 
position: relative;
top:10%;

`
export const Form = styled(AntDesignForm)`

`
export const Input = styled(AntDesignInput)`

`
export const Button = styled(AntDesignButton)`
position: relative;
z-index: 9999;

`
