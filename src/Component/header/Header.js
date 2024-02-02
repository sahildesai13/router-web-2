import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css';
import { Col } from 'react-bootstrap';
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <>
      {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="header p-0">
          <Container fluid className='my-2'>
            <Navbar.Brand className='d-flex align-items-center'>
              <img src={require(`./img/logo1.png`)} className='ps-1' />
              <a className='fs-3 fw-bold logoTxt'>Xchain</a>
            </Navbar.Brand>
            <Col lg={4} className='d-flex inputCol justify-content-center'>
              <div className='position-relative InputCover'>
                <input type="text" placeholder='Search Items, Collection Or User' className='HeaderInput border-0 p-3 rounded' />
                <CiSearch className='InputLogo' />
              </div>
            </Col>
            <Col lg={3} className='d-flex justify-content-end align-items-center gap-3'>
            <button className='Btn fw-bolder px-5 py-3 rounded-4'>Connect Wallet</button>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='btn-shadow' />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className='header'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='header'>
                <Nav className="justify-content-end flex-grow-1  pe-3">
                  <Nav.Link >Home</Nav.Link>
                  <Nav.Link >Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            </Col>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;