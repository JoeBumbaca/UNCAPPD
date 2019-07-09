import { connect } from 'react-redux';
import React from 'react';
import BeerIndex from './beer_index'
import { fetchBeers } from '../../actions/beer_actions';
import { deleteBeer } from '../../actions/beer_actions';

const mapStateToProps = (state) => {
  let user = state.entities.users
  let session = state.session
  let beersArr = Object.values(state.entities.beers)
  return {
    beers : beersArr,
    currentUser: user[session.currentUser]
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchBeers: () => dispatch(fetchBeers()),
    deleteBeer: beer => dispatch(deleteBeer(beer))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BeerIndex);