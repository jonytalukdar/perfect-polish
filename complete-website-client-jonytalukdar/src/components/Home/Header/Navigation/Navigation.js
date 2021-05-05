import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { UserContext } from '../../../../App';

const Navigation = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div>
      <Navbar expand="md">
        <Navbar.Brand href="#home">
          <h3>
            Perfect <span style={{ color: '#24bd7c' }}>Polish</span>
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/order">
              Orders
            </Nav.Link>
            <Nav.Link as={Link} to="/admin">
              Admin
            </Nav.Link>
            <Nav.Link as={Link} to="/#">
              Deals
            </Nav.Link>
            {loggedInUser.name || loggedInUser.email ? (
              <Nav.Link>{loggedInUser.name}</Nav.Link>
            ) : (
              <Nav.Link
                style={{
                  backgroundColor: '#24bd7c',
                  borderRadius: '25px  0  25px  25px',
                  padding: '7px 15px',
                }}
                className="btn text-white"
                as={Link}
                to="/login"
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
