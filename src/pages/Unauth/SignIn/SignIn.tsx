import { FormContainer, Wrapper, Content, PresentationSection, FormSection, Input, SignInButton, LoginMessage, Divider, ButtonsContainer, SignUpButton, ButtonText } from './styles'
import { Form } from 'antd'
import backgroundImage from 'assets/login_background.jpg'
const SignIn = () => {

  return <Wrapper backgroundImage={backgroundImage}>
    <Content>
      <PresentationSection>
        {/* <Title level={1}>Let's write Some Notes</Title> */}

      </PresentationSection>
      <FormSection>
        <Divider>Login</Divider>
        <FormContainer>
          <LoginMessage >Let's write Some Notes</LoginMessage>
          <Form>
            <Form.Item>
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="Password" />
            </Form.Item>
            <ButtonsContainer>
            <Form.Item>
              <SignInButton size={'large'} >
                <ButtonText>Login !</ButtonText>
                </SignInButton>
            </Form.Item>
            <Form.Item>
              <SignUpButton size={'large'} >Sign Up !</SignUpButton>
            </Form.Item>
            </ButtonsContainer>
          </Form>
        </FormContainer>

      </FormSection>


    </Content>


  </Wrapper>
}

export default SignIn