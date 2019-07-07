import React from 'react';
import { Link } from 'react-router-dom';
import BeerIndexItem from './beer_index_item';
import NavContainer from '../nav/nav_container';

class BeerIndex extends React.Component {
  constructor(props) {
    super(props);
  }



componentDidMount() {
  this.props.fetchBeers();
};

render() {
  const beers = this.props.beers.map(beer => {
    return (
      <BeerIndexItem
        key={beer.id}
        beer={beer}
      />
    )
  })

  return (
    <div>
      <NavContainer />
      <ul>
        {beers}
      </ul>
    </div>
  );
};

};
export default BeerIndex