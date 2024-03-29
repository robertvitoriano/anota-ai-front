import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

import {
  FormContainer,
  Wrapper,
  Content,
  PresentationSection,
  FormSection, Input,
  SignUpButton,
  LoginMessage,
  Divider,
  ButtonsContainer,
  ReturnButton,
  ButtonText,
  ReturnButtonContainer,
  ReturnButtonIcon,
  Label,
  MobileWrapper
} from './styles'
import { Form } from 'antd'
import backgroundImage from 'assets/login_background.jpg'
import mobileBackgroundImage from 'assets/mobile_login_background.png'
import { PhoneBreakPoint, DesktopBreakPoint } from 'components/responsive_utilities'
import { useDispatch } from 'react-redux'
import { setIsLoading } from 'store/modules/loading/reducer'

import api from 'services/api'
import { Copyright } from 'components/Copyright'
const SignIn = () => {

  const history = useHistory()
  const dispatch = useDispatch()


  const onFinish = async (values: any) => {
    try {
      dispatch(setIsLoading(true))
      await api.post('/users', values);
      const emailElement = document.getElementsByName('email')[0] as HTMLInputElement;
      const email = emailElement.value
      const emailClient = email.split('@')[1].split('.')[0]
      dispatch(setIsLoading(false))
      Swal.fire({
        title: "Cadastro iniciado",
        text: `Em breve um e-mail será enviado para ${email}, confirme seu e-mail, finalize o cadastro e comece a criar !`,
        icon: "success",
        confirmButtonText: 'Abrir E-mail !'
      }).then(() => window.open(
        `https://${emailClient}.com`,
        '_blank'
      )).then(() => history.push('/'))

    } catch (error) {
      dispatch(setIsLoading(false))
      console.error(error)
      Swal.fire(
        'Cancelled',
        String(error),
        'error'
      )
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <DesktopBreakPoint>

        <Wrapper backgroundImage={backgroundImage}>
          <Copyright text="Developed by Robert Vitoriano" />
          <Content>
            <PresentationSection>
              {/* <Title level={1}>Let's write Some Notes</Title> */}

            </PresentationSection>
            <FormSection>
              <Divider>Sign Up !</Divider>
              <FormContainer>
                <LoginMessage >Register yourself !</LoginMessage>
                <Form
                  autoComplete="off"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  initialValues={{ remember: true }}

                >
                  <Label>E-mail !</Label>
                  <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your e-mail!' }]}
                  >
                    <Input
                      placeholder="Type your e-mail"
                      name="email"
                    />
                  </Form.Item>

                  <ButtonsContainer>
                    <Form.Item>
                      <SignUpButton size={'large'} htmlType="submit">
                        <ButtonText>Send Sign Up E-mail !</ButtonText>
                      </SignUpButton>
                    </Form.Item>
                    <Form.Item>
                      <ReturnButtonContainer>
                        <ReturnButtonIcon src=""></ReturnButtonIcon>
                        <ReturnButton to="/login">Return</ReturnButton>
                      </ReturnButtonContainer>
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
          <FormSection>
            <FormContainer>
              <LoginMessage >Register yourself !</LoginMessage>
              <Form
                autoComplete="off"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                initialValues={{ remember: true }}

              >
                <Label>E-mail !</Label>
                <Form.Item
                  name="email"
                  rules={[{ required: true, message: 'Please input your e-mail!' }]}
                >
                  <Input
                    placeholder="Type your e-mail"
                    name="email"
                  />
                </Form.Item>

                <ButtonsContainer>
                  <Form.Item>
                    <SignUpButton size={'large'} htmlType="submit">
                      <ButtonText>Send Sign Up E-mail !</ButtonText>
                    </SignUpButton>
                  </Form.Item>
                  <Form.Item>
                    <ReturnButtonContainer>
                      <ReturnButtonIcon src=""></ReturnButtonIcon>
                      <ReturnButton to="/login">Return</ReturnButton>
                    </ReturnButtonContainer>
                  </Form.Item>
                </ButtonsContainer>
              </Form>
            </FormContainer>
          </FormSection>
        </MobileWrapper>
      </PhoneBreakPoint>
    </>
  )
}

export default SignIn