
import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { FormContainer, Wrapper, Content, PresentationSection, FormSection, Input, SignInButton, LoginMessage, Divider, ButtonsContainer, SignUpButton, ButtonText, PasswordInput } from './styles'
import { Form } from 'antd'
import Swal from 'sweetalert2'
import backgroundImage from 'assets/login_background.jpg'
import api from 'services/api'
import LoadingModal from 'components/LoadingModal'


const SignIn = () => {

  const [isLoading, setIsLoading] = useState<boolean>()

  const history = useHistory()

  const onFinish = async (values: any) => {
    try{

      setIsLoading(true)

      const response = await api.post('/users/login',values);

      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", user._id);

      setIsLoading(false)

      // history.push('/notes')

    }catch(error:any){
      console.error(error)
      setIsLoading(false)

      Swal.fire(
        'Um erro aconteceu',
         String(error.message),
        'error'
      )
    }

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return <Wrapper backgroundImage={backgroundImage}>
          {isLoading ? <LoadingModal show={isLoading} /> : ""}

    <Content>
      <PresentationSection>
        {/* <Title level={1}>Let's write Some Notes</Title> */}

      </PresentationSection>
      <FormSection>
        <Divider>Login</Divider>
        <FormContainer>
          <LoginMessage >Let's write Some Notes</LoginMessage>
          <Form
            autoComplete="off"
            onFinish = {onFinish}
            onFinishFailed = {onFinishFailed}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}

            >
              <Input 
              placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <PasswordInput 
              placeholder="Password" 
              />
            </Form.Item>
            <ButtonsContainer>
              <Form.Item>
                <SignInButton size={'large'} htmlType = 'submit' >
                  <ButtonText>Login !</ButtonText>
                </SignInButton>
              </Form.Item>
              <Form.Item>
                <SignUpButton size={'large'}  >
                  <Link to="/signup">Sign Up !</Link>
                </SignUpButton>
              </Form.Item>
            </ButtonsContainer>
          </Form>
        </FormContainer>
      </FormSection>
    </Content>


  </Wrapper>
}

export default SignIn