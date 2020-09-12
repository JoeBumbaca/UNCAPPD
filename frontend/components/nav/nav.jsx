import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../../util/session_api_util';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropDown: false
    }

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) { 
    e.preventDefault();
    this.props.logout();
    this.props.history.push("/")
  }

  render () {
    
    if (this.props.currentUser) {
      const dropdown = (
        <ul id='user-dropdown'>
          <Link to={`/users/${this.props.currentUser.id}`}>
            <li>My Profile</li>
          </Link>
          <li onClick={this.handleLogout}>Logout</li>
        </ul>
      );
    return (
      <div className='nav-bar'>
        <div className='left-inner-nav'></div>
        <div className='inner-nav-bar'>
          <div className='logo-title'>
            <img className='nav-logo' src={window.navLogoURL} />
            <div className='nav-title'>
              <Link to='/the_pub' className='navLink'>
                UNCAPPD
              </Link>
            </div>
          </div>
          <ul className='nav-links'>
            <li className='nav-beers'>
              <Link to='/breweries' className='navLink'>
                Breweries
              </Link>
            </li>
            <li className='nav-reviews'>
              <Link to='/the_pub' className='navLink'>
                The Pub
              </Link>
            </li>
            <li className='nav-users'>
              <Link to='/beers' className='navLink'>
                Beers
              </Link>
            </li>
          </ul>
          <div className='user-button'>
            <div className='current-user'>
              <i className='fas fa-user-circle fa-2x'></i>
              {this.props.currentUser.username}
              {dropdown}
            </div>
          </div>
        </div>
      </div>
    );
    } else {
      return null;
    };
  };

};
export default withRouter(NavBar);