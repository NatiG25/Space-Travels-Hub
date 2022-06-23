import React from 'react';
import PropTypes from 'prop-types';
import './Rockets.css';

const RocketContainer = ({ image, name, description }) => (
  <section className="rocket">
    <div>
      <img src={image} alt={name} />
    </div>
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <button type="button">Reserve rocket</button>
    </div>
  </section>
);
export default RocketContainer;

RocketContainer.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
