import React from 'react'
import logo from '../img/logo1.png'
import '../style/Header.css';

function Filtres() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light">      
      <a className="navbar-brand" href="#">
        <img  src={logo} alt=""/>
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Mapa</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Opłaty</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Warunki</a>
          </li>
        </ul>
        <button type="button" className="btn btn-outline-success mr-20">Logowanie</button>
        <button type="button" className="btn btn-success">Rejestracja</button>

      </div>
    </nav>
  )
}

export default Filtres
