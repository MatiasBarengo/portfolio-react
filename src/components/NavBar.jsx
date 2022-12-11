import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { change } from '../store/slices/isDark.slice';

const NavBar = () => {

  const dispatch = useDispatch()
  const isDark = useSelector(state => state.isDark)

  const changeBackground = () => {
    dispatch(change())
  }

  const textColor = () => {
    return isDark ? { color: 'black', fontSize: '1.3rem', marginRight: '.7rem' } : { color: 'white', fontSize: '1.3rem', marginRight: '.7rem' }
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg={isDark ? 'white' : 'black'} style={{ zIndex: '1', position: 'fixed', width: '100%' }}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link
              href="#features"
              style={textColor()}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              style={textColor()}
            >
              About me
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              style={textColor()}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              style={textColor()}
            >
              Proyects
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              style={textColor()}

            >Contact me
            </Nav.Link>
          </Nav>
          <Nav>
            <Button
              onClick={changeBackground}
              style={{ background: 'none', border: 'none', fontSize: '25px' }}
            >
              {
                isDark ?
                  <i className="fa-solid fa-moon" style={{ color: 'black', padding: '10px' }}></i> :
                  <i className="fa-solid fa-sun" style={{ color: 'white', padding: '10px' }}>
                  </i>
              }
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;


