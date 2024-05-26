import React from 'react';
import resumehomeSvg from "../Component/resumehome.svg"
import "./Home.css";
import { Link } from 'react-router-dom';
// import Navbar from './Navbar';

export default function Home() {
  return (
    <>
 {/* <Navbar/> */}
<div className="header">
   <img src={resumehomeSvg} alt="" id='Headerimage'/>
   <h1 className='thought' >Online <span>Resume</span> Maker <br /> Build a Professional <span>Resume</span> Now</h1>
   </div>
   <div className="create">
   <button><Link to="/resumebuilder" style={{textDecoration:"none"}} ><h6 id='creating' >CREATE YOUR RESUME</h6></Link></button>
   </div>

    </>
  )
}
