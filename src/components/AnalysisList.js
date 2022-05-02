import React, { useState } from 'react';
import "../styles/signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ApiUtils from "../utils/Api.utils";

//Esse componente vai trazer todas as análises do usuário específico.

const AnalysisList = () => {

  const [analysisName, setAnalysisName] = useState('')
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          await ApiUtils.getUserAnalysisName({ analysisName })
          navigate("/analysis");
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <>
    
      <div className="analysis-list" onSubmit={handleSubmit}>
      <h3>My Analysis</h3>
        <p onChange={e => setAnalysisName(e.target.value)}>Exemplo Análise Número 1</p>
        <p>{analysisName}</p>
        <p>Exemplo Análise Número 2</p>
        <p>Exemplo Análise Número 3</p>

        <Link to={`/analysis`}>
          <button type="submit">Create new Analysis</button>
        </Link>
      </div>
    </>
  );
};

export default AnalysisList;
