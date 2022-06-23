// Action Types
const GET_MISSIONS = 'GET_MISSIONS';
const JOIN_MISSIONS = 'JOIN_MISSIONS';
const CANCEL_MISSIONS = 'CANCEL_MISSIONS';

// Action Creaters
const getMissions = (payload) => ({ type: GET_MISSIONS, payload });
export const joinMission = (id) => ({ type: JOIN_MISSIONS, id });
export const cancelMission = (id) => ({ type: CANCEL_MISSIONS, id });

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
  const newState = (state, bool) => state.map((mission) => {
    if (mission.mission_id !== action.id) return mission;
    return { ...mission, reserved: bool };
  });

  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;

    case JOIN_MISSIONS:
      return newState(state, true);

    case CANCEL_MISSIONS:
      return newState(state, false);

    default:
      return state;
  }
};

export default missionReducer;
