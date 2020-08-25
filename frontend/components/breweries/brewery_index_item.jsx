import React from 'react';

const breweryIndexItem = ({brewery}) => {
  return (
      <ul className='brewery-index-item'>
        <li>{brewery.name}</li>
      </ul>
  )
};

export default breweryIndexItem;