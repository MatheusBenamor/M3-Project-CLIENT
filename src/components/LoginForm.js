import React, { useState } from 'react';
import '../styles/signup.css';
import { useNavigate } from 'react-router-dom';
import ApiUtils from "../utils/Api.utils";

const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          await ApiUtils.login({ email, password })
          navigate("/profile");
          console.log('We find your informations on our DB, continue')
      } catch (error) {
        throw new Error("You need to put a valid email and password, try again");
      }
  }
    
    return (
      <> 
<div class="container">
        <div class="form-login">
          <div class="btn">
            <button class="signUpBtn">Login</button>
          </div>
          <form class="signUp" action="" method="get" onSubmit={handleSubmit}>
            <div class="formGroup">
            </div>
            <div class="formGroup">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={e => setEmail(e.target.value)}
                autocomplete="off"
              ></input>
            </div>
            <div class="formGroup">
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                autocomplete="off"
              ></input>
            </div>
            <div class="formGroup"></div>

            <button type="submit" class="btn2">
              ENTER
            </button>
            
          </form>
        </div>
      </div>
      

    
        </>
    );
  };
  
  export default LoginForm;
