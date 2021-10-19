import './App.css';
import Container from 'react-bootstrap/Container'; 
import {BrowserRouter as Router} from 'react-router-dom';
import MisRoutes from './MisRutas';
import Header from './componentes/Header';

function App() {
  return (
    <Container fluid>
      <Router>
        <Header/>
        <MisRoutes/>
      </Router>
    </Container>
  );
}

export default App;
