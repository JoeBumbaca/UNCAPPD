import { connect } from 'react-redux';
import React from 'react';
import { updateBeer, removeErrors } from '../../actions/beer_actions';
import EditBeerForm from './edit_beer_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.beerErrors,
    formType: 'Edit Beer'
  };
};


const mapDispatchToProps = dispatch => {
  return {
    processForm: (beer) => dispatch(createBeer(beer)),
    clearErrors: () => dispatch(removeErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBeerForm);