import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';
export class Header extends Component {
    render() {
        return (
            <>
                {
                    this.props.isAuthenticated ?
                        <>
                            <Navbar bg="dark" variant="dark">
                                <Container>
                                    <Navbar.Brand href="#home">{this.props.NAME}</Navbar.Brand>
                                    <Nav className="me-auto">
                                        <Nav.Link tag={Link} to="/" href="/">Home</Nav.Link>
                                        <Nav.Link tag={Link} to="/favorite" href="/favorite">Favorite</Nav.Link>
                                    </Nav>
                                    <LogoutButton />
                                </Container>
                            </Navbar>
                        </>
                        :
                        <Navbar bg="dark" variant="dark">
                            <Container>
                                <Navbar.Brand href="#home">401 EXAM</Navbar.Brand>
                                <Nav className="me-auto">
                                </Nav>
                                <LoginButton />
                            </Container>
                        </Navbar>
                }

            </>
        )
    }
}
export default Header
