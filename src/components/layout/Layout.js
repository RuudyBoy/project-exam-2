import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Home from '../home/Home';
import Hotels from '../hotels/Hotels';
import About from '../about/About';
import Contact from '../contact/Contact';

function Layout() {
  return (
    <Router>
      <Navbar expand="lg">
        <NavLink to="/" exact>
          <Navbar.Brand>Hostinger</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/hotels" className="nav-link">
              Hotels
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button>Search</Button>
          </Form>
          <Button className="login">Login</Button>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default Layout;