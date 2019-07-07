import React from 'react';
import { Link } from 'react-router-dom';
import NavContainer from '../nav/nav_container';

class CreateBeerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       name: '',
       style: '',
       abv: '',
       ibus: '',
       description: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const beer = Object.assign({}, this.state);
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
    if (this.props.formType === "Create Beer") {
      return (
        <div>
          <NavContainer />
          <div className="create-form-main">
            <div className="create-form-title">Add a Beer</div>
              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}
                placeholder="Beer Name"
              />
              <br />
              < input type="text"
                value={this.state.style}
                onChange={this.update('style')}
                placeholder="Style"
              />
              <br />
              < input type="text"
                value={this.state.abv}
                onChange={this.update('abv')}
                placeholder="ABV"
              />
              <br />
              < input type="text"
                value={this.state.ibus}
                onChange={this.update('ibus')}
                placeholder="IBU"
              />
              <br />
              < input type="text"
                value={this.state.description}
                onChange={this.update('description')}
                placeholder="Description"
              />
              <br />
            <input className="create-beer-button" type="submit" onClick={this.handleSubmit} value="Add The Beer!" />

          </div>
        </div>
      )
    }
  }

};

export default CreateBeerForm;