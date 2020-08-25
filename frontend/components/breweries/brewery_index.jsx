import React from 'react';
import BreweryIndexItem from './brewery_index_item';
import NavBarContainer from '../nav/nav_container'


class BreweryIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllBreweries();
  }

  render() {
    const breweries = this.props.breweries.map((brewery) => {
      return <BreweryIndexItem key={brewery.id} brewery={brewery}/>
    })

    return (
      <>
        <NavBarContainer />
        <main className='brewery-index-main'>
          <section className='brewery-index-body'>
            {breweries}
          </section>
        </main>
      </>
    );
  };
};


export default BreweryIndex;