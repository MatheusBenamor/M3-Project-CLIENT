import React, { useState } from 'react';
import '../styles/analysis.css'
import StrengthInfo from '../components/StrengthInfo'
import WeaknessInfo from '../components/WeaknessInfo'
import OpportunitiesInfo from '../components/OpportunitiesInfo'
import ThreatsInfo from '../components/ThreatsInfo'
import { Link } from "react-router-dom";
import CalculateAnalysis from '../components/CalculateAnalysis'
import ApiUtils from "../utils/Api.utils";


const Analysis = () => {

  const [analysisName, setAnalysisName] = useState('')
    
  //Strenghts
    const [strengths1, setStrengths1] = useState('')
    const [strengthsRel1, setStrengthsRel1] = useState('')

    const [strengths2, setStrengths2] = useState('')
    const [strengthsRel2, setStrengthsRel2] = useState('')

    const [strengths3, setStrengths3] = useState('')
    const [strengthsRel3, setStrengthsRel3] = useState('')

    const [strengths4, setStrengths4] = useState('')
    const [strengthsRel4, setStrengthsRel4] = useState('')

    const [strengths5, setStrengths5] = useState('')
    const [strengthsRel5, setStrengthsRel5] = useState('')

  //Weaknesses
    const [weaknesses1, setWeaknesses1] = useState('')
    const [weaknessesRel1, setWeaknessesRel1] = useState('')
    const [weaknesses2, setWeaknesses2] = useState('')
    const [weaknessesRel2, setWeaknessesRel2] = useState('')
    const [weaknesses3, setWeaknesses3] = useState('')
    const [weaknessesRel3, setWeaknessesRel3] = useState('')
    const [weaknesses4, setWeaknesses4] = useState('')
    const [weaknessesRel4, setWeaknessesRel4] = useState('')
    const [weaknesses5, setWeaknesses5] = useState('')
    const [weaknessesRel5, setWeaknessesRel5] = useState('')

    const [opportunities1, setOpportunities1] = useState('')
    const [opportunitiesRel1, setOpportunitiesRel1] = useState('')
    const [opportunities2, setOpportunities2] = useState('')
    const [opportunitiesRel2, setOpportunitiesRel2] = useState('')
    const [opportunities3, setOpportunities3] = useState('')
    const [opportunitiesRel3, setOpportunitiesRel3] = useState('')
    const [opportunities4, setOpportunities4] = useState('')
    const [opportunitiesRel4, setOpportunitiesRel4] = useState('')
    const [opportunities5, setOpportunities5] = useState('')
    const [opportunitiesRel5, setOpportunitiesRel5] = useState('')

    const [threats1, setThreats1] = useState('')
    const [threatsRel1, setThreatsRel1] = useState('')
    const [threats2, setThreats2] = useState('')
    const [threatsRel2, setThreatsRel2] = useState('')
    const [threats3, setThreats3] = useState('')
    const [threatsRel3, setThreatsRel3] = useState('')
    const [threats4, setThreats4] = useState('')
    const [threatsRel4, setThreatsRel4] = useState('')
    const [threats5, setThreats5] = useState('')
    const [threatsRel5, setThreatsRel5] = useState('')
    
  
    const addAnalysis = async (e) => {
      e.preventDefault();
      try {
          await ApiUtils.createAnalysis({
             analysisName,
              strengths1,
              strengthsRel1,
               strengths2,
               strengthsRel2,
                strengths3,
                strengthsRel3,
                 strengths4,
                 strengthsRel4,
                  strengths5,
                  strengthsRel5,

              weaknesses1,
              weaknessesRel1,
               weaknesses2,
               weaknessesRel2,
                weaknesses3,
                weaknessesRel3,
                 weaknesses4,
                 weaknessesRel4,
                  weaknesses5,
                  weaknessesRel5,

              opportunities1,
              opportunitiesRel1,
                opportunities2,
                opportunitiesRel2,
                 opportunities3,
                 opportunitiesRel3,
                  opportunities4,
                  opportunitiesRel4,
                   opportunities5,
                   opportunitiesRel5,

              threats1,
              threatsRel1,
                threats2,
                threatsRel2,
                  threats3,
                  threatsRel3,
                   threats4,
                   threatsRel4,
                    threats5,
                    threatsRel5, })
      } catch (error) {
        console.log(error)
      }

      //Onchange ou onsubmit -> fazer uma
      //no final do input colocar igual o login onChange={e => setStrengths(e.target.value)}
  }


    return (
      <>
      <form onSubmit={addAnalysis}>
      <div className='title-container'>
      <h1><input type="text" placeholder="            Analysis Name" className='input-title' onChange={e => setAnalysisName(e.target.value)}></input></h1>
      </div>
      <section className='all-blocks'>

<div>
        <div className='color-blue'>
        <h3 className='margin-align'>Strenghts</h3>
        <ul>
        <li><input type="text" placeholder="Strenghts" className='input-texting' onChange={e => setStrengths1(e.target.value)}/><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputStrength" onChange={e => setStrengthsRel1(e.target.value)}></input></li>
        <li><input type="text" className='input-texting' onChange={e => setStrengths2(e.target.value)}/><input type="Number" min="1" max="5" className='input-score' id="inputStrength" onChange={e => setStrengthsRel2(e.target.value)}/></li>
        <li><input type="text" className='input-texting' onChange={e => setStrengths3(e.target.value)}/><input type="Number" min="1" max="5" className='input-score' id="inputStrength" onChange={e => setStrengthsRel3(e.target.value)}/></li>
        <li><input type="text" className='input-texting' onChange={e => setStrengths4(e.target.value)}/><input type="Number" min="1" max="5" className='input-score' id="inputStrength" onChange={e => setStrengthsRel4(e.target.value)}/></li>
        <li><input type="text" className='input-texting' onChange={e => setStrengths5(e.target.value)}/><input type="Number" min="1" max="5" className='input-score' id="inputStrength" onChange={e => setStrengthsRel5(e.target.value)}/></li>
        </ul>
        <div className='flex-end'><StrengthInfo></StrengthInfo></div>
        </div>

        
        <div className='color-yellow'>
        <h3 className='margin-align'>Weaknesses</h3>
        <ul>
        <li><input type="text" placeholder="Weaknesses" className='input-texting' onChange={e => setWeaknesses1(e.target.value)}/><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputWeakness" onChange={e => setWeaknessesRel1(e.target.value)}/></li>
        <li><input type="text" className='input-texting' onChange={e => setWeaknesses2(e.target.value)}/><input type="Number" min="1" max="5" className='input-score' id="inputWeakness" onChange={e => setWeaknessesRel2(e.target.value)}/></li>
        <li><input type="text" className='input-texting' onChange={e => setWeaknesses3(e.target.value)}/><input type="Number" min="1" max="5" className='input-score' id="inputWeakness" onChange={e => setWeaknessesRel3(e.target.value)}/></li>
        <li><input type="text" className='input-texting' onChange={e => setWeaknesses4(e.target.value)}/><input type="Number" min="1" max="5" className='input-score' id="inputWeakness" onChange={e => setWeaknessesRel4(e.target.value)}/></li>
        <li><input type="text" className='input-texting' onChange={e => setWeaknesses5(e.target.value)}/><input type="Number" min="1" max="5" className='input-score' id="inputWeakness" onChange={e => setWeaknessesRel5(e.target.value)}/></li>
        </ul>
        <div className='flex-end'><WeaknessInfo></WeaknessInfo></div>
        </div>
</div>
<div>
        
        <div className='color-green'>
        <h3 className='margin-align'>Opportunities</h3>
        <ul>
        <li><input type="text" placeholder="Opportunities" className='input-texting' onChange={e => setOpportunities1(e.target.value)}></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputOpportunity" onChange={e => setOpportunitiesRel1(e.target.value)}/></li>
        <li><input type="text" className='input-texting'  onChange={e => setOpportunities2(e.target.value)}/><input type="Number" min="1" max="5" className='input-score' id="inputOpportunity" onChange={e => setOpportunitiesRel2(e.target.value)}/></li>
        <li><input type="text" className='input-texting'  onChange={e => setOpportunities3(e.target.value)}/><input type="Number" min="1" max="5" className='input-score' id="inputOpportunity" onChange={e => setOpportunitiesRel3(e.target.value)}/></li>
        <li><input type="text" className='input-texting'  onChange={e => setOpportunities4(e.target.value)}/><input type="Number" min="1" max="5" className='input-score' id="inputOpportunity" onChange={e => setOpportunitiesRel4(e.target.value)}/></li>
        <li><input type="text" className='input-texting'  onChange={e => setOpportunities5(e.target.value)}/><input type="Number" min="1" max="5" className='input-score' id="inputOpportunity" onChange={e => setOpportunitiesRel5(e.target.value)}/></li>
        </ul>
        <div className='flex-end'><OpportunitiesInfo></OpportunitiesInfo></div>
        </div>

        
        <div className='color-red'>
        <h3 className='margin-align'>Threats</h3>
        <ul>
        <li><input type="text" placeholder="Threats" className='input-texting' onChange={e => setThreats1(e.target.value)}></input><input type="Number" placeholder="Relevance" min="1" max="5" className='input-score' id="inputThreat" onChange={e => setThreatsRel1(e.target.value)}/></li>
        <li><input type="text" className='input-texting' onChange={e => setThreats2(e.target.value)}/><input type="Number" min="1" max="5" className='input-score' id="inputThreat" onChange={e => setThreatsRel2(e.target.value)}/></li>
        <li><input type="text" className='input-texting' onChange={e => setThreats3(e.target.value)}/><input type="Number" min="1" max="5" className='input-score' id="inputThreat" onChange={e => setThreatsRel3(e.target.value)}/></li>
        <li><input type="text" className='input-texting' onChange={e => setThreats4(e.target.value)}/><input type="Number" min="1" max="5" className='input-score' id="inputThreat" onChange={e => setThreatsRel4(e.target.value)}/></li>
        <li><input type="text" className='input-texting' onChange={e => setThreats5(e.target.value)}/><input type="Number" min="1" max="5" className='input-score' id="inputThreat" onChange={e => setThreatsRel5(e.target.value)}/></li>
        </ul>
        <div className='flex-end'><ThreatsInfo></ThreatsInfo></div>
        </div>
        </div>
        </section>
        
        <div className='analysis-buts'>
        
        
        <button type='submit' className='analysis-buttom'>SEND ANALYSIS AND CALCULATE RESULTS </button>
        
        
        <Link to={`/profile`}>
        <button type='submit' className='analysis-buttom'>SEE YOUR PROFILE </button>
        </Link>
        </div>
        <CalculateAnalysis></CalculateAnalysis>
        </form>
      </>
    )
  }

  
  
  export default Analysis