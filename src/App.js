import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {Row, Col} from 'react-bootstrap';
import { Routes, Route} from 'react-router-dom';
import { Container } from '@mui/material';
function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<div>Welcome to Dashboard</div>} />

          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
