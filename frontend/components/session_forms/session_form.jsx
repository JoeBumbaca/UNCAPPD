import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    if (this.props.formType === 'Create Account') {
    return (
      <div className="form-main">
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br />
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
              />
            </label>
            <br />
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
            </label>
            <br />
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder="Email"
              />
            </label>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    </div>
    );
    } else {
      return (
        <div className="form-main">
        <div className="login-form-container">
          <div className="login-title">
            UNCAPPD
          </div>
            <div className="login-subtitle">
              DRINK SOCIALLY
          </div>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br />
            {this.renderErrors()}
            <div className="login-form">
              <br />
              <label>
                <div className="login-username">
                  <i className="fas fa-user"></i>
              <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                  placeholder="Username"
                />
                </div>
              </label>
              <br />
              <label>
                <div className="login-password">
                  <i className="fas fa-lock"></i>
              <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  placeholder="Password"
                />
                  </div>
              </label>
              <br />
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
              <div className="grey-div"></div>
              <div className="login-bottom">
              <div className="login-text">New around here?
              <span className="login-link">
                  <Link to="/signup" className="signup-link">Sign up!</Link>
              </span>
              </div>
              </div>
          </form>
          </div>
        </div>

        );
      }
    }
}

export default SessionForm;