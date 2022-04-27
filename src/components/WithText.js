import React from "react";
import Floater from "react-floater";
import styled from "styled-components";
import ('../styles/home.css')

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 500px;
  line-height: 1.5;
`;

const Highlight = styled.span`
  display: inline-block;
  position: relative;

  &:before {
    background-color: #f04;
    bottom: -2px;
    content: "";
    display: block;
    height: 2px;
    position: absolute;
    width: 100%;
  }
`;

const FloaterFactory = ({
  cb,
  content = "I'm called from a large body of text!",
  text,
}) => (
  <Floater callback={cb} content={content} placement="top" event="hover">
    <Highlight>{text}</Highlight>
  </Floater>
);

export default function WithText({ cb }) {
  const explanation = (
    <FloaterFactory
      cb={cb}
      text="What Is a SWOT Analysis?"
      content={
        <div>
          <p>
            SWOT stands for Strengths, Weaknesses, Opportunities, and Threats. This Analysis is a technique for assessing these four aspects of your bussiness in order to develop a strategic planning.
          </p>
        </div>
      }
    />
  );

  const vantages = (
    <FloaterFactory
      cb={cb}
      text="Benefits"
      content={
        <div>
          
          <ul>
          <li>Understand your business better</li>
          <li>Be aware of your weaknesses</li>
          <li>Prevent possible threats</li>
          <li>Capitalise on opportunities</li>
          <li>Take full advantage of your strengths</li>
          <li>Develop business goals and strategies for achieving them</li>
         </ul>
          
        </div>
      }
    />
  );

  return (
    <>
    <Wrapper>
      <h2 className="white-container">{explanation}</h2>
      </Wrapper>
      <Wrapper>
      <h2 className="white-container">{vantages}</h2>
    </Wrapper>
    </>
  );
}
