import React from 'react';
import { Link } from 'react-router-dom';
import BeerIndexItem from './beer_index_item';
import NavContainer from '../nav/nav_container';

class BeerIndex extends React.Component {
  constructor(props) {
    super(props);

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
          deleteBeer={this.props.deleteBeer}
          fetchBeers={this.props.fetchBeers}
        />
      )
    })

    return (
      <div>
        <NavContainer />
        {/* <div className='test'>{window.system}</div> */}
        <div className="index-main">
          <div className="index-form-main">
            <div className="index-form-header">
              <div className="index-title">Beers</div>
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