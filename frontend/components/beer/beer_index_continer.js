import { connect } from 'react-redux';
import React from 'react';
import BeerIndex from './beer_index'
import { fetchBeers } from '../../actions/beer_actions';

const mapStateToProps = (state) => {
  return {
    beers : state.beers
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchBeers: () => dispatch(fetchBeers())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BeerIndex);