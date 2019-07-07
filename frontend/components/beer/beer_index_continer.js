import { connect } from 'react-redux';
import React from 'react';
import BeerIndex from './beer_index'
import { fetchBeers } from '../../actions/beer_actions';

const mapStateToProps = (state) => {
  let beersArr = Object.values(state.entities.beers)
  return {
    beers : beersArr
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchBeers: () => dispatch(fetchBeers())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BeerIndex);