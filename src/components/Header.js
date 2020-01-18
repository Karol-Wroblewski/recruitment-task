import React from 'react'

function Filtres() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">Rent24</a>

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
        <button type="button" class="btn btn-outline-success mr-4">Logowanie</button>
        <button type="button" class="btn btn-success">Rejestracja</button>

      </div>
    </nav>
  )
}

export default Filtres
