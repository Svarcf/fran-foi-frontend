import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

class Navigation extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Home</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer to="/premier">
                                <Nav.Link>Premier League</Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="My League" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Create League</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Join League</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <LinkContainer to="/my-league">
                                    <NavDropdown.Item href="#action/3.4">My Leagues</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <LinkContainer to="/register">
                                <Nav.Link>Sign up</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Navigation;