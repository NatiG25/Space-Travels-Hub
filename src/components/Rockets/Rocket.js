import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelRocket, fetchRockets, reserveRocket } from '../redux/rockets/rockets';
import RocketContainer from './Rockets';

const Rockets = () => {
  const rocketInfo = useSelector((state) => state.rocketReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!rocketInfo.length) dispatch(fetchRockets());
  }, []);

  const reserveRocketHandler = (id) => {
    dispatch(reserveRocket(id));
  };

  const cancelRocketHandler = (id) => {
    dispatch(cancelRocket(id));
  };

  return (
    <>
      {rocketInfo.map((rocket) => (
        <RocketContainer
          key={rocket.id}
          name={rocket.rocket_name}
          description={rocket.description}
          image={rocket.flickr_images[0]}
          reserved={rocket.reserved}
          reserveRocketHandler={() => reserveRocketHandler(rocket.id)}
          cancelRocketHandler={() => cancelRocketHandler(rocket.id)}
        />
      ))}
    </>
  );
};
export default Rockets;
