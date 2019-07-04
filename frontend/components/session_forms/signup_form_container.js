import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createNewUser } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({errors}) => {
  return {
    errors: errors.sessionErrors,
    formType: 'signup',
    navLink: <Link to="/login">Log In</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(createNewUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
