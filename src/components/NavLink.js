import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import planet from '../images/planet.png';

const NavLink = () => (
  <div className="navContainer">
    <div className="logoContainer">
      <img src={planet} alt="Planet" className="logo" />
      <p className="logoTitle">Space Travelers Hub</p>
    </div>
    <nav>
      <Link to="/">MyProfile</Link>
      <Link to="/Rockets">Rockets</Link>
      <Link to="/Missions">Missions</Link>
    </nav>
  </div>
);

export default NavLink;
