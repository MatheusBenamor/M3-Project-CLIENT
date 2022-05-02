import React, { useState } from 'react';
import '../styles/analysis.css'
//import WithHoverAndNoDelay from '../components/WithHoverNoDelay'
import StrengthInfo from '../components/StrengthInfo'
import WeaknessInfo from '../components/WeaknessInfo'
import OpportunitiesInfo from '../components/OpportunitiesInfo'
import ThreatsInfo from '../components/ThreatsInfo'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import CalculateAnalysis from '../components/CalculateAnalysis'
import ApiUtils from "../utils/Api.utils";
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

  const [analysisName, setAnalysisName] = useState('')
    const [strengths, setStrengths] = useState('')
    const [weaknesses, setWeaknesses] = useState('')
    const [opportunities, setOpportunities] = useState('')
    const [threats, setThreats] = useState('')
    const navigate = useNavigate();
  
    const addAnalysis = async (e) => {
      e.preventDefault();
      try {
          await ApiUtils.createAnalysis({ analysisName, strengths, weaknesses, opportunities, threats})
          navigate("/feedback");
      } catch (error) {
        console.log(error)
      }
  }


    return (
      <>
      <form onSubmit={addAnalysis}>
      <div className='title-container'>
      <h1><input type="text" placeholder="            Analysis Name" className='input-title'></input></h1>
      </div>
      <section className='all-blocks'>

<div>
        <div className='color-blue'>
        <h3 className='margin-align'>Strenghts</h3>
        <ul>
        <li><input type="text" placeholder="Strenghts" className='input-texting'></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputStrength" ></input></li>
        <li><input type="text" className='input-texting'></input><input type="Number" min="1" max="5" className='input-score' id="inputStrength" ></input></li>
        <li><input type="text" className='input-texting'></input><input type="Number" min="1" max="5" className='input-score' id="inputStrength" ></input></li>
        <li><input type="text" className='input-texting'></input><input type="Number" min="1" max="5" className='input-score' id="inputStrength" ></input></li>
        <li><input type="text" className='input-texting'></input><input type="Number" min="1" max="5" className='input-score' id="inputStrength" ></input></li>
        </ul>
        <div className='flex-end'><StrengthInfo></StrengthInfo></div>
        </div>

        
        <div className='color-yellow'>
        <h3 className='margin-align'>Weaknesses</h3>
        <ul>
        <li><input type="text" placeholder="Weaknesses" className='input-texting'></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputWeakness"></input></li>
        <li><input type="text" className='input-texting'></input><input type="Number" min="1" max="5" className='input-score' id="inputWeakness"></input></li>
        <li><input type="text" className='input-texting'></input><input type="Number" min="1" max="5" className='input-score' id="inputWeakness"></input></li>
        <li><input type="text" className='input-texting'></input><input type="Number" min="1" max="5" className='input-score' id="inputWeakness"></input></li>
        <li><input type="text" className='input-texting'></input><input type="Number" min="1" max="5" className='input-score' id="inputWeakness"></input></li>
        </ul>
        <div className='flex-end'><WeaknessInfo></WeaknessInfo></div>
        </div>
</div>
<div>
        
        <div className='color-green'>
        <h3 className='margin-align'>Opportunities</h3>
        <ul>
        <li><input type="text" placeholder="Opportunities" className='input-texting'></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputOpportunity"></input></li>
        <li><input type="text" className='input-texting'></input><input type="Number" min="1" max="5" className='input-score' id="inputOpportunity"></input></li>
        <li><input type="text" className='input-texting'></input><input type="Number" min="1" max="5" className='input-score' id="inputOpportunity"></input></li>
        <li><input type="text" className='input-texting'></input><input type="Number" min="1" max="5" className='input-score' id="inputOpportunity"></input></li>
        <li><input type="text" className='input-texting'></input><input type="Number" min="1" max="5" className='input-score' id="inputOpportunity"></input></li>
        </ul>
        <div className='flex-end'><OpportunitiesInfo></OpportunitiesInfo></div>
        </div>

        
        <div className='color-red'>
        <h3 className='margin-align'>Threats</h3>
        <ul>
        <li><input type="text" placeholder="Threats" className='input-texting'></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputThreat"></input></li>
        <li><input type="text" className='input-texting'></input><input type="Number" min="1" max="5" className='input-score' id="inputThreat"></input></li>
        <li><input type="text" className='input-texting'></input><input type="Number" min="1" max="5" className='input-score' id="inputThreat"></input></li>
        <li><input type="text" className='input-texting'></input><input type="Number" min="1" max="5" className='input-score' id="inputThreat"></input></li>
        <li><input type="text" className='input-texting'></input><input type="Number" min="1" max="5" className='input-score' id="inputThreat"></input></li>
        </ul>
        <div className='flex-end'><ThreatsInfo></ThreatsInfo></div>
        </div>
        </div>
        </section>
        
        <Link to={`/feedback`}>
        <button type='submit' className='analysis-buttom'>SEND ANALYSIS AND CALCULATE RESULTS </button>
        </Link>
        <CalculateAnalysis></CalculateAnalysis>
        </form>
      </>
    )
  }

  
  
  export default Analysis