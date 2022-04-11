import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPasswrord] = useState("");
    const navigate = useNavigate();

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordBlur = (event) => {
        setPasswrord(event.target.value);
    };

    if (user) {
        navigate('/shop');
    }

    const handleLoginUser = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <Container className="p-5 w-75">
                <h2 className="text-center mb-5">Login Here</h2>
                <Form onSubmit={handleLoginUser} className="w-50 mx-auto mb-5">
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
                    <p className="text-danger">{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <button className="w-100 border-0 py-2 mt-3" type="submit">
                        Login
                    </button>
                    <p className="text-center mt-3">
                        New to Ema-John?
                        <Link to="/signup">Create an account</Link>
                    </p>
                    <button className="w-100 border-0 py-2" type="submit">
                        Login with google
                    </button>
                </Form>
            </Container>
        </div>
    );
};

export default Login;
