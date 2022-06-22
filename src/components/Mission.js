import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ missionName }) => {
  Mission.propTypes = {
    missionName: PropTypes.string.isRequired,
    // description: PropTypes.string.isRequired,
  };

  return (
    <>
      <section className="missionSection">
        <p>{missionName}</p>
        {/* <div className="descriptionSection">
          <p>{description}</p>
        </div>
        <div>
          <p>Status</p>
        </div> */}
      </section>
    </>
  );
};

export default Mission;
