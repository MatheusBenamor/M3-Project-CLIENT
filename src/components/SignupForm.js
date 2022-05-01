import React, { useState } from 'react';
import "../styles/signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ApiUtils from "../utils/Api.utils";


const SignupForm = () => {
  
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          await ApiUtils.signup({ username, email, password })
          navigate("/login");
      } catch (error) {
        console.log(error)
      }
  }


  return (
    <>
      <div class="container">
        <div class="form-signup">
          <div class="btn">
            <button class="signUpBtn">Sign up</button>
          </div>
          <form class="signUp" action="" method="get" onSubmit={handleSubmit}>
            <div class="formGroup">
              <input
                type="text"
                id="username"
                placeholder="Username"
                onChange={e => setUsername(e.target.value)}
                autoComplete="off"
              ></input>
            </div>
            <div class="formGroup">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={e => setEmail(e.target.value)}
                autoComplete="off"
              ></input>
            </div>
            <div class="formGroup">
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                autoComplete="off"
              ></input>
            </div>
            <div class="formGroup"></div>

            <button type="submit" class="btn2" >
              REGISTER
            </button>
            <h4 className="account-text">Already have an account?</h4>
            <div class="btn">
              <Link to={`/login`}>
                <button>Login</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupForm;