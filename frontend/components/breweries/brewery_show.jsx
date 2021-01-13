import React from 'react';
import NavBarContainer from '../nav/nav_container';
import BeerIndexItem from '../beer/beer_index_item';

class BreweryShow extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    this.props.fetchBrewery(this.props.match.params.breweryId)
    window.scrollTo(0,0);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/breweries/${this.props.match.params.breweryId}/beers/new`);
  }

  render() {
    if (!this.props.brewery || !this.props.beers) return null;

    const beers = this.props.beers.map(beer => {
      return <BeerIndexItem key={beer.id} beer={beer}/>
    })
    const { brewery } = this.props;

    return (
      <>
        <NavBarContainer />
        <div className='brewery-show-main'>
          <section className='brewery-show-info'>
            <ul className='brewery-show-item'>
              <section className='brewery-index-image'>
                <img src={brewery.photoUrl} alt={brewery.name} />
              </section>
              <section className='brewery-index-middle'>
                <li className='brewery-name'>{brewery.name}</li>
                <li className='brewery-location'>
                  {brewery.city}, {brewery.state} {brewery.country}
                </li>
              </section>
              <section>
                <li>Num. Reviews: {brewery.num_reviews}</li>
                <li>Avg Review Score: {brewery.rev_average}</li>
              </section>
            </ul>
            <section className='brewery-show-description'>
              <li>{brewery.description}</li>
            </section>
          </section>
          <section className='brewery-add-beer'>
            <button className='add' onClick={this.handleSubmit}>
              Add A Beer
            </button>
          </section>
          <section className='brewery-show-beers'>{beers}</section>
        </div>
      </>
    );
  };
};


export default BreweryShow;