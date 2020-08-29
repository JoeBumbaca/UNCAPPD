import React from 'react';
import NavContainer from '../nav/nav_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <>
        <NavContainer />  
        <h1>User Profile Information</h1>
      </>
    );
  };

};

export default UserProfile;