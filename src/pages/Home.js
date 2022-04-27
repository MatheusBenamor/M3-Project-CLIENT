import React from 'react'
import SwotInfo from '../components/SwotInfo'
import '../styles/home.css'
import SignupForm from '../components/SignupForm'


const Home = () => {
    return (
      <>
      <div className='cont-info'><SwotInfo></SwotInfo></div>
      <div className="home-background">
      <div className='cont-signup'><SignupForm></SignupForm></div>
            </div>
      </>
    )
  }
  

  export default Home