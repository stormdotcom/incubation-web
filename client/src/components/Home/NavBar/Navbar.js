import { Button } from '@mui/material';
import React from 'react'
import { Link } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import launchPad from  "../../../images/Logo.png";
import Badge from '@mui/material/Badge';
import "./styles.css"
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg">
        <div className="container-fluid ">
        <Link className="nav-link active" to="/" aria-current="page">
        <img className="logo" src={launchPad} alt="LaunchPad" />
        </Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link active" to="/" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" >Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" >Contact</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Options <InfoIcon style={{ color: '#9629d2' }} />
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/" >Settings</Link></li>
            <li><button className="dropdown-item">Notifications&nbsp; <Badge color="secondary" badgeContent={99}>  </Badge> </button> </li>
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
