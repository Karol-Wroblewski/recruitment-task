import React from 'react'
import appStorePng from '../img/app-store-download.png'
import googlePlayPng from '../img/google-play-download.png'
import '../style/Banner.css';

function Banner() {

  return (
    <div className="banner">
      <h2>Pobierz aplikację Rent24 Carsharing i korzystaj </h2>
      <img src={appStorePng} alt="App Store logo"/>
      <img src={googlePlayPng} alt="Google Play logo"/>
    </div>
  )
}

export default Banner
