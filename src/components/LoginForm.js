import React from "react";
import '../styles/signup.css'

const LoginForm = () => {
    
    return (
      <> 

      <form class="login" action="" method="get">
        
        <div class="formGroup">
          <input type="email" placeholder="Email" name="email" required autocomplete="off"></input>
        </div>
        <div class="formGroup">
          <input type="password" id="password" placeholder="Password" required autocomplete="off"></input>
         
        </div>
        <div class="formGroup">
          <button type="button" class="btn2">Login</button>
        </div>
 
      </form>

    
        </>
    );
  };
  
  export default LoginForm;