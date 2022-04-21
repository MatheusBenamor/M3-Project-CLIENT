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
