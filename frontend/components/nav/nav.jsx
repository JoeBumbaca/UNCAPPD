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
    this.handleDropDownEnter = this.handleDropDownEnter.bind(this);
    this.handleDropDownLeave = this.handleDropDownLeave.bind(this);
  }


  handleDropDownEnter() {
    this.setState({
      dropDown: true
    })
  }

  handleDropDownLeave() {
    this.setState({
      dropDown: false
    })
  }

  handleLogout(e) { 
    e.preventDefault();
    this.props.logout();
    this.props.history.push("/")
  }

  render () {
    const dropDownMenu = this.state.dropDown ? <div className='nav-dropdown' onMouseLeave={this.handleDropDownLeave}>Hello</div> : null
    if (this.props.currentUser) {
    return (
      <div className="nav-bar">
        <div className="left-inner-nav"></div>
        <div className="inner-nav-bar">
        <div className="logo-title">
        <img className="nav-logo" src={window.navLogoURL}/>
        <div className="nav-title">
              <Link to="/the_pub" className="navLink">UNCAPPD</Link>
        </div>
        </div>
        <ul className="nav-links">
          <li className="nav-beers">
              <Link to="/breweries" className="navLink">Breweries</Link>
          </li>
          <li className="nav-reviews">
            <Link to="/the_pub" className="navLink">The Pub</Link>
          </li>
          <li className="nav-users">
              <Link to="/beers" className="navLink">Beers</Link>
          </li>
        </ul>
        <div className="user-button">
          <div className="current-user" onMouseEnter={this.handleDropDownEnter} onMouseLeave={this.handleDropDownLeave}>{this.props.currentUser.username} </div>
          <button className="nav-logout" onClick={this.handleLogout}>Logout</button>
        </div>
        </div>
        {dropDownMenu}
      </div>
    )
    } else {
      return null;
    };
  };

};
export default withRouter(NavBar);