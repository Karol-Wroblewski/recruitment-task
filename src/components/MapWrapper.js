import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import carTemporary from '../img/temporary-photo.png'
import '../style/MapWrapper.css';
import * as actions from '../store/actions/index';
import MarkerClusterGroup from 'react-leaflet-markercluster';

import { connect } from 'react-redux';

class MapWrapper extends React.Component {

  constructor() {
    super()
    this.state = {
      vehicles: {},
      vehiclesDownloaded: false,
    }
  }

  // CONNECT TO API
  componentDidMount() {
    this.props.initVehicles();
  }


  setDynamicMarkerColor(status) {
    return L.icon({
      iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-${status == 'AVAILABLE' ? 'green' : 'blue'}.png`,
    });
  }

  setDynamicStatusColor(status) {
    return status == 'AVAILABLE' ? '#28A745' : 'blue'
  }


  render() {

    let listVehicles = [];
    if (this.props.downloaded) {
      listVehicles = this.props.vehicles;

      // FILTER OBJECTS
      if(this.props.filterAvailable) { //SHOW ONLY AVAILABLE
        listVehicles = listVehicles.filter(vehicle => vehicle.status == "AVAILABLE" )
      }
      // SHOW ONLY IF OBJECT CAN COVER TYPED DISTANCE
      listVehicles = listVehicles.filter(vehicle => vehicle.rangeKm >= this.props.filterKilometersRange.min && vehicle.rangeKm <= this.props.filterKilometersRange.max )

      listVehicles = listVehicles.map((val) => {
        return (
          <Marker position={[val.location.latitude, val.location.longitude]} icon={this.setDynamicMarkerColor(val.status)} key={val.id} >
            <Popup>
              <div className="vehicle-popup">
                <div className="text-column">
                  <div>{val.name}</div>
                  <div>{val.platesNumber}</div>

                  
                  <div className="range-text">
                    Range: {val.rangeKm} km
                  </div>

                  <div className="status-wrapper" style={{ backgroundColor: this.setDynamicStatusColor(val.status)}}>
                    {val.status}
                  </div>
                  
                </div>
                <div className="photo-column">
                  <img src={carTemporary} alt="Car"/>
                  <div className="my-progress">
                    <div className="my-bar" style={{ width: `${val.batteryLevelPct}%` }}></div>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        );
      });
    }

    

    const position = [52.2627124327, 21];
    return (
      <Map center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <MarkerClusterGroup>
          { listVehicles }
        </MarkerClusterGroup>
          {/* <MarkerClusterGroup>
            <Marker position={[49.8397, 24.0297]} />
            <Marker position={[52.2297, 21.0122]} />
            <Marker position={[51.5074, -0.0901]} />
          </MarkerClusterGroup> */}
        
      </Map>
    );
  }
}

const mapStateToProps = state => {
  return {
      vehicles: state.MapWrapper.vehicles,
      error: state.MapWrapper.error,
      downloaded: state.MapWrapper.downloaded,
      filterAvailable: state.App.available,
      filterKilometersRange: state.App.kilometersRange,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      initVehicles: () => dispatch( actions.initVehicles() )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapWrapper);