import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ missionName, description, joinMissionHandler }) => {
  Mission.propTypes = {
    missionName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    joinMissionHandler: PropTypes.func.isRequired,
  };

  return (
    <>
      <tr>
        <td>{missionName}</td>
        <td>{description}</td>
        <td>Status</td>
        <td style={{ width: '7.5%', textAlign: 'center' }}>
          <button type="button" className="joinMission" href="." onClick={joinMissionHandler}>
            Join Mission
          </button>
        </td>
      </tr>
    </>
  );
};

export default Mission;
