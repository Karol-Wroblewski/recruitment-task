import * as actionTypes from './actions';

const initialState = {
  available: false,
  kilometersRange: { min: 0, max: 300 },
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
      case actionTypes.SET_AVAILABLE_FILTER:
          return {
              ...state,
              available: !state.available
          };
      case actionTypes.SET_KILOMETERS_RANGE_FILTER:
          return {
              ...state,
              kilometersRange: {
                  min: action.kilometersRange.value.min,
                  max: action.kilometersRange.value.max,
              },
          };
      default:
          return state;
  }
};

export default reducer;