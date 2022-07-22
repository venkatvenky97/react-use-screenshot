import './App.css';
 import SideMenu from './SideMenu/SideMenu';
import { BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import { Row,Col, Container } from 'react-bootstrap'
import Chart from './Chart/Chart'
import Paragraph from './Paragraph/Paragraph';

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Container fluid>
        <Row>
             <Col>
              <SideMenu />
             </Col>
             <Col style={{marginLeft:"-200px"}}>
               <Chart /> 
             </Col>
             <Col>
               <Paragraph /> 
             </Col>
        </Row>
        </Container>
    </Router>
  );
}

export default App;