import React from "react";
import "../styles/feedback.css";
//import ApiUtils from "../utils/Api.utils";
import { Link } from "react-router-dom";
//import { useNavigate } from 'react-router-dom';

const Feedback = ({ analysisScore }) => {
  const safeFeedback =
    "Great news, your analysis is Safe! Your analysis could work entirely perfect, just make sure you are examinating both internal and external factors and remember to apply your learnings at the right level in your organization. But before you go ahead, be sure to develop your ideas further. Good luck!";
  const moderateFeedback =
    "Your analysis is consider Moderate. You are on the right track and your project can work, but your analysis is not entirely safe. Maybe you should look for improve even more your strenghts and figure out better ways to combat your weaknesses.";
  const riskyFeedback =
    "Caution, based on the point that you assigned, your analysis is Risky, you should review and double check your decisions. Our suggestion is to reconsider your project and find out if there is a way to improve your weaknesses or make it happen at a more favorable time, if is the case that there are many external threats.";
  const feedbackTotal = analysisScore ;
  function CalculateAnalysis() {
      if (feedbackTotal <= 15) {
        return riskyFeedback;
      } else if (feedbackTotal >= 16 && feedbackTotal <= 30) {
        return moderateFeedback;
      } else {
        return safeFeedback;
      }
    };
    
  
  return (
    <>
      <div className="feedback-page">
        <div className="feedback-container">
          <div className="feedback-title">
            <h1> Analysis Feedback </h1>
          </div>
          <div className="result-line"></div>
          <div className="feedback-results">
            <h2>
              Based on your analysis pontuation, you got <u>{feedbackTotal}</u>{" "}
              Points.
            </h2>
            <h3>
              <CalculateAnalysis></CalculateAnalysis>
            </h3>
            <h4>{CalculateAnalysis()}</h4>
          </div>
          <div className="feedback-butt">
            <img
              className="feedback-balls"
              src="http://www.clker.com/cliparts/2/9/b/8/1194984775760075334button-green_benji_park_01.svg.med.png"
              alt="safe-analysis-img"
            ></img>
            <h3>Safe analysis: 31 - 50</h3>
            <img
              className="feedback-balls"
              src="http://www.clker.com/cliparts/d/2/f/f/119498475734514785button-yellow_benji_park_01.svg.med.png"
              alt="safe-analysis-img"
            ></img>
            <h3>Moderate analysis: 16 - 30</h3>
            <img
              className="feedback-balls"
              src="http://www.clker.com/cliparts/9/1/5/2/119498475589498995button-red_benji_park_01.svg.med.png"
              alt="safe-analysis-img"
            ></img>
            <h3>Risky analysis: 0 - 15</h3>
            <Link to={`/profile`}>
              <button type="submit" className="analysis-buttom">
                See your Profile{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
