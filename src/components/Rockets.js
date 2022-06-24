import React from 'react';
import PropTypes from 'prop-types';
import './Rockets.css';

const RocketContainer = ({
  image, name, description, reserved, reserveRocketHandler, cancelRocketHandler,
}) => (
  <section className="rocket">
    <div>
      <img src={image} alt={name} />
    </div>
    <div>
      <h2>{name}</h2>
      <p>
        {reserved && <span>Reserved</span>}
        {description}
      </p>
      {!reserved && <button className="book" type="button" onClick={reserveRocketHandler}>Reserve Rocket</button>}
      {reserved && <button className="cancel" type="button" onClick={cancelRocketHandler}>Cancel Reservation</button>}
    </div>
  </section>
);
export default RocketContainer;

RocketContainer.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
  reserveRocketHandler: PropTypes.func.isRequired,
  cancelRocketHandler: PropTypes.func.isRequired,
};

RocketContainer.defaultProps = {
  reserved: false,
};
