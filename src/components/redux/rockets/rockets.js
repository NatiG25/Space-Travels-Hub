// Action Types
const GET_ROCKETS = 'GET_ROCKETS';
// Action Creaters
const getRockets = (payload) => ({ type: GET_ROCKETS, payload });
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
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};
export default rocketReducer;
