import { connect } from 'react-redux';
import React from 'react';
import { fetchBeer, updateBeer, removeErrors, fetchBeers} from '../../actions/beer_actions';
import EditBeerForm from './edit_beer_form';

const mapStateToProps = (state, ownProps) => {
  // debugger
  let id = ownProps.match.params.beerId;
  let beer;
  if (!state.entities.beers){
    beer = null; 
  } else {
    beer = state.entities.beers[id];
  }
  return {
    beers: beer,
    errors: state.errors.beerErrors,
    formType: 'Edit Beer',
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchBeer: id => dispatch(fetchBeer(id)),
    fetchBeers: () => dispatch(fetchBeers()),
    processForm: (beer) => dispatch(updateBeer(beer)),
    clearErrors: () => dispatch(removeErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBeerForm);