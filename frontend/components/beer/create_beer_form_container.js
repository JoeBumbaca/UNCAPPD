import { connect } from 'react-redux';
import React from 'react';
import { createBeer, removeErrors } from '../../actions/beer_actions';
import { fetchBrewery } from '../../actions/brewery_actions';
import CreateBeerForm from './create_beer_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.beerErrors,
    formType: 'Create Beer',
    brewery: state.entities.breweries[ownProps.match.params.breweryId]
  };
};


const mapDispatchToProps = dispatch => {
  return {
    processForm: (beer) => dispatch(createBeer(beer)),
    clearErrors: () => dispatch(removeErrors()),
    fetchBrewery: (id) => dispatch(fetchBrewery(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBeerForm);