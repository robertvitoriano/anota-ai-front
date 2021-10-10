import {
  FormContainer,
  Wrapper,
  Content,
  PresentationSection,
  FormSection, Input,
  SignInButton,
  LoginMessage,
  Divider,
  ButtonsContainer,
  ReturnButton,
  ButtonText,
  PasswordInput,
  ReturnButtonContainer,
  ReturnButtonIcon,
  Label
} from './styles'
import { Form } from 'antd'
import backgroundImage from 'assets/login_background.jpg'
const SignIn = () => {

  return <Wrapper backgroundImage={backgroundImage}>
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
          >
            <Form.Item
              name="username"
            >
              <Label>Username</Label>
              <Input
                placeholder="Type your username" />
            </Form.Item>
            <Form.Item>
            <Label>Password</Label>
              <PasswordInput
                placeholder="Type your password"
              />
            </Form.Item>
            <ButtonsContainer>
              <Form.Item>
                <SignInButton size={'large'} >
                  <ButtonText>Sign Up !</ButtonText>
                </SignInButton>
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
}

export default SignIn