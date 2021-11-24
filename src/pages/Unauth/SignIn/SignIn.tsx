
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setToken } from 'store/modules/auth/reducer'

import {
  FormContainer,
  Wrapper, Content,
  PresentationSection,
  FormSection, Input,
  SignInButton,
  LoginMessage,
  Divider,
  ButtonsContainer,
  SignUpButton,
  ButtonText,
  PasswordInput,
  MobileWrapper
} from './styles'
import { Form } from 'antd'
import Swal from 'sweetalert2'
import backgroundImage from 'assets/login_background.jpg'
import mobileBackgroundImage from 'assets/mobile_login_background.png'
import { PhoneBreakPoint, DesktopBreakPoint } from 'components/responsive_utilities'
import api from 'services/api'
import { setIsLoading } from 'store/modules/loading/reducer'


const SignIn = () => {


  const history = useHistory()

  const dispatch = useDispatch()

  const onFinish = async (values: any) => {
    try {
      dispatch(setIsLoading(true));
      const response = await api.post('/users/login', values);

      const { token, user } = response.data;

      localStorage.setItem("userId", user._id);
      dispatch(setToken('Bearer '+token));
      dispatch(setIsLoading(false));

      history.push('/notes')

    } catch (error: any) {
      
      dispatch(setIsLoading(false))

      console.error(error)

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


  return <>
    <DesktopBreakPoint>
      <Wrapper backgroundImage={backgroundImage}>
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
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
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
                    <SignInButton size={'large'} htmlType='submit' >
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
    </DesktopBreakPoint>
    <PhoneBreakPoint>
      <MobileWrapper backgroundImage={mobileBackgroundImage}>
          <FormSection mobile>
            <FormContainer>
              <LoginMessage >Let's write Some Notes</LoginMessage>
              <Form
                autoComplete="off"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
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
                    <SignInButton size={'large'} htmlType='submit' >
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
      </MobileWrapper>
    </PhoneBreakPoint>
  </>
}

export default SignIn