import { connect } from "react-redux";
import BreweryShow from "./brewery_show";
import { fetchBrewery } from '../../actions/brewery_actions';


const MSP = (state, ownProps) => {
  return {
    brewery: state.entities.breweries[ownProps.match.params.breweryId],
    beers: Object.values(state.entities.beers)
  };
};

const MDP = (dispatch) => {
  return {
    fetchBrewery: (id) => dispatch(fetchBrewery(id))
  };
};

export default connect(MSP, MDP)(BreweryShow)