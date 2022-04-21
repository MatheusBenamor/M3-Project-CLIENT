import React from 'react'
import '../styles/analysis.css'
import WithHoverAndNoDelay from '../components/WithHoverNoDelay'
import StrengthInfo from '../components/StrengthInfo'
import WeaknessInfo from '../components/WeaknessInfo'
import OpportunitiesInfo from '../components/OpportunitiesInfo'
import ThreatsInfo from '../components/ThreatsInfo'

const Analysis = () => {
    return (
      <>
      <h1> This is my analysis page </h1>
      <section className='all-blocks'>

        <div className='color-blue'>
        <h3>Strenghts</h3>
        <input type="Number" placeholder="Relevância"></input>
        <StrengthInfo></StrengthInfo>
        </div>
        <div className='color-yellow'>
        <h3>Weaknesses</h3>
        <input type="Number" placeholder="Relevância"></input>
        <WeaknessInfo></WeaknessInfo>
        </div>
        <div className='color-green'>
        <h3>Opportunities</h3>
        <input type="Number" placeholder="Relevância"></input>
        <OpportunitiesInfo></OpportunitiesInfo>
        </div>
        <div className='color-red'>
        <h3>Threats</h3>
        <input type="Number" placeholder="Relevância"></input>
        <ThreatsInfo></ThreatsInfo>
        </div>
        </section>
      </>
    )
  }
  
  export default Analysis