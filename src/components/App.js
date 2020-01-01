import React from 'react';
import '../style/App.css';
import MapWrapper from './MapWrapper'
import Filtres from './Filtres'



export class App extends React.Component {

  state = {
    available: false,
    kilometersRange: { min: 0, max: 300 },
  };


  setFilterKilometersRange = (value) => {

    this.setState(prevState => {
      let kilometersRange = Object.assign({}, prevState.kilometersRange);
      kilometersRange.min = value.value.min;
      kilometersRange.max = value.value.max;                
      return { kilometersRange };
    })
    
  }

  setFilterAvailable = () => {this.setState({available: !this.state.available})}

  render() {
    return (
      <div className="container">
        <header className="row">
          <h1>Check our map</h1>     
        </header>
  
        <Filtres setFilterKilometersRange={this.setFilterKilometersRange} setFilterAvailable={this.setFilterAvailable} stateAvailable={this.state.available} stateKilometersRange={this.state.kilometersRange}></Filtres>

        <MapWrapper filterAvailable={this.state.available} filterKilometersRange={this.state.kilometersRange}></MapWrapper>
  
      </div>
    );
  }
  
}

export default App;
