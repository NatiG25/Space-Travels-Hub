import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from './redux/rockets/rockets';
import RocketContainer from './Rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
  const rocketInfo = useSelector((state) => state.rocketReducer);
  return (
    <>
      {rocketInfo.map((rocket) => (
        <RocketContainer
          key={rocket.id}
          name={rocket.rocket_name}
          description={rocket.description}
          image={rocket.flickr_images[0]}
        />
      ))}
    </>
  );
};
export default Rockets;
