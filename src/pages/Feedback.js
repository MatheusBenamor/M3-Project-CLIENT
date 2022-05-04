import React, { useEffect, useState } from 'react';
import '../styles/feedback.css'
import ApiUtils from "../utils/Api.utils";
import { Link } from "react-router-dom";


const Feedback = () => {

  const [ feedbacks, setFeedbacks ] = useState([]);

  useEffect(() => {
  const getFeedbacks = async () => {
    try {
      const feedbacks = await ApiUtils.getFeedbacks();
      setFeedbacks(feedbacks);
    } catch (error) {
      console.error('Error trying to give the feedback', error.status)
    }
  }
    getFeedbacks();
  }, [])

    return (
      <>
      <div className='feedback-page'>
      <div className='feedback-container'>
      <div className='feedback-title'>
      <h1> Analysis Feedback </h1>
      </div>
      <div className='result-line'></div>
      <div className='feedback-results'>
      <h1>Results text goes here</h1>
      <p>{feedbacks}</p>
      
      </div>
      <div className='feedback-butt'>
      <img className='feedback-balls' src='http://www.clker.com/cliparts/2/9/b/8/1194984775760075334button-green_benji_park_01.svg.med.png' alt='safe-analysis-img'></img><h3>Safe analysis: 31 - 50</h3>
      <img className='feedback-balls' src='http://www.clker.com/cliparts/d/2/f/f/119498475734514785button-yellow_benji_park_01.svg.med.png' alt='safe-analysis-img'></img><h3>Moderate analysis: 16 - 30</h3>
      <img className='feedback-balls' src='http://www.clker.com/cliparts/9/1/5/2/119498475589498995button-red_benji_park_01.svg.med.png' alt='safe-analysis-img'></img><h3>Risky analysis: 0 - 15</h3>
      <Link to={`/profile`}>
        <button type='submit' className='analysis-buttom'>See your Profile </button>
        </Link>
        </div>
        </div>
      
        </div>

      </>
    )
  }
  
  export default Feedback