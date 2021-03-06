import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import BeerIndexContainer from './beer/beer_index_container';
import CreateBeerFormContainer from './beer/create_beer_form_container';
import CreateReviewFormContainer from './reviews/create_review_form_container';
import EditBeerFormContainer from './beer/edit_beer_form_container';
import ReviewIndexContainer from './reviews/review_index_container';
import BreweryIndexContainer from './breweries/brewery_index_container';
import BreweryShowContainer from './breweries/brewery_show_container';
import UserProfileContainer from './user/user_profile_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from "./Splash";

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/breweries/:breweryId/beers/new" component={CreateBeerFormContainer} />
      <ProtectedRoute path='/breweries/:breweryId' component={BreweryShowContainer} />
      <ProtectedRoute path='/breweries' component={BreweryIndexContainer} />
      <ProtectedRoute path="/beers/edit/:beerId" component={EditBeerFormContainer} />
      <ProtectedRoute path="/beers" component={BeerIndexContainer} />
      <ProtectedRoute path="/the_pub" component={ReviewIndexContainer} />
      <ProtectedRoute path="/reviews/new/:beerId" component={CreateReviewFormContainer} />
      <ProtectedRoute path='/users/:userId' component={UserProfileContainer}/>
      <Route exact path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;