import React from 'react';
import PropTypes from 'prop-types';

const RocketContainer = ({ image, name, description }) => (
  <section className="rockeContainer">
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
