import React from 'react';



const StarCounter = ({ count }) => {
  let star1 = <div>
    <img className="review-stars" src={window.images.star} />
    <img className="review-stars" src={window.images.grayStar} />
    <img className="review-stars" src={window.images.grayStar} />
    <img className="review-stars" src={window.images.grayStar} />
    <img className="review-stars" src={window.images.grayStar} />
  </div>

  let star2 = <div>
    <img className="review-stars" src={window.images.star} />
    <img className="review-stars" src={window.images.star} />
    <img className="review-stars" src={window.images.grayStar} />
    <img className="review-stars" src={window.images.grayStar} />
    <img className="review-stars" src={window.images.grayStar} />
  </div>

  let star3 = <div>
    <img className="review-stars" src={window.images.star} />
    <img className="review-stars" src={window.images.star} />
    <img className="review-stars" src={window.images.star} />
    <img className="review-stars" src={window.images.grayStar} />
    <img className="review-stars" src={window.images.grayStar} />
  </div>

  let star4 = <div>
    <img className="review-stars" src={window.images.star} />
    <img className="review-stars" src={window.images.star} />
    <img className="review-stars" src={window.images.star} />
    <img className="review-stars" src={window.images.star} />
    <img className="review-stars" src={window.images.grayStar} />
  </div>

  let star5 = <div>
    <img className="review-stars" src={window.images.star} />
    <img className="review-stars" src={window.images.star} />
    <img className="review-stars" src={window.images.star} />
    <img className="review-stars" src={window.images.star} />
    <img className="review-stars" src={window.images.star} />
  </div>

  switch(count) {
    case 1:
      return star1;
    case 2:
      return star2;
    case 3:
      return star3;
    case 4:
      return star4;
    case 5:
      return star5;
  }  
}


export default StarCounter;