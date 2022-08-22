import './App.css';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Tarif from './components/Tarif';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from './components/Contact';
import Container from 'react-bootstrap/Container';
import {FiFacebook} from 'react-icons/fi'
import {GrInstagram} from 'react-icons/gr'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
   <>
      <div className = "container-fluid">
<BrowserRouter>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/gallery">Gallerie</Nav.Link>
            <Nav.Link href="/tarif">Tarifs et spécification</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>

          </Nav>
        <div className = "social">
            <FiFacebook/>
            <GrInstagram/>
           
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/gallery" element={<Gallery />} />
                  <Route exact path="/tarif" element={<Tarif />} />
                  <Route exact path="/contact" element={<Contact />} />
              </Routes>
              
          </BrowserRouter>
          
      
      </div>
     
      </>
  );
 
}

export default App;

