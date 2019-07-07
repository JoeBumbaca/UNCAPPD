import React from 'react';
import { Link } from 'react-router-dom';

const BeerIndexItem = ({ beer }) => {
  return (
    <li>
      <div className="index-item">
        <p className="index-name" className="index-description">{beer.name}</p>
        <div className="rating-style">
        <p>Avg rating: </p>
        <p className="index-style">{ beer.style }</p>
        </div>
        <div className="abv-ibus">
          <p className="index-abv">{ beer.abv }% ABV</p >
        <p className="index-ibus">{ beer.ibus } IBU</p >
        </div>
        <div className="edit-delete">
          <button className="edit-beer" className="index-buttons">Edit Beer</button>
          <button className="delete-beer" className="index-buttons">Delete Beer</button>
        </div>
      </div>
      <div className="index-bottom">
        <div className="index-item-div"></div>
        <div className="desc-box">
          <p className="index-description">{ beer.description }</p >
        </div>
        <div className="index-div"></div>
      </div>
    </li>
  )
};

export default BeerIndexItem;