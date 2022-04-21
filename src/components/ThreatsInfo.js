import React from "react";
import Floater from "react-floater";

export default function ThreatsInfo({ cb }) {
  return (
    <div>
      <Floater
        callback={cb}
        title="Figure Out Your Threats"
        content={
          <div>
            <ul>
              <li>What external obstacles do you currently face at work?</li>
              <li>What are the negative aspects in the current market?</li>
              <li>Does changing technology threaten your project?</li>
              <li>Are the government regulations going to affect you?</li>
              <li>What are the chances of a natural disaster affecting your project?</li>
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
