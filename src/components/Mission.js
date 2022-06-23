import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({
  missionName,
  description,
  joinMissionHandler,
  cancelMissionHandler,
  reserveHandler,
}) => {
  Mission.propTypes = {
    missionName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    joinMissionHandler: PropTypes.func.isRequired,
    cancelMissionHandler: PropTypes.func.isRequired,
    reserveHandler: PropTypes.func.isRequired,
  };

  return (
    <>
      <tr>
        <td>{missionName}</td>
        <td>{description}</td>
        <td>Status</td>
        <td style={{ width: '7.5%', textAlign: 'center' }}>
          {reserveHandler ? (
            <button
              type="button"
              className="reservation"
              href="."
              onClick={cancelMissionHandler}
            >
              Cancel Mission
            </button>
          ) : (
            <button
              type="button"
              className="reservation"
              href="."
              onClick={joinMissionHandler}
            >
              Join Mission
            </button>
          )}
        </td>
      </tr>
    </>
  );
};

export default Mission;
