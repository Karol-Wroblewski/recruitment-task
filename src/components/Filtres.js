import React from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import '../style/Filtres.css';

function Filtres(props) {

  let carBrandOptions = ['All', 'Nissan', 'Enigma' ]
  let carBrandOptionsSelect = carBrandOptions.map((val) => {
    return (
      <option key={val} value={val}>{val}</option>
    )
  })

  return (
    <div className="filtres" style={{opacity: props.downloaded ? '1' : '.6'}}>
      <label className="chechbox-container">Available
        <input disabled={!props.downloaded} type="checkbox" onChange={props.setFilterBrand} />
        <span className="checkmark"></span>
      </label>
      <label className="select-brand"> Brand
        <select disabled={!props.downloaded} onChange={(event) => props.setFilterBrand(event)}>
          {carBrandOptionsSelect}
        </select>
      </label>
      
      <div className="filterLabel">Distance to drive:
        <InputRange
        disabled={!props.downloaded}
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