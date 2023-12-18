//import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './Header';
import AddTask from './AddTask';
import TableList from './TableList';
import  MyVerticallyCenteredModal from './ModalTask'
import counterSlice from './SlicePage';
 

function App() {
  return (
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="6">

            <Header/>
            <AddTask/>
            <TableList/>
           < MyVerticallyCenteredModal/>
           <counterSlice/>
          </Col>
        </Row>
      </Container>
  );
}

export default App;
