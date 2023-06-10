import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const isValidEmail = (email) => {
    return email.trim() !== '';
  };

  const isStrongPassword = (password) => {
    return password.length >= 8;
  };

  const getGreeting = (nationality) => {
    switch (nationality) {
      case 'en':
        return 'Hello';
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      default:
        return '';
    }
  };

  const getEmailValidationText = (email) => {
    if (isValidEmail(email)) {
      return 'Your email is correct';
    } else {
      return 'Your email is incorrect';
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={handleEmailChange}
                className={isValidEmail(email) ? 'is-valid' : 'is-invalid'}
              />
              <Form.Control.Feedback type="invalid">Invalid email</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className={isStrongPassword(password) ? 'is-valid' : 'is-invalid'}
              />
              <Form.Control.Feedback type="invalid">Weak password</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formNationality">
              <Form.Label>Nationality:</Form.Label>
              <Form.Control as="select" value={nationality} onChange={handleNationalityChange}>
                <option value="en">English</option>
                <option value="de">German</option>
                <option value="fr">French</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Text>{getGreeting(nationality)}</Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Your email is: {email}</Form.Label>
            </Form.Group>

            <Form.Group>
              <Form.Text>{getEmailValidationText(email)}</Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
