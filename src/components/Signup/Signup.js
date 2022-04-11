import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Signup.css';
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPasswrord] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPasswrord(event.target.value);
    }
    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
    }

    const [createUserWithEmailAndPassword, user] =
        useCreateUserWithEmailAndPassword(auth);
    
    if (user) {
        navigate('/shop');
    }
    
    const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Confirm Password didn't match");
            return;
        }
        if (password.length < 6) {
            setError("Password must be 6 character or longer");
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <Container className="p-5 w-75">
                <h2 className="text-center mb-5">Signup Here</h2>
                <Form onSubmit={handleCreateUser} className="w-50 mx-auto mb-5">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            onBlur={handleEmailBlur}
                            type="email"
                            placeholder="Enter email"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            onBlur={handlePasswordBlur}
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            onBlur={handleConfirmPasswordBlur}
                            type="password"
                            placeholder="Confirm password"
                            required
                        />
                    </Form.Group>
                    <p className='text-danger'>{error}</p>
                    <button className="w-100 border-0 py-2 mt-3" type="submit">
                        Sign up
                    </button>
                    <p className="text-center mt-3">
                        Already have an account?
                        <Link to="/login">Login</Link>
                    </p>
                    <button className="w-100 border-0 py-2" type="submit">
                        Signup with google
                    </button>
                </Form>
            </Container>
        </div>
    );
};

export default Signup;