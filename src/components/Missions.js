import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from './Mission';
import { fetchMission } from './redux/missions/missions';

const Missions = () => {
  const missionInfo = useSelector((state) => state.missionReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMission());
  }, []);
  return (
    <>
      {missionInfo.length === 0
        ? 'no missions'
        : missionInfo.map((item) => (
          <Mission
            missionName={item.mission_name}
            key={item.mission_id}
            description={item.description}
          />
        ))}
    </>
  );
};

export default Missions;
