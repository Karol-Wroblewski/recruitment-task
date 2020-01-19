import * as actionTypes from './actionTypes';

export const setAvailableFilter = ( value ) => {
  return {
      type: actionTypes.SET_AVAILABLE_FILTER,
      availableValue: value
  };
};

export const setKilometersRangeFilter = ( obj ) => {
  return {
      type: actionTypes.SET_KILOMETERS_RANGE_FILTER,
      kilometersRange: obj
  };
};

export const setFilterBrand = ( event ) => {
  return {
      type: actionTypes.SET_BRAND_FILTER,
      brand: event.target.value
  };
};