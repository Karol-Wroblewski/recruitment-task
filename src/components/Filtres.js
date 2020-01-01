import React from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

function Filtres(props) {

  return (
    <div className="filtres">
      <label className="chechbox-container">Available
        <input type="checkbox" onChange={props.setFilterAvailable} />
        <span className="checkmark"></span>
      </label>

      <div className="filterLabel">Distance to drive:
        <InputRange
        maxValue={300}
        minValue={0}
        formatLabel={value => `${value} km`}
        value={props.stateKilometersRange}
        onChange={value => props.setFilterKilometersRange({value})}
        />
      </div>
    </div>
  )
}

export default Filtres