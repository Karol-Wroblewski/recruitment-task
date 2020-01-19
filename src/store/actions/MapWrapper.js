import * as actionTypes from './actionTypes';
import { API_HOST } from '../../api-config';

export const setVehicles = ( vehicles ) => {
  return {
      type: actionTypes.FETCH_VEHICLES,
      vehiclesList: vehicles.objects,
  };
};

export const fetchVehiclesFailed = () => {
  return {
      type: actionTypes.FETCH_VEHICLES_FAILED
  };
};

export const initVehicles = () => {
  return dispatch => {
    fetch(`${API_HOST}VEHICLE`)
      .then(res => res.json())
      // .then(json => {this.setState({vehicles: json.objects, vehiclesDownloaded: true})});
      .then(json => dispatch(setVehicles(json)))
      .catch( error => {
        dispatch(fetchVehiclesFailed());
    } );
  };
};