const missionsURL = 'https://api.spacexdata.com/v3/missions';
const GET_MISSIONS = 'GET_MISSIONS';

// Action Creaters
const getMissions = (payload) => ({ type: GET_MISSIONS, payload });

export const fetchMission = () => async (dispatch) => {
  const res = await fetch(missionsURL);
  const resJSON = await res.json();
  const missionsAll = [];
  Object.entries(resJSON).forEach((item) => {
    missionsAll.push({ ...item[1] });
  });
  return dispatch(getMissions(missionsAll));
};

const missionReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default missionReducer;
