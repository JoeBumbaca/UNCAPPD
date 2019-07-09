import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavContainer from '../nav/nav_container';

class EditBeerForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  }

  componentDidMount() {
    if (this.props.fetchBeer(this.props.match.params.beerId)) {
      // this.setState({
      //   id: this.props.beers.id,
      //   name: this.props.beers.name,
      //   style: this.props.beers.style,
      //   abv: this.props.beers.abv,
      //   ibus: this.props.beers.ibus,
      //   description: this.props.beers.description
      // })
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const beer = Object.assign({},this.state);
    this.props.processForm(beer);
    this.props.history.push('/beers/index');
  }


  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let beer;
    if(!this.props.beers){
       return null;
    } else {
    return (
      <div>
        <NavContainer />
        <div className="create-form-main">
          <div className="create-form">
            <div className="create-form-title">Edit this Beer</div>
            <div className="create-name" className="input">
              <i className="fab fa-untappd"></i>
              <input type="text"
                value={this.props.beers.name}
                onChange={this.update('name')}
                placeholder="Name"
                className="create-input"
              />
            </div>
            <br />
            <div className="create-style" className="input">
              <i className="fab fa-untappd"></i>
              < input type="text"
                value={this.props.beers.style}
                onChange={this.update('style')}
                placeholder="Style"
                className="create-input"
              />
            </div>
            <br />
            <div className="create-abv" className="input">
              <i className="fab fa-untappd"></i>
              < input type="text"
                value={this.props.beers.abv}
                onChange={this.update('abv')}
                placeholder="ABV"
                className="create-input"
              />
            </div>
            <br />
            <div className="create-ibus" className="input">
              <i className="fab fa-untappd"></i>
              < input type="text"
                value={this.props.beers.ibus}
                onChange={this.update('ibus')}
                placeholder="IBU"
                className="create-input"
              />
            </div>
            <br />
            <div className="create-description">
              < textarea
                value={this.props.beers.description}
                onChange={this.update('description')}
                placeholder="Description"
                className="create-input"
              ></ textarea>
            </div>
            <br />
            <input className="create-beer-button" type="submit" onClick={this.handleSubmit} value="Edit The Beer!" />
          </div>
        </div>
      </div>
    )
  }
}

};

export default withRouter(EditBeerForm);