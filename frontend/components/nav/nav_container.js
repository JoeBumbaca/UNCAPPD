import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Nav from './nav';

const mapStateToProps = (state) => {
  let user = state.entities.users
  let session = state.session
  return ({
    currentUser: user[session.currentUser]
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);