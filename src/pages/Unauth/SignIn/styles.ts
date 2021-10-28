import styled from 'styled-components'
import { Input as AntDesignInput, Form as AntDesignForm, Button as AntDesignButton, Divider as AntDesignDivider } from "antd";
import { FileProtectOutlined } from '@ant-design/icons';
interface Props {
  backgroundImage: any
}
interface FormSectionProps {
  mobile?: boolean
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
justify-content:space-between;
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
width: ${({mobile}:FormSectionProps)=>(mobile ? '100%' : '40%')};
height: 80%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
/* border: .5rem solid gray;
border-radius: 0.5rem; */
margin-right:${({mobile}:FormSectionProps)=>(mobile ? '0%' : '12%')}; 
position: relative;
top:10%;

`
export const Form = styled(AntDesignForm)`

`
export const Input = styled(AntDesignInput)`
border: 2px solid gray;
border-radius: 2rem;
height:3rem;
`
export const PasswordInput = styled(AntDesignInput.Password)`
border: 2px solid gray;
border-radius: 2rem;
height:3rem;
`
export const SignInButton = styled(AntDesignButton)`
position: relative;
background-color: #DEDAE8;
padding-bottom:10px ;
border-radius: 1rem;
`
export const SignUpButton = styled(AntDesignButton)`
position: relative;
background-color: transparent;
border: .1rem gray solid;
border-radius: 1rem;

`
export const LoginMessage = styled.h2`
font-family: 'Calligraffitti', cursive;
margin-bottom: 3rem;
font-weight: 600;
font-size: 2rem;
`
export const ButtonText = styled.h2`
font-family: 'Calligraffitti', cursive;
margin-bottom: 4rem;
font-weight: 600;
font-size: 1.5rem;


`
export const Divider = styled(AntDesignDivider)`
position: absolute;
top:0;
`
export const ButtonsContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
`

export const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const MobileWrapper = styled.div<Pick<Props, 'backgroundImage'>>`
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