import React from "react";
import "../styles/profile.css";
import { Link } from "react-router-dom";

//Esse componente vai trazer todas as análises do usuário específico.

const AnalysisList = () => {
  return (
    <>
    
      <div className="analysis-list">
      <h3>My Analysis</h3>
        <p>Exemplo Análise Número 1</p>
        <p>Exemplo Análise Número 2</p>
        <p>Exemplo Análise Número 3</p>

        <Link to={`/analysis`}>
          <button>Create new Analysis</button>
        </Link>
      </div>
    </>
  );
};

export default AnalysisList;
