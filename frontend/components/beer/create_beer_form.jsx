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
       description: '',
       photoFile: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);

  }

  componentWillMount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];

    reader.onloadend = () =>
      this.setState({ photoFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ photoFile: null })
    }

    this.setState({ photoFile: e.currentTarget.files[0] });
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append('beer[name]', this.state.name)
    formData.append('beer[style]', this.state.style)
    formData.append('beer[abv]', this.state.abv)
    formData.append('beer[ibus]', this.state.ibus)
    formData.append('beer[description]', this.state.description)
    formData.append('beer[photo]', this.state.photoFile)

    this.props.processForm(formData)
    .then(() => this.props.history.push('/beers/index'));
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
      return (
        <div>
          <NavContainer />
          <div className="create-form-main">
            <div className="create-form">
            <div className="create-form-title">Add a Beer</div>
              {this.renderErrors()}
              <div className="create-name" className="input">
                <i className="fab fa-untappd bottles"></i>
              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}
                placeholder="Beer Name"
                className="create-input"
                size="35"
              />
              </div>
              <br />
              <div className="create-style" className="input">
              <i className="fab fa-untappd bottles"></i>
              < input type="text"
                value={this.state.style}
                onChange={this.update('style')}
                placeholder="Style"
                className="create-input"
                size="35"
              />
              </div>
              <br />
              <div className="create-abv" className="input">
              <i className="fab fa-untappd bottles"></i>
              < input type="text"
                value={this.state.abv}
                onChange={this.update('abv')}
                placeholder="ABV"
                className="create-input"
                size="35"
              />
              </div>
              <br />
              <div className="create-ibus" className="input">
              <i className="fab fa-untappd bottles"></i>
              < input type="text"
                value={this.state.ibus}
                onChange={this.update('ibus')}
                placeholder="IBU"
                className="create-input"
                size="35"
              />
              </div>
              <br/>
              <div className="beer-photo">
                Upload a picture: <input type="file"
                onChange={this.handleFile}
                />
              </div>
              <br />
              <div className="create-description">
              < textarea
                value={this.state.description}
                onChange={this.update('description')}
                placeholder="Description"
                className="create-input"
                rows="8"
                cols="50"
              ></ textarea>
              </div>
              <br />
            <input className="create-beer-button" type="submit" onClick={this.handleSubmit} value="Add The Beer!" />
            </div>
          </div>
        </div>
      )
  }

};

export default CreateBeerForm;