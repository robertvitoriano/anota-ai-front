import { useHistory } from 'react-router-dom'
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
  PasswordInput,
  ReturnButtonContainer,
  ReturnButtonIcon,
  Label
} from './styles'
import { Form } from 'antd'
import backgroundImage from 'assets/login_background.jpg'
const SignIn = () => {

  const history = useHistory()

  const onFinish = (values: any) => {
    alert(values.username + ' ' + values.password);
    history.push('/')
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

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
}

export default SignIn