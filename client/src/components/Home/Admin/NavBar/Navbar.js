import React from 'react'
import { Link } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import launchPad from  "../../../../images/Logo.png";
import Badge from '@mui/material/Badge';
import "./styles.css"
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg">
        <div className="container-fluid ">
        <Link className="nav-link active" to="/admin" aria-current="page">
        <img className="logo" src={launchPad} alt="LaunchPad" />
        </Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  d-flex justify-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Admin Panel <InfoIcon style={{ color: '#9629d2' }} />
          </Link>
          <ul className="dropdown-menu  mr-3" aria-labelledby="navbarDropdownMenuLink">
            <li><button className="dropdown-item">Notifications &nbsp; &nbsp;<Badge color="secondary" badgeContent={99}>  </Badge> </button> </li>
            <li><Link className="dropdown-item" to="/" >Logout</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar
