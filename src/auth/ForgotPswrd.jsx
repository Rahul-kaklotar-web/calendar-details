import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

export const ForgotPswrd = () => {
    const handleOnForgot = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <Container>
                <Row className='vh-100 align-items-center justify-content-center'>
                    <Col lg={4} md={6} sm={8}>
                        <Card>
                            <Card.Body>
                                <h2 className='card-title text-center mb-3'>Rest Password</h2>
                                <Form onSubmit={handleOnForgot}>
                                    <Form.Group className="my-2" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type='password' placeholder="Enter Password" />
                                    </Form.Group>
                                    <Form.Group className="my-2" controlId="formBasicCPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter Confirm Password" />
                                    </Form.Group>
                                    <div className="text-end mt-3">
                                        <Button variant="primary" type="submit">Change</Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
