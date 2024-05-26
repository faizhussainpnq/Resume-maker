import React from 'react';
import { Link } from 'react-router-dom';
import RLetter from '../Component/RLetter.png';

export default function Navbar() {
  return (
    <>

<nav class="navbar bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={RLetter} alt="" style={{width:"40px",height:"40px"}} />Resume Genius</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h3 class="offcanvas-title" id="offcanvasNavbarLabel"><img src={RLetter} alt="" style={{width:"40px",height:"40px"}} />Resume Genius</h3>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/"><h4>Home</h4></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/resumebuilder"><h4>Resume builder</h4></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/aboutus"><h4>About us</h4></Link>
          </li>
          
        </ul>
      </div>
    </div>
  </div>
</nav>


    </>
  )
}