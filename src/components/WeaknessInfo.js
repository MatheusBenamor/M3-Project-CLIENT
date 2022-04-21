import React from "react";
import Floater from "react-floater";

export default function WeaknessInfo({ cb }) {
  return (
    <div>
      <Floater
        callback={cb}
        title="Figure Out Your Weaknesses"
        content={
          <div>
            <ul>
                <li>What tasks do you usually avoid because you don't feel confident doing them?</li>
                <li>What are your negative work habits?</li>
                <li>Are you completely confident in your education and skills? If not, where are you weakest?</li>
                <li>Do you have problems working as a team member?</li>
                <li>Do you have experience on your project area? </li>
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
