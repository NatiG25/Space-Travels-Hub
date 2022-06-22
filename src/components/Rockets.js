/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

function RocketContainer({ image, name, description }) {
  // const dispatch = useDispatch();

  return (
    <div className="rocketContainer">
      <div className="imageContainer">
        <img src={image} alt="rocket" className="image" />
      </div>
      <div className="rocketDetails">
        <h3 className="rocketName">{name}</h3>
        <p className="rocketDescription">{description}</p>
        <button type="button" className="rocketButton">Reserve Rocket</button>
      </div>
    </div>
  );
}

RocketContainer.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RocketContainer;
