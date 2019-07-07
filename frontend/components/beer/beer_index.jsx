import React from 'react';
import { Link } from 'react-router-dom';
import BeerIndexItem from './beer_index_item';
import NavContainer from '../nav/nav_container';

class BeerIndex extends React.Component {
  constructor(props) {
    super(props);

    this.currentUser = this.props.currentUser
  }



componentDidMount() {
    this.props.fetchBeers()
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
      <div className="index-main">
        <div className="index-form-main">
          <div className="index-form-header">
            <div className="index-title">Beers</div>
            <button className="add">Add A Beer</button>
          </div>
            <div className="index-div"></div>
          <ul>
            {beers}
          </ul>
        </div>
      </div>

    </div>
  );
};

};
export default BeerIndex