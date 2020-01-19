import React from 'react'
import appStorePng from '../img/app-store-download.png'
import googlePlayPng from '../img/google-play-download.png'
import bmw from '../img/bmw.png'

import '../style/Banner.css';


function Banner() {

  return (
    <>
    <div className="banner">
      <h2>Pobierz aplikację Rent24 Carsharing i korzystaj </h2>
      <img src={appStorePng} alt="App Store logo"/>
      <img src={googlePlayPng} alt="Google Play logo"/>
    </div>
    {/* <div className="advert">
      <img src={bmw} alt="BMW"/>
      <div className="slogan">
        <h2>Samochody już od 40 groszy za minutę i 60 groszy za kilometr!</h2>
      </div>
    </div> */}
    
    </>
      // <img style={{height: "200px"}} src={car} alt="Car"/>
  )
}

export default Banner
