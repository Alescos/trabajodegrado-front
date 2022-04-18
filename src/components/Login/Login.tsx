// import logo from '../Header/logo-app.png';

import { Button, Container, Form } from 'react-bootstrap';
import './Login.scss';

function Login() {
  return (
    <Container className="mt-5 mx-auto justify-items-center">
      <Form className="Form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo Electronico</Form.Label>
          <Form.Control type="email" size="sm" placeholder="Enter email" />
          <Form.Text className="text-muted">
            Well never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
