import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class BeerIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);

  }


  handleDelete(e) {
    e.preventDefault();
    let beer = this.props.beer
    this.props.deleteBeer(beer)
    window.location.reload();
  }

  render() {

    let beer = this.props.beer
  return (
    <li>
      <div className="index-item">
        <img className="beer-index-pic"src={beer.photoUrl}/>
        <p className="index-name">{beer.name}</p>
        <div className="rating-style">
        <p className="index-rating">Avg rating: </p>
        <p className="index-style">{ beer.style }</p>
        </div>
        <div className="abv-ibus">
          <p className="index-abv">{ beer.abv }% ABV</p >
        <p className="index-ibus">{ beer.ibus } IBU</p >
        </div>
        <div className="edit-delete">
          <Link to={ {pathname: `/beers/edit/${this.props.beer.id}`, beer: { beer} } } >
            <button className="edit-beer" className="index-buttons" >Edit Beer</button></Link>
          <button className="delete-beer" className="index-buttons" onClick={this.handleDelete}>Delete Beer</button>
        </div>
      </div>
      <div className="index-bottom">
        <div className="index-item-div"></div>
        <div className="desc-box">
          <div className="description-title">~Description~</div>
          <p className="index-description">{ beer.description }</p >
        </div>
        <div className="index-div"></div>
      </div>
    </li>
    )
  };

};

export default withRouter(BeerIndexItem);