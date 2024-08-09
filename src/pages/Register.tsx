import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFetcher } from "react-router-dom";



export default function Register() {
  const fetcher = useFetcher();

    return (
      <Container>
        <Form as={fetcher.Form} method="post" action="/auth">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="eMail"/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password"/>
          </Form.Group>
          <Button variant="primary" type="submit" name="AuthType" value="Register">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }