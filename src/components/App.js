import React from 'react';
import '../style/App.css';
import MapWrapper from './MapWrapper'
import Filtres from './Filtres'
import Header from './Header'
import Banner from './Banner'
import Footer from './Footer'


import * as actions from '../store/actions/index';
import { connect } from 'react-redux';

export class App extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        
        <Header></Header>
        <Banner></Banner>
        <Filtres setFilterKilometersRange={this.props.onChangedKilometersRange} setFilterAvailable={this.props.onAvailableChanged} stateAvailable={this.props.available} stateKilometersRange={this.props.kilometersRange}></Filtres>

        <MapWrapper></MapWrapper>

        <Footer></Footer>
      </div>
    );
  }
  
}


const mapStateToProps = state => {
  return {
    available: state.App.available,
    kilometersRange: state.App.kilometersRange
  };
}

const mapDispatchToProps = dispatch => {
  return {
      onAvailableChanged: () => dispatch(actions.setAvailableFilter()),
      onChangedKilometersRange: (value) => dispatch(actions.setKilometersRangeFilter(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
