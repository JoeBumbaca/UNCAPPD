import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout, createNewUser } from './actions/session_actions'


document.addEventListener("DOMContentLoaded", () => {

  // const store = configureStore();
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    console.log("wrong");
    store = configureStore();
  }


  window.login = login;
  window.logout = logout;
  window.createNewUser = createNewUser;
  window.getState = store.getState;
  window.dispatch = store.dispatch;


  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});