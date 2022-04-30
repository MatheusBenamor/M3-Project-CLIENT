import React from "react";
import AnalysisList from "../components/AnalysisList";
import "../styles/profile.css";

//A Imagem depois tem que ser substituida pelo user
const Profile = () => {
  return (
    <>
      <div className="page-container">
        <div className="profile-container">
      <section className='sec-1'>
          <img
            className="profile-img"
            src="https://res-console.cloudinary.com/dqycgj4fq/thumbnails/v1/image/upload/v1650967683/UHJvamVjdC1TV09UL2ltYWdlc19weHZ0NWY=/folder_thumbnail/d18xMTcsaF84OCxjX3RodW1i"
            alt="testimage"
          ></img>
          
          <p>Change profile image</p>
          <h3>Username: (Devolve o username)</h3>
          <h3>Email: (Devolve o email) - Update Email</h3>
          <h3>Change password</h3>
          </section>
          <section className="sec-2">
          <AnalysisList></AnalysisList>
          </section>
        </div>
      </div>
    </>
  );
};

export default Profile;
