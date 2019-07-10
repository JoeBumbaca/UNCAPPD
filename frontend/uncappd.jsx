import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout, createNewUser } from './actions/session_actions'
import { fetchBeers, fetchBeer, updateBeer } from './actions/beer_actions';
import { createReview, fetchReview, fetchReviews } from '../frontend/util/review_api_util';


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
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.fetchReviews = fetchReviews;
  window.fetchReview = fetchReview;



  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});