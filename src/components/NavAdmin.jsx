import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavAdmin = () => {
    return (
        <>
            <Container>
                <Navbar bg="primary" data-bs-theme="dark">
                    <div style={{marginLeft: '12px'}}>
                        <Navbar.Brand href="/">Admin</Navbar.Brand>
                    </div>
                    <Nav className="ms-auto">
                        <Nav.Link href="#pricing">Salir</Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
        </>
    )
}

export default NavAdmin