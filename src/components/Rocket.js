import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelRocket, fetchRockets, reserveRocket } from './redux/rockets/rockets';
import RocketContainer from './Rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
  const rocketInfo = useSelector((state) => state.rocketReducer);

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
