import { connect  } from 'react-redux';
import { fetchAllBreweries } from '../../actions/brewery_actions';
import BreweryIndex from './brewery_index';

const MSP = (state) => {
  return {
    breweries: Object.values(state.entities.breweries)
  };
};

const MDP = (dispatch) => {
  return {
    fetchAllBreweries: () => dispatch(fetchAllBreweries())
  };
};

export default connect(MSP, MDP)(BreweryIndex);