import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import carTemporary from '../img/temporary-photo.png'
import '../style/MapWrapper.css';

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
    fetch("https://dev.vozilla.pl/api-client-portal/map?objectType=VEHICLE")
      .then(res => res.json())
      .then(json => {this.setState({vehicles: json.objects, vehiclesDownloaded: true}); this.forceUpdate()});
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
    if (this.state.vehiclesDownloaded) {
      listVehicles = this.state.vehicles;

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
        { listVehicles }
      </Map>
    );
  }
}

export default MapWrapper;