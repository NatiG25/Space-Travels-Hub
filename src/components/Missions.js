import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from './Mission';
import { joinMission, cancelMission } from './redux/missions/missions';

const Missions = () => {
  const missionInfo = useSelector((state) => state.missionReducer);
  const dispatch = useDispatch();

  const joinMissionHandler = (id) => {
    dispatch(joinMission(id));
  };

  const cancelMissionHandler = (id) => {
    dispatch(cancelMission(id));
  };

  return (
    <main>
      <table className="tableMissions">
        <tbody>
          <tr>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
          {missionInfo.map((item) => (
            <Mission
              key={item.mission_id}
              missionName={item.mission_name}
              description={item.description}
              reservation={item.reserved}
              joinMissionHandler={() => joinMissionHandler(item.mission_id)}
              cancelMissionHandler={() => cancelMissionHandler(item.mission_id)}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Missions;
