// Action Types
const GET_ROCKETS = 'GET_ROCKETS';
const RESERVE_ROCKETS = 'RESERVE_ROCKETS';
const CANCEL_ROCKETS = 'CANCEL_ROCKETS';

// Action Creaters
const getRockets = (payload) => ({ type: GET_ROCKETS, payload });
export const reserveRocket = (id) => ({ type: RESERVE_ROCKETS, id });
export const cancelRocket = (id) => ({ type: CANCEL_ROCKETS, id });

export const fetchRockets = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const results = await response.json();
  const resData = [];
  Object.entries(results).forEach((result) => {
    resData.push({ ...result[1] });
  });
  return dispatch(getRockets(resData));
};
// Reducers
const rocketReducer = (state = [], action) => {
  const newState = (state, bool) => state.map((rocket) => {
    if (rocket.id !== action.id) return rocket;
    return { ...rocket, reserved: bool };
  });

  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;

    case RESERVE_ROCKETS:
      return newState(state, true);

    case CANCEL_ROCKETS:
      return newState(state, false);

    default:
      return state;
  }
};

export default rocketReducer;
