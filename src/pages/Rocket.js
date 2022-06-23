import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../api/fetchRocketData';
import RocketContainer from '../components/Rockets';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
  const rocketInfo = useSelector((state) => state.rocketInfo);
  return (
    <>
      {rocketInfo.map((rocket) => (
        <RocketContainer
          key={rocket.id}
          name={rocket.rocket_name}
          description={rocket.description}
          image={rocket.flickr_image}
        />
      ))}
    </>
  );
};

export default Rockets;
