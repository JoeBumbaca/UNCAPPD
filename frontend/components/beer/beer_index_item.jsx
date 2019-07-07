import React from 'react';
import { Link } from 'react-router-dom';

const BeerIndexItem = ({ beer }) => {
  return (
    <li>
      {beer.name}
      {beer.style}
      {beer.abv}
      {beer.ibus}
      {beer.description}
    </li>
  )
};

export default BeerIndexItem;