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

  const onFinish = (values: any) => {
    alert(values.username + ' ' + values.password);
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
            <Label>Username</Label>
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}

            >
              <Input
                placeholder="Type your username"
                name="username"
                />
            </Form.Item>
            <Label>Password</Label>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <PasswordInput
                placeholder="Type your password"
                name="password"

              />
            </Form.Item>
            <ButtonsContainer>
              <Form.Item>
                <SignUpButton size={'large'} htmlType="submit">
                  <ButtonText>Sign Up !</ButtonText>
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