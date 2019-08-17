import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../../util/session_api_util';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }


  handleLogout(e) { 
    e.preventDefault();
    console.log(this.props.currentUser);
    this.props.logout();
    this.props.history.push("/")
  }

  render () {
    if (this.props.currentUser) {
    return (
      <div className="nav-bar">
        <div className="left-inner-nav"></div>
        <div className="inner-nav-bar">
        <div className="logo-title">
        <img className="nav-logo" src={window.navLogoURL}/>
        <div className="nav-title">
              <Link to="/reviews/index" className="navLink">UNCAPPD</Link>
        </div>
        </div>
        <ul className="nav-links">
          <li className="nav-beers">
              <Link to="/beers/index" className="navLink">Beers</Link>
          </li>
          <li className="nav-reviews">
            <Link to="/reviews/index" className="navLink">Reviews</Link>
          </li>
          <li className="nav-users">
              <Link to="/beers/index" className="navLink">Users</Link>
          </li>
        </ul>
        <div className="user-button">
        <div className="current-user">{this.props.currentUser.username}</div>
          <button className="nav-logout" onClick={this.handleLogout}>Logout</button>
        </div>
        </div>
      </div>
    )
    } else {
      return null;
    };
  };

};
export default withRouter(NavBar);