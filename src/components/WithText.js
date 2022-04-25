import React from "react";
import Floater from "react-floater";
import styled from "styled-components";

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
  const Vantagens = (
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

  const semantics = (
    <FloaterFactory
      cb={cb}
      text="Uses of SWOT Analysis"
      content={
        <div>
          <p>
            SWOT Analysis is a tool that can help you to analyze what you do
            best right now, and to develop a successful strategy for the future.
            SWOT can also uncover areas that are holding you back.
          </p>
        </div>
      }
    />
  );

  return (
    <Wrapper>
      Far far {Vantagens}, behind the word mountains, far from the countries
      Vokalia and Consonantia, there live the blind texts. Separated they live
      in Bookmarksgrove right at the coast of the {semantics}, a large language
      ocean. A small river named Duden flows by their place and supplies it with
      the necessary regelialia. It is a paradisematic country, in which roasted
      parts of sentences fly into your mouth.
    </Wrapper>
  );
}
