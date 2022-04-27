import React from 'react'
import '../styles/analysis.css'
import WithHoverAndNoDelay from '../components/WithHoverNoDelay'
import StrengthInfo from '../components/StrengthInfo'
import WeaknessInfo from '../components/WeaknessInfo'
import OpportunitiesInfo from '../components/OpportunitiesInfo'
import ThreatsInfo from '../components/ThreatsInfo'
import { Link } from "react-router-dom";
import CalculateAnalysis from '../components/CalculateAnalysis'
/*
function myFunction() {
  const sumStrength = document.getElementById("inputStrength").value;
  const sumWeakness = document.getElementById("inputWeakness").value;
  const sumOpportunity = document.getElementById("inputOpportunity").value;
  const sumThreat = document.getElementById("inputThreat").value;
  const total = +sumStrength + +sumOpportunity + +sumWeakness + +sumThreat;
  document.getElementById("totalPrice").innerHTML = total;
  
}
*/

const Analysis = () => {
    return (
      <>
      <form>
      <h1> This is my analysis page </h1>
      <section className='all-blocks'>

<div>
        <div className='color-blue'>
        <h3 className='margin-align'>Strenghts</h3>
        <ul>
        <li><input type="text" placeholder="Strenght 1" className='input-texting'></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputStrength" ></input></li>
        <li><input type="text" placeholder="Strenght 2" className='input-texting'></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputStrength" ></input></li>
        <li><input type="text" placeholder="Strenght 3" className='input-texting'></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputStrength" ></input></li>
        <li><input type="text" placeholder="Strenght 4" className='input-texting'></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputStrength" ></input></li>
        <li><input type="text" placeholder="Strenght 5" className='input-texting'></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputStrength" ></input></li>
        </ul>
        <div className='flex-end'><StrengthInfo></StrengthInfo></div>
        </div>

        
        <div className='color-yellow'>
        <h3 className='margin-align'>Weaknesses</h3>
        <ul>
        <li><input type="text" placeholder="Weakness 1" className='input-texting'></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputWeakness"></input></li>
        <li><input type="text" placeholder="Weakness 2" className='input-texting'></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputWeakness"></input></li>
        <li><input type="text" placeholder="Weakness 3" className='input-texting'></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputWeakness"></input></li>
        <li><input type="text" placeholder="Weakness 4" className='input-texting'></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputWeakness"></input></li>
        <li><input type="text" placeholder="Weakness 5" className='input-texting'></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputWeakness"></input></li>
        </ul>
        <div className='flex-end'><WeaknessInfo></WeaknessInfo></div>
        </div>
</div>
<div>
        
        <div className='color-green'>
        <h3 className='margin-align'>Opportunities</h3>
        <ul>
        <li><input type="text" placeholder="Opportunity 1" className='input-texting'></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputOpportunity"></input></li>
        <li><input type="text" placeholder="Opportunity 2" className='input-texting'></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputOpportunity"></input></li>
        <li><input type="text" placeholder="Opportunity 3" className='input-texting'></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputOpportunity"></input></li>
        <li><input type="text" placeholder="Opportunity 4" className='input-texting'></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputOpportunity"></input></li>
        <li><input type="text" placeholder="Opportunity 5" className='input-texting'></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputOpportunity"></input></li>
        </ul>
        <div className='flex-end'><OpportunitiesInfo></OpportunitiesInfo></div>
        </div>

        
        <div className='color-red'>
        <h3 className='margin-align'>Threats</h3>
        <ul>
        <li><input type="text" placeholder="Threat 1" className='input-texting'></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputThreat"></input></li>
        <li><input type="text" placeholder="Threat 2" className='input-texting'></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputThreat"></input></li>
        <li><input type="text" placeholder="Threat 3" className='input-texting'></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputThreat"></input></li>
        <li><input type="text" placeholder="Threat 4" className='input-texting'></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputThreat"></input></li>
        <li><input type="text" placeholder="Threat 5" className='input-texting'></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputThreat"></input></li>
        </ul>
        <div className='flex-end'><ThreatsInfo></ThreatsInfo></div>
        </div>
        </div>
        </section>
        
        <Link to={`/feedback`}>
        <button type='submit' className='analysis-buttom'>SEND ANALYSIS AND CALCULATE RESULTS </button>
        </Link>
        <CalculateAnalysis></CalculateAnalysis>
        <h4>Total Price: <span id="totalPrice">0</span></h4>
        </form>
      </>
    )
  }

  
  
  export default Analysis