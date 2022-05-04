import React, { useState, useEffect } from 'react';
import AnalysisList from "../components/AnalysisList";
import "../styles/profile.css";
import ApiUtils from "../utils/Api.utils";
import UserProfile from '../components/UserProfile';
import { useNavigate } from 'react-router-dom';



const Profile = () => {
  const [ user, setUser ] = useState({});
  //const [ analysis, setAnalysis] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const user = await ApiUtils.getProfile();
        setUser(user);
      } catch (error) {
        console.log(error);
        navigate('/login');
      }
    }
    getProfile();
  }, [navigate])
  

  return (
    <div className="page-container">
        <div className="profile-container">
      <section>
      <UserProfile {...user} />
          </section>
          <section className="sec-2">
          <AnalysisList/>
          </section>
        </div>
      </div>
  )
}

/*useEffect(() => {
    const getUserAnalysis = async (id) => {
      try {
        const analysis = await ApiUtils.getUserAnalysisName(id);
        setAnalysis(analysis);
      } catch (error) {
        console.log(error);
      }
    }
    getUserAnalysis();
  }, [navigate])*/

export default Profile;


