import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
  if (currentUser) {
  return (
    <div className="nav-bar">
      <div className="logo-title">
      <img className="nav-logo" src={window.navLogoURL}/>
      <div className="nav-title">UNCAPPD</div>
      </div>
      <ul className="nav-links">
        <li className="nav-beers">Beers</li>
        <li className="nav-reviews">Reviews</li>
        <li className="nav-users">Users</li>
      </ul>
      <div className="user-button">
      <div className="current-user">{currentUser.username}</div>
        <button className="nav-logout" onClick={logout}>Logout</button>
      </div>
    </div>
  )
  } else {
    return null;
  };
};

export default NavBar;