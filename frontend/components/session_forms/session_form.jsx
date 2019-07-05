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
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillMount() {
    this.props.clearErrors();
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

  handleDemo(e) {
    e.preventDefault();
    this.state = {
      username: "ipaLover42",
      password: "hunter12"
    };
    this.props.demoUser(this.state);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="errors" key={`error-${i}`}>
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
          <div className="signup-title">
            UNCAPPD
          </div>
          <div className="signup-subtitle">
            DRINK SOCIALLY
          </div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br />
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <div className="required">
              All fields below are required.
            </div>
            <div className="signup-username">
                <i className="fas fa-user"></i>
            <label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-input"
                placeholder="Username"
              />
            </label>
              </div>
              <br />
              <div className="safety">
              Be safe!  Avoid common words and include a mix of letters and numbers.
              </div>
            <br />
            <div className="signup-password">
                <i className="fas fa-lock"></i>
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
                placeholder="Password"
              />
            </label>
              </div>
            <br />
            <div className="signup-email">
                <i className="fas fa-envelope"></i>
            <label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
                placeholder="Email"
              />
            </label>
              </div>
              <div className="disclaimer">
                You must be of legal drinking age in your country to join Untappd. 
                By clicking Create Account, you agree to our Terms of Use and our Privacy Policy
              </div>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
          <br />
            <input className="signup-demo-user" type="submit" onClick={this.handleDemo} value="Demo Log In" />
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
              <input className="session-submit" type="submit" value={this.props.formType} />
              <br />
                <input className="demo-user" type="submit" onClick={this.handleDemo} value="Demo Log In" />
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