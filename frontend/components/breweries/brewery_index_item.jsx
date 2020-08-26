import React from 'react';
import { Link } from 'react-router-dom'

const breweryIndexItem = ({brewery}) => {
  return (
      <ul className='brewery-index-item'>
        <section className='brewery-index-image'>
          <Link to={`/breweries/${brewery.id}`}>
            <img src={brewery.photoUrl} alt={brewery.name}/>
          </Link>
        </section>
        <section className='brewery-index-middle'>
          <li className='brewery-name'>{brewery.name}</li>
          <li className='brewery-location'>{brewery.city}, {brewery.state} {brewery.country}</li>
        </section>
        <section>
          <li>Num. Reviews</li>
          <li>Avg Review Score</li>
        </section>
      </ul>
  )
};

export default breweryIndexItem;