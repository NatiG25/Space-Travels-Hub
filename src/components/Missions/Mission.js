import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({
  missionName,
  description,
  joinMissionHandler,
  cancelMissionHandler,
  reservation,
}) => {
  Mission.propTypes = {
    missionName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reservation: PropTypes.bool,
    joinMissionHandler: PropTypes.func.isRequired,
    cancelMissionHandler: PropTypes.func.isRequired,
  };

  Mission.defaultProps = {
    reservation: false,
  };

  return (
    <>
      <tr className="mission-row">
        <td>{missionName}</td>
        <td>{description}</td>
        <td className="status">
          {reservation
            ? <span className="status-field available-status">Active Member</span>

            : <span className="status-field unavailable-status">Not a Member</span> }
        </td>
        <td>
          {reservation
            ? (
              <button
                type="button"
                className="button-mission leave-mission"
                href="."
                onClick={cancelMissionHandler}
              >
                Cancel Mission
              </button>
            )
            : (
              <button
                type="button"
                className="button-mission join-mission"
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
