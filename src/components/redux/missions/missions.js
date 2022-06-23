// Action Types
const GET_MISSIONS = 'GET_MISSIONS';
const JOIN_MISSIONS = 'JOIN_MISSIONS';

// Action Creaters
const getMissions = (payload) => ({ type: GET_MISSIONS, payload });
export const joinMission = (id) => ({ type: JOIN_MISSIONS, id });

const missionsURL = 'https://api.spacexdata.com/v3/missions';
export const fetchMission = () => async (dispatch) => {
  const res = await fetch(missionsURL);
  const resJSON = await res.json();
  const missionsAll = [];
  Object.entries(resJSON).forEach((item) => {
    missionsAll.push({ ...item[1] });
  });

  return dispatch(getMissions(missionsAll));
};

// Reducers
const missionReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    case JOIN_MISSIONS:
      return state.map((mission) => {
        if (mission.mission_id !== action.id) return mission;
        return { ...mission, reserved: true };
      });
    default:
      return state;
  }
};

export default missionReducer;
