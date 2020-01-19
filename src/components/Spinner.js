import React from 'react'
import '../style/Spinner.css';

function Banner() {

  return (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>    
  )
}

export default Banner
