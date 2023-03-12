import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export const LoginForm = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [password, setPasswordInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const navigate = useNavigate();
    
    useEffect(() => {
        sessionStorage.clear();
    }, [])
    
    const handleOnLogin = (e) => {
        e.preventDefault();
        if (validateForm()) {
            fetch("http://localhost:8000/test-user"+emailInput).then((res)=> {
                return res.json();
            }).then((res)=>{
                // console.log(res);
                if (Object.keys(res[0]).email === emailInput) {
                        toast.error('please enter valid email')
                }else{
                    if (res[0].password === password) {
                        sessionStorage.setItem('email', emailInput);
                        toast.success('Login Successfully');
                        navigate('/');
                    }else{
                        toast.error('enter correct password')
                    }
                }
            }).then((error)=>{
                toast.error('login failed:'+error.message)
            })
        }
    }
    const validateForm = ()=>{
        let result = true;
        if (password=== null || password === '') {
            result = false;
            toast.warning('Enter Password');
        }
        if (!result) {
            toast.warn('Please Enter Correct Email');
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailInput)) {

            } else {
                result = false;
                toast.warn('Please Enter Correct Email')
            }
        }
        return result;
    }
    // eye
    const handlePasswordType = () => {
        if (passwordType === "password") {
            setPasswordType("text");
            return;
        }
        setPasswordType("password")
    }
    return (
        <>
            <Container>
                <Row className='vh-100 align-items-center justify-content-center'>
                    <Col lg={4} md={6} sm={8}>
                        <Card>
                            <Card.Body>
                                <h2 className='card-title text-center mb-3'>Login Form</h2>
                                <Form onSubmit={handleOnLogin}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" value={emailInput} onChange={e=> setEmailInput(e.target.value)}  placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <div className='form-pswrd mb-2'>
                                            <Form.Control type={passwordType} value={password} onChange={e=> setPasswordInput(e.target.value)} placeholder="Password" />
                                            <i onClick={handlePasswordType} className={`bx ${passwordType === 'password' ? 'bx-show' : 'bx-hide'}`}></i>
                                        </div>
                                        <Link to='/forgotpassword'>Forgot Password</Link>
                                    </Form.Group>
                                    <div className="text-end">
                                        <Button variant="primary" className='me-2' type="submit">Login</Button>
                                        <Link to='/registration'><Button variant="success" type="submit">Sign Up</Button></Link>
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
