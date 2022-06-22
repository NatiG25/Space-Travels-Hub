import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import planet from '../images/planet.png';

const NavLink = () => (
  <nav className="nav">
    <div className="right-section">
      <img src={planet} className="imgPlanet" alt="Planet" />
      <h1>Space Travelers Hub</h1>
    </div>
    <div className="left-section">
      <Link to="/">MyProfile</Link>
      <Link to="/Rockets">Rockets</Link>
      <Link to="/Missions">Missions</Link>
    </div>
  </nav>
);

export default NavLink;
