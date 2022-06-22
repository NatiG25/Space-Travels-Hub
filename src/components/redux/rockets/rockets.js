// Actions
const GET_ROCKETS = 'spacehub/rockets/GET_ROCKETS';

// Action Creator
export function getRockets(rockets) {
  return {
    type: GET_ROCKETS,
    payload: rockets,
  };
}

// Reducer
export default function rocketsReducer(state = [], action) {
  switch (action.type) {
    case GET_ROCKETS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
