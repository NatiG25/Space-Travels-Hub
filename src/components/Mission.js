import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ missionName, description }) => {
  Mission.propTypes = {
    missionName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  return (
    <main>
      <section className="missionsSection">
        <h2>Mission</h2>
        <p>{missionName}</p>
      </section>
      <section className="descriptionSection">
        <h2>Description</h2>
        <p>{description}</p>
      </section>
      {/* <section className="statusSection">
      <h2>Status</h2>
    </section> */}
    </main>
  );
};

export default Mission;
