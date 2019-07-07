import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import BeerIndexContainer from './beer/beer_index_continer';
import { AuthRoute } from '../util/route_util';
import Splash from "./Splash";

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/beers/index" component={BeerIndexContainer} />
      <Route path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;