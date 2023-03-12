import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export const RegisterForm = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("india");
    const [gender, setGender] = useState("male");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();
    const CheckValidate = () => {
        let checkProcess = true;
        let errorMsg = 'Please Enter the value for ';
        if (fname === null || fname === '') {
            errorMsg += 'First Name';
        }
        if (lname === null || lname === '') {
            errorMsg += 'Last Name';
        }
        if (email === null || email === '') {
            errorMsg += 'Email';
        }
        if (country === null || country === '') {
            errorMsg += 'Country';
        }
        if (gender === null || gender === '') {
            errorMsg += 'Gender';
        }
        if (password === null || password === '') {
            errorMsg += ' Password';
        }
        if (cpassword === null || cpassword === '') {
            errorMsg += ' Confirm Password';
        }
        if (address === null || address === '') {
            errorMsg += ' Address';
        }
        if (!checkProcess) {
            toast.warn(errorMsg);
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

            } else {
                checkProcess = false;
                toast.warn('Please Enter Correct Email')
            }
        }
        return checkProcess;
    }
    const handleOnRegister = (e) => {
        e.preventDefault();
        let RegisterObj = { fname, lname, email, country, gender, number, password, cpassword, address };
        console.log(RegisterObj);

        if (CheckValidate()) {
            fetch('http://localhost:8000/test-user', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(RegisterObj)
            }).then((res) => {
                toast.success("Register Successfully")
                navigate('/login');
            }).then((error) => {
                toast.error('Registration failed:', error.message)
            })
        }
    }
    return (
        <>
            <Container>
                <Row className='vh-100 align-items-center justify-content-center'>
                    <Col lg={8} md={10} sm={12}>
                        <Card className='my-3'>
                            <Card.Body>
                                <h2 className='card-title text-center mb-3'>Sign Up</h2>
                                <Form onSubmit={handleOnRegister} required={true}>
                                    <Row>
                                        <Col lg={6}>
                                            <Form.Group className="my-2" controlId="formBasicText">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control value={fname} onChange={e => setFname(e.target.value)} type="text" placeholder="Enter Your First Name" />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="my-2" controlId="formBasicText">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="text" value={lname} onChange={e => setLname(e.target.value)} placeholder="Enter Your Last Name" />
                                            </Form.Group>
                                        </Col>

                                        <Col lg={6}>
                                            <Form.Group className="my-2" controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="my-2">
                                                <Form.Label>Country</Form.Label>
                                                <Form.Select value={country} onChange={e => setCountry(e.target.value)}>
                                                    <option value='india'>India</option>
                                                    <option value='Pakistan'>Pakistan</option>
                                                    <option value='UAE'>UAE</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>

                                        <Col lg={6}>
                                            <Form.Group className="my-2">
                                                <Form.Label>Gender</Form.Label>
                                                <div className="d-flex">
                                                    <Form.Check type='radio' checked={gender === 'male'} value='male' onChange={e => setGender(e.target.value)} name='gender' className='me-3' label='Male' id='male0' />
                                                    <Form.Check type='radio' checked={gender === 'female'} value='female' onChange={e => setGender(e.target.value)} name='gender' label='Female' id='female1' />
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="my-2" controlId="formBasicNumber">
                                                <Form.Label>Phone Number</Form.Label>
                                                <Form.Control type="number" value={number} onChange={e => setNumber(e.target.value)} placeholder="Enter Phone Number" />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                        </Col>

                                        <Col lg={6}>
                                            <Form.Group className="my-2" controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter Password" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="my-2" controlId="formBasicCPassword">
                                                <Form.Label>Confirm Password</Form.Label>
                                                <Form.Control type="password" value={cpassword} onChange={e => setCPassword(e.target.value)} placeholder="Enter Confirm Password" />
                                            </Form.Group>
                                        </Col>

                                        <Col sm={12}>
                                            <Form.Group className="my-2" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control as="textarea" value={address} onChange={e => setAddress(e.target.value)} rows={3} />
                                            </Form.Group>
                                        </Col>

                                        <Col className="text-end mt-2">
                                            <Link to='/login'>
                                                <Button variant="primary" className='me-2' type="submit">Login</Button>
                                            </Link>
                                            <Button variant="success" type="submit">Register</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
