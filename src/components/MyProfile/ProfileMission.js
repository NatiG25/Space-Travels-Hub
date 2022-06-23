import React from 'react';
import PropTypes from 'prop-types';

function ProfileMission({ missionName }) {
  return (
    <>
      <li>{missionName}</li>
    </>
  );
}

ProfileMission.propTypes = {
  missionName: PropTypes.string.isRequired,
};

ProfileMission.defaultProp = {
  missionName: '',
};

export default ProfileMission;
