import React, { PropTypes } from 'react';
import { auth } from './firebase';
import './CurrentUser.css';

const CurrentUser = ({ user }) => {
  const {photoURL, displayName, email, uid} = user.providerData[0];
  return (
    <div className="CurrentUser">
      <img className="CurrentUser--photo" src={photoURL} alt={displayName}/>
      <div className="CurrentUser--identification">
      <h3>{displayName}</h3>
      <p>{email}</p>
      <button onClick={() => auth.signOut()} >Sign Out</button>
      </div>
    </div>
  );
};

CurrentUser.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
    uid: PropTypes.string.isRequired
  })
};

export default CurrentUser;
