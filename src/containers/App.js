import React from 'react';
import '../style/App.css';
import MapWrapper from './MapWrapper'
import Filtres from '../components/Filtres'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import * as actions from '../store/actions/index';
import { connect } from 'react-redux';

export class App extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <Header></Header>
        <Banner></Banner>
        <Filtres setFilterKilometersRange={this.props.onChangedKilometersRange} setFilterAvailable={this.props.onAvailableChanged} stateAvailable={this.props.available} stateKilometersRange={this.props.kilometersRange} downloaded={this.props.downloaded} setFilterBrand={this.props.onSetFilterBrand}></Filtres>
        <MapWrapper></MapWrapper>
        <Footer></Footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    available: state.App.available,
    kilometersRange: state.App.kilometersRange,
    downloaded: state.MapWrapper.downloaded,
    brand: state.App.brand
  };
}

const mapDispatchToProps = dispatch => {
  return {
      onAvailableChanged: () => dispatch(actions.setAvailableFilter()),
      onChangedKilometersRange: (value) => dispatch(actions.setKilometersRangeFilter(value)),
      onSetFilterBrand: (event) => dispatch(actions.setFilterBrand(event)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
