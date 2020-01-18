import * as actionTypes from '../actions/actionTypes';

const initialState = {
  vehicles: null,
  error: false,
  downloaded: false
};

const reducer = ( state = initialState, action ) => {
  console.log("REDUCER: ", action);
  switch ( action.type ) {
    
    case actionTypes.FETCH_VEHICLES:
      return {
        ...state,
        vehicles: action.vehiclesList,
        downloaded: true
      };
    case actionTypes.FETCH_VEHICLES_FAILED:
      return {
        ...state,
        error: true
      };
    default: return state;
  }
};

export default reducer;