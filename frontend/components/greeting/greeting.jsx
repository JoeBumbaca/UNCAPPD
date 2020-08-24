
import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="splash-nav-bar">
      <nav className="login-signup">
        <Link to="/login" className="signin">SIGN IN</Link>
        &nbsp;&nbsp;
        <Link to="/signup" className="signup">CREATE AN ACCOUNT</Link>
      </nav>
    </div>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      {/* <h2 className="header-name">Hi, {currentUser.username}!</h2> */}
      {/* <button className="header-button" onClick={logout}>Log Out</button> */}
    </hgroup>
  );
  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;