import React from "react";
import '../styles/signup.css'
import { Link } from "react-router-dom";

const SignupForm = () => {
    
    return (
      <>
      <div class="container">
    <div class="form-signup">
      <div class="btn">
        <button class="signUpBtn">Sign up</button>
        
      </div>
      <form class="signUp" action="" method="get">
        <div class="formGroup">
          <input type="text" id="userName" placeholder="Username" autocomplete="off"></input>
        </div>
        <div class="formGroup">
          <input type="email" placeholder="Email" name="email" required autocomplete="off"></input>
        </div>
        <div class="formGroup">
          <input type="password" id="password" placeholder="Password" required autocomplete="off"></input>
        </div>
                <div class="formGroup"></div>

          <button type="button" class="btn2">REGISTER</button>
          <h4 className="account-text">Already have an account?</h4>
          <div class="btn">
          <Link to={`/login`}>
        <button>Login</button>
        </Link>
        </div>
        
        
      </form>
      

      <form class="login" action="" method="get">
        
        <div class="formGroup">
          <input type="email" placeholder="Email ID" name="email" required autocomplete="off"></input>
        </div>
        <div class="formGroup">
          <input type="password" id="password" placeholder="Password" required autocomplete="off"></input>
         
        </div>
        <div class="checkBox">
          <input type="checkbox" name="checkbox" id="checkbox"></input>
          <span class="text">Keep me signed in on this device</span>
        </div>
        <div class="formGroup">
          <button type="button" class="btn2">REGISTER</button>
        </div>
 
      </form>

    </div>
  </div>
        </>
    );
  };
  
  export default SignupForm;
  