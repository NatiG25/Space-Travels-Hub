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
      <Link to="/">Rockets</Link>
      <Link to="/Missions">Missions</Link>
      <Link to="/MyProfile">MyProfile</Link>
    </div>
  </nav>
);

export default NavLink;
