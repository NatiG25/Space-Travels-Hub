import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({
  missionName,
  description,
  joinMissionHandler,
  cancelMissionHandler,
}) => {
  Mission.propTypes = {
    missionName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    joinMissionHandler: PropTypes.func.isRequired,
    cancelMissionHandler: PropTypes.func.isRequired,
  };

  return (
    <>
      <tr>
        <td>{missionName}</td>
        <td>{description}</td>
        <td>Status</td>
        <td style={{ width: '7.5%', textAlign: 'center' }}>
          {reserved ? (
            <button
              type="button"
              className="reservation"
              href="."
              onClick={joinMissionHandler}
            >
              Join Mission
            </button>
          ) : (
            <button
              type="button"
              className="reservation"
              href="."
              onClick={cancelMissionHandler}
            >
              Cancel Mission
            </button>
          )}
        </td>
      </tr>
    </>
  );
};

export default Mission;
// <button
//   type="button"
//   className="reservation"
//   href="."
//   onClick={joinMissionHandler}
// >
//   Join Mission
// </button>
// <button
//   type="button"
//   className="reservation"
//   href="."
//   onClick={cancelMissionHandler}
// >
//   Cancel Mission
// </button>
