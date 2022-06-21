import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const NavLink = () => (
  <nav>
    <Link to="/">MyProfile</Link>
    <Link to="/Rockets">Rockets</Link>
    <Link to="/Missions">Missions</Link>
  </nav>
);

export default NavLink;
