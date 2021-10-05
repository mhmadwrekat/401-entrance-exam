import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
export class Footer extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home"></Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home"><p>All reserve copy right 2021 Mhmad Wrekat</p></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default Footer
