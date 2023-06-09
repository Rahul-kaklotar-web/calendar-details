import React, { useEffect } from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
export const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
      let email = sessionStorage.getItem('email');
        if (email === '' || email === null ) {
            navigate("/login");
        }
    }, []);
    
    return (
        <>

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Tecnical</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
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
                            <Link to='/login'>
                                <Button variant="outline-danger">logout</Button>
                            </Link>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <h2 className='text-center text-primary'>
                Welcome To react js
            </h2>

        </>
    )
}
