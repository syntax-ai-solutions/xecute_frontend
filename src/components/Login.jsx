import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from '@mui/material/Button';
import { Box } from '@mui/material'
import GoogleButton from 'react-google-button'
import { auth, googleProvider } from '../context/firebase' 
import { signInWithPopup } from 'firebase/auth'      
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate(); // for redirection after login

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Logged in as:", user.displayName);
      // Redirect or show success message
      navigate("/dashboard"); 
    } catch (error) {
      console.error("Google login error:", error.message);
    }
  };

  return (
    <div>
      <Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <Row>
          <Col md={6} className="mx-auto">
            <h2 className="text-center">Login</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="contained" type="submit">
                Submit
              </Button>

             
                <GoogleButton onClick={handleGoogleSignIn} />
              
            </Form>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mx-auto">
            <p className="text-center">
              Don't have an account? <a href="/register">Register here</a>
            </p>
          </Col>
        </Row>
        </Box>
      </Container>
    </div>
  );
}
