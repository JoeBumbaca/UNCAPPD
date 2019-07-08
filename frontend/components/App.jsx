import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import BeerIndexContainer from './beer/beer_index_continer';
import CreateBeerFormContainer from './beer/create_beer_form_container';
import EditBeerFormContainer from './beer/edit_beer_form_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from "./Splash";

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/beers/index" component={BeerIndexContainer} />
      <Route exact path="/beers/new" component={CreateBeerFormContainer} />
      <Route exact path="/beers/edit" component={EditBeerFormContainer} />

      <Route path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;