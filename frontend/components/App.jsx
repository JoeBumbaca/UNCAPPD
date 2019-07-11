import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import BeerIndexContainer from './beer/beer_index_container';
import CreateBeerFormContainer from './beer/create_beer_form_container';
import CreateReviewFormContainer from './reviews/create_review_form_container';
import EditBeerFormContainer from './beer/edit_beer_form_container';
import ReviewIndexContainer from './reviews/review_index_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from "./Splash";

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/beers/index" component={BeerIndexContainer} />
      <ProtectedRoute exact path="/beers/new" component={CreateBeerFormContainer} />
      <ProtectedRoute path="/beers/edit/:beerId" component={EditBeerFormContainer} />
      <ProtectedRoute path="/reviews/index" component={ReviewIndexContainer} />
      <ProtectedRoute path="/reviews/new/:beerId" component={CreateReviewFormContainer} />
      
      <Route exact path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;