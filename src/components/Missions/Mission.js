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
      <tr>
        <td>{missionName}</td>
        <td>{description}</td>
        <td className="status">{reservation ? 'ACTIVE MEMEBR' : 'NOT A MEMEBR'}</td>
        <td style={{ width: '7.5%', textAlign: 'center' }}>
          {reservation
            ? (
              <button
                type="button"
                className="reservation"
                href="."
                onClick={cancelMissionHandler}
              >
                Cancel Mission
              </button>
            )
            : (
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
