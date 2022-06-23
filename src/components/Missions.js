import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMission } from './redux/missions/missions';

const Missions = () => {
  const missionInfo = useSelector((state) => state.missionInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMission());
  }, []);

  return (
    <main>
      <table className="tableMissions">
        <tbody>
          <tr>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
          {missionInfo.length === 0
            ? 'no missions'
            : missionInfo.map((item) => (
              <>
                <tr key={item.mission_id}>
                  <td>{item.mission_name}</td>
                  <td>{item.description}</td>
                  <td>Status</td>
                  <td style={{ width: '7.5%', textAlign: 'center' }}><a className="joinMission" href="/">Join Mission</a></td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
    </main>
  );
};

export default Missions;
