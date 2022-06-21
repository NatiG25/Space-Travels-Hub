import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = () => {
  const navLinkStyle = ({ isActive }) => ({
    return: {
      textDecoration: isActive ? 'bold' : 'normal',
    },
  });

  return (
    <nav>
      <Link style={navLinkStyle} to="/">MyProfile</Link>
      <Link style={navLinkStyle} to="/Rockets">Rockets</Link>
      <Link style={navLinkStyle} to="/Missions">Missions</Link>
    </nav>
  );
};

export default NavLink;
