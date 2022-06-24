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
  // console.log(rocketInfo);

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
          reserveRocketHandler={() => reserveRocketHandler(rocket.rocket_id)}
          cancelRocketHandle={() => cancelRocketHandler(rocket.rocket_id)}
        />
      ))}
    </>
  );
};
export default Rockets;
