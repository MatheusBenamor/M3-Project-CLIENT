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
            SWOT stands for Strengths, Weaknesses, Opportunities, and Threats.</p><p> This Analysis is a technique for assessing these four aspects of your bussiness in order to develop a strategic planning.
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

  const about = (
    <FloaterFactory
      cb={cb}
      text="About the App"
      content={
        <div>
          <p>
          The SWOT project was created by two aspiring Web Developers Matheus Benamor and Thais Fernandes.</p>
          <p>  Our main goal is to make a platform that helps our clients to plan their business or personal life using swot analysis as a tool to better organize this process.</p>
          
        </div>
      }
    />
  );

  return (
    <>
    <div className="align-infos">
    <Wrapper>
    <div>
      <h2 className="white-container">{explanation}</h2>
      </div>
      </Wrapper>
      <Wrapper>
      <div className="margin-left">
      <h2 className="white-container">{vantages}</h2>
      </div>
    </Wrapper>
    <Wrapper>
      <div className="margin-left">
      <h2 className="white-container">{about}</h2>
      </div>
    </Wrapper>
    </div>
    </>
  );
}
