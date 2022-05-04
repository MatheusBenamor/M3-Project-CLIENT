

export default function CalculateAnalysis() {

    const safeFeedback = 'Great news!! Your analysis could work entirely perfect, just make sure you are examinating both internal and external factors and remember to apply your learnings at the right level in your organization. But before you go ahead, be sure to develop your ideas further. Good luck!';
  const moderateFeedback = 'Your project can work, maybe you should look for improve your strenghts and opportunities, based on your points your SWOT Analysis is not entirely safe.'
  const riskyFeedback = 'Based on the point that you assigned for your analysis, you should review and double check your decision. This analysis its risky and maybe this project may happen at a more favorable time.'

  function CalculateAnalysis() {

    const feedbackTotal = 0;
    const calculate = () => {
    if ((feedbackTotal) <= 15) {
        return riskyFeedback
     } else if (moderateFeedback <= 30) {
      return moderateFeedback
     } else {
       return (safeFeedback)
     }
    }
return (
    calculate(feedbackTotal)
    
    
);  
}
CalculateAnalysis()
}