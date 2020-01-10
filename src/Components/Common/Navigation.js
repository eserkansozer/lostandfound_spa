import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.svg';

const Navigation = () => {
    return(
      <nav className="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
        <div className="container">
          <img className="nav-avatar" src={logo} alt="" />
          <Link className="navbar-brand js-scroll-trigger" to="/">LostThenFound.co.uk</Link>
          <button className="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <NavLink className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/lost">Lost</NavLink>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <NavLink className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to={{pathname: '/found'/* , hash: '#blabla', search: '?qs=xxx' */}}>Found</NavLink>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <NavLink activeClassName="active" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/status">Check status</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      );
    }
  export default Navigation