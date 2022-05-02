import React, { useState, useEffect } from 'react';
import AnalysisList from "../components/AnalysisList";
import "../styles/profile.css";
import ApiUtils from "../utils/Api.utils";
import UserProfile from '../components/UserProfile';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const [ user, setUser ] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const user = await ApiUtils.getUser();
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    }
    getProfile();
  }, [navigate])

  return (
    <div className="page-container">
        <div className="profile-container">
      <section className='sec-1'>
      <UserProfile {...user} />
          </section>
          <section className="sec-2">
          <AnalysisList></AnalysisList>
          </section>
        </div>
      </div>
  )
}


export default Profile;


