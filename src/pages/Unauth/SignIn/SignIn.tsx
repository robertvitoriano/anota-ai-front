import { FormContainer, Wrapper, Content, PresentationSection, FormSection, Form, Input, Button } from './styles'
import backgroundImage from 'assets/login_background.jpg'

const SignIn = () => {

  return <Wrapper backgroundImage={backgroundImage}>
    <Content>
      <PresentationSection>

      </PresentationSection>
      <FormSection>
        <FormContainer>
          <Form>
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <Button>Hello WOrld</Button>
          </Form>
        </FormContainer>

      </FormSection>


    </Content>


  </Wrapper>
}

export default SignIn