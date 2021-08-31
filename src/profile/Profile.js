import React from 'react';
import PropTypes from "prop-types";

const Profile = ({fullName, bio, profession, handleName}) => {
  return (
    <>
      <div style={{textAlign:"center"}}>
        <div>
          Votre nom complet est: 
          <span style={{color:"red", fontSize:"1.3rem", fontWeight:"bold"}}>
          {fullName}
          </span>
        </div>
        <div>
          Votre bio est: 
          <span style={{color:"blue", fontSize:"1.3rem", fontWeight:"bold"}}>
          {bio}
          </span>
        </div>
        <div>
          Vous travaillez en tant que: 
          <span style={{color:"green", fontSize:"1.3rem", fontWeight:"bold"}}>
          {profession}
          </span>
        </div>
        <button onClick={handleName}>Alert</button>
      </div>
      <div style={{marginTop:"1rem", textAlign:"center"}}>
        <img 
          src="https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png" 
          alt="Image de code"
        />
      </div>
    </>
  );
};

Profile.defaultProps = {
  fullName: "Willy",
  bio : "Travailleur",
  profession : "Dev Font-end"
}

Profile.propTypes = {
  fullName : PropTypes.string.isRequired,
  bio : PropTypes.string.isRequired,
  profession : PropTypes.string.isRequired
};

export default Profile;

