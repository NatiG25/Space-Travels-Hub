import React from 'react';
import { useSelector } from 'react-redux';
import ProfileMission from './ProfileMission';

const MyProfile = () => {
  const reservedMissions = useSelector((state) => state.missionReducer);
  return (
    <>
      <h2>My Missions</h2>
      <ul>
        {reservedMissions
          .filter((data) => data.reserved)
          .map((filterData) => (
            <ProfileMission key={filterData.mission_id} missionName={filterData.mission_name} />
          ))}
      </ul>
    </>
  );
};

export default MyProfile;
