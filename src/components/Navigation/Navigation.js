import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import "./navigation.css"

class Navigation extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navigation-spacing">
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
                                <LinkContainer to="/create-league">
                                    <NavDropdown.Item>Create League</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/join-league">
                                    <NavDropdown.Item>Join League</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider/>
                                <LinkContainer to="/my-league">
                                    <NavDropdown.Item>My Leagues</NavDropdown.Item>
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