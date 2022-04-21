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
              <li>What are our assets?</li>
              <li>What is our strongest asset?</li>
              <li>How is my business different from our competitors?</li>
              <li>What unique resources do we have access to?</li>
              <li>Do we have a sustainable competitive advantage?</li>
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
