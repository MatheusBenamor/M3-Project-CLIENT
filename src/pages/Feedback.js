import React, { useEffect, useState } from 'react';
import '../styles/feedback.css'
import ApiUtils from "../utils/Api.utils";

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
        </div>
      
        </div>

      </>
    )
  }
  
  export default Feedback