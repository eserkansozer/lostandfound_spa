import React, { Component } from 'react';
import logo from '../logo.svg';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Header extends Component {

  constructor(){
    super();
    this.state ={
      totalMatchCount: null
     }
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: 'https://localhost:5001/api/lost', 
      success: response => {
        this.setState({
          totalMatchCount: response.length
        });
      }
    });
  } 

  render() {
    return (
      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">

          <img className="masthead-avatar mb-5" src={logo} alt="" />

          <h1 className="masthead-heading mb-0">{this.props.title}</h1>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <p className="masthead-subheading font-weight-light mb-0">A place to unite with your lost belongings...</p>
          <div className='button-wrapper mt-4'>
            <div>
              <Link className='btn btn-outline-light btn-lg btn-block' to='/lost'>I lost something</Link>
            </div>
            <div className="mt-4 mb-1">
              <Link className='btn btn-light btn-lg btn-block' to='/found'>I found something</Link>
            </div>
            {this.state.totalMatchCount ?  <p>We have already matched {this.state.totalMatchCount} lost items with their owners!</p> : null}
          </div>

        </div>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header