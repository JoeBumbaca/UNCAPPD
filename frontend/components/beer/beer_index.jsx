import React from 'react';
import { Link } from 'react-router-dom';
import BeerIndexItem from './beer_index_item';
import NavContainer from '../nav/nav_container';

class BeerIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit(e) {
  e.preventDefault();
  this.props.history.push('/beers/new');
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
        history={history}
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
            <button className="add" onClick={this.handleSubmit}>Add A Beer</button>
          </div>
            <div className="index-div"></div>
          <ul>
            { beers }
          </ul>
        </div>
      </div>

    </div>
  );
};

};
export default BeerIndex