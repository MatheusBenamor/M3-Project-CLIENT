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
            I can be triggered by click or hover (on devices with a mouse)
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
