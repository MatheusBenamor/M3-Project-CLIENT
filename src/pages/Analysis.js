import React from 'react'
import '../styles/analysis.css'

const Analysis = () => {
    return (
      <>
      <h1> This is my analysis page </h1>
      <section className='all-blocks'>

        <div className='color-blue'>
        <h3>Strenghts</h3>
        <input type="Number" placeholder="Relevância"></input>
        </div>
        <div className='color-yellow'>
        <h3>Weaknesses</h3>
        <input type="Number" placeholder="Relevância"></input>
        </div>
        <div className='color-green'>
        <h3>Opportunities</h3>
        <input type="Number" placeholder="Relevância"></input>
        </div>
        <div className='color-red'>
        <h3>Threats</h3>
        <input type="Number" placeholder="Relevância"></input>
        </div>
        </section>
      </>
    )
  }
  
  export default Analysis