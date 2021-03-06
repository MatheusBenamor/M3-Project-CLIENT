import React, { useState } from "react";
import ApiUtils from "../utils/Api.utils";
import "../styles/profile.css";

const UserProfile = ({ username, email, image }) => {
  const [file, setFile] = useState();
  const [imageUrl, setImageUrl] = useState("");

  const handleChangeImg = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    } else {
      setImageUrl(null);
    }
  };

  const handleUpdateImg = async () => {
    try {
      await ApiUtils.updateImage(file);
      setFile(null);
      setImageUrl(null);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='sec-1'>
      <div>
        <img src={image} alt={username} className="profile-img"/>
      </div>
      <div>
        <input id="change-img" type="file" onChange={handleChangeImg}/>
        {imageUrl ? (
          <>
            <img src={imageUrl} alt="new profile" />
            <button onClick={handleUpdateImg}>Save Image</button>
          </>
        ) : null}
      
      <h3>Username: {username}</h3>
          <h3>Email: {email}</h3>
          </div>
          </div>
    </>
  );
};

export default UserProfile;