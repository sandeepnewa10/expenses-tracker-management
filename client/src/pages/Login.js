import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { loginUser } from "../helpers/axiosHelper";
import { toast } from "react-toastify";
import { loginAction } from './userState/userAction'

const Login = ({ setLogedIn }) => {
  const dispatch = useDispatch()
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user)
  useEffect(() => {
    //
    user._id && navigate("/dashboard");
  }, [user])

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    dispatch(loginAction({ email, password }))



  };
  return (
    <MainLayout>
      <div className="login-page d-flex justify-content-center mt-5 ">
        <div className="login-form border p-4 shadow-lg bg-light mt-5">
          <h3>Welcome Back</h3>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                ref={emailRef}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                ref={passwordRef}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <div className="text-end">
            New here? <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
