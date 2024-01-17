import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Nav, Container, Badge, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from 'react-router-bootstrap';
import SearchBox from './SearchBox';
import { logout } from '../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Assuming you have a 'cart' property in your Redux store state
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate the total number of items in the cart
  const cartItemsCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg="light" expand="lg" className="border-bottom">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src="/images/logo.png" // Replace with the actual path to your logo image
               
                height="70"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <SearchBox />

            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-1" />
                  panier{' '}
                  {cartItemsCount > 0 && (
                    <Badge variant="danger" className="ml-1">
                      {cartItemsCount}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>DECONNEXION</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <FontAwesomeIcon icon={faUser} className="mr-1" />
                    CONNECTER
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <span></span>  <span></span>  <span></span>
          <span></span>  <span></span>  <span></span>          <span></span>  <span></span>  <span></span>
          <span></span>  <span></span>  <span></span>
    </header>
  );
};

export default Header;
