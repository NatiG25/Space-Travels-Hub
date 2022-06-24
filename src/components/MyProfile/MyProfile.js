import React from 'react';
import { useSelector } from 'react-redux';
import ProfileMission from './ProfileMission';
import './profile.css';

const MyProfile = () => {
  const reservedMissions = useSelector((state) => state.missionReducer);
  const rocketInfo = useSelector((state) => state.rocketReducer);
  const reserveRockets = rocketInfo.filter((rocket) => rocket.reserved);

  return (
    <div className="profileContainer">
      <div className="missionContainer">
        <h2>My Missions</h2>
        <ul>
          {reservedMissions
            .filter((data) => data.reserved)
            .map((filterData) => (
              <ProfileMission key={filterData.mission_id} missionName={filterData.mission_name} />
            ))}
        </ul>
      </div>
      <div className="rocketContainer">
        <h2>My Rockets</h2>
        <ul>
          {reserveRockets.map((rocket) => (
            <li key={rocket.id}>
              {rocket.rocket_name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
