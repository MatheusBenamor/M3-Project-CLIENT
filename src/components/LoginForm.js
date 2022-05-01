import React from "react";
import '../styles/signup.css';

const LoginForm = () => {
    
    return (
      <> 
<div class="container">
        <div class="form-login">
          <div class="btn">
            <button class="signUpBtn">Login</button>
          </div>
          <form class="signUp" action="" method="get">
            <div class="formGroup">
            </div>
            <div class="formGroup">
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                autocomplete="off"
              ></input>
            </div>
            <div class="formGroup">
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                autocomplete="off"
              ></input>
            </div>
            <div class="formGroup"></div>

            <button type="button" class="btn2">
              ENTER
            </button>
            
          </form>
        </div>
      </div>
      

    
        </>
    );
  };
  
  export default LoginForm;
