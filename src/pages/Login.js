import React from 'react'
import '../styles/login.css'
import LoginForm from '../components/LoginForm'




const Login = () => {
    return (
      <>
        <h1> This is my login page </h1>
        <div className='cont-info'><LoginForm></LoginForm></div>
      </>
    )
  }
  
  export default Login