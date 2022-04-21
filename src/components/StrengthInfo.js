import React from "react";
import Floater from "react-floater";

export default function StrengthInfo({ cb }) {
  return (
    <div>
      <Floater
        callback={cb}
        title="Figure Out Your Strengths"
        content={
          <div>
            <ul>
              <li>What are your assets?</li>
              <li>Can you speak a different language?</li>
              <li>How is your business different from our competitors?</li>
              <li>What unique resources do you have access to?</li>
              <li>Do you have a sustainable competitive advantage?</li>
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
