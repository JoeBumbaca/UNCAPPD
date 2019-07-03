import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout, createNewUser } from './actions/session_actions'


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  // window.login = login;
  // window.logout = logout;
  // window.createNewUser = createNewUser;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, root);
});