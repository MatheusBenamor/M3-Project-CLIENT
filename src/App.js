import './styles/app.css'
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Analysis from './pages/Analysis';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Feedback from './pages/Feedback';




function App() {

  const [analysisScore, setAnalysisScore] = useState(0)
  
  return (
    <>
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup />} />
    <Route path="/about" element={<About/>}/>
    <Route path="/analysis" element={<Analysis analysisScore={analysisScore} setAnalysisScore={setAnalysisScore}/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/feedback" element={<Feedback analysisScore={analysisScore}/>}/>
    </Routes>
    </>
  );
}

export default App;
