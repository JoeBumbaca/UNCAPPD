import { connect } from 'react-redux';
import React from 'react';
import { createBeer, removeErrors } from '../../actions/beer_actions';
import CreateBeerForm from './create_beer_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.beerErrors,
    formType: 'Create Beer'
  };
};


const mapDispatchToProps = dispatch => {
  return {
    processForm: (beer) => dispatch(createBeer(beer)),
    clearErrors: () => dispatch(removeErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBeerForm);