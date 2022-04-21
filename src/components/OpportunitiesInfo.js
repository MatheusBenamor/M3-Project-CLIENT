import React from "react";
import Floater from "react-floater";

export default function OpportunitiesInfo({ cb }) {
  return (
    <div>
      <Floater
        callback={cb}
        title="Figure Out Your Opportunities"
        content={
          <div>
            <ul>
                <li>What trends might positively affect your project?</li>
                <li>Is our target market changing in a way that could help you?</li>
                <li>Is your industry growing?</li>
                <li>Are there any networking events, educational classes or conferences that may help you?</li>
                <li>Can you learn new skills, improve your public speaking or make professional relationships?</li>
            </ul>
          </div>
        }
        disableHoverToClick
        event="hover"
        eventDelay={0}
        placement="top"
      >
        <button>?</button>
      </Floater>
      
    </div>
  );
}
