import React, { useState, useEffect } from "react";
import "../styles/signup.css";
import { Link } from "react-router-dom";
import ApiUtils from "../utils/Api.utils";

//Esse componente vai trazer todas as análises do usuário específico.

const AnalysisList = () => {
  const [allAnalysis, setAllAnalysis] = useState([]);

  const getAnalysis = async () => {
    
    try {
      const analysisList = await ApiUtils.getUserAnalysis();
      setAllAnalysis(analysisList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAnalysis();
    console.log('teste')
  }, []);

  return (
    <>
      <div className="analysis-list">
        <h3>My Analysis</h3>
        <ul>
          {allAnalysis.map((analysis) => {
            return <li key={analysis._id}>{analysis.analysisName}</li>;
          })}
        </ul>

        <Link to={`/analysis`}>
          <button type="submit">Create new Analysis</button>
        </Link>
      </div>
    </>
  );
};

export default AnalysisList;
