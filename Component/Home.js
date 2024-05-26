import React from 'react';
import resumehomeSvg from "../Component/resumehome.svg"
import "./Home.css";
import { Link } from 'react-router-dom';
// import Navbar from './Navbar';

export default function Home() {
  return (
    <>
 {/* <Navbar/> */}
  {/* Header section container */}
<div className="header">
   {/* Header image */}
   <img src={resumehomeSvg} alt="" id='Headerimage'/>
  {/* Main heading with spans for emphasizing 'Resume' */}
   <h1 className='thought' >Online <span>Resume</span> Maker <br /> Build a Professional <span>Resume</span> Now</h1>
   </div>
   <div className="create">
   {/* Button that links to the resume builder page */}
   <button><Link to="/resumebuilder" style={{textDecoration:"none"}} ><h6 id='creating' >CREATE YOUR RESUME</h6></Link></button>
   </div>

    </>
  )
}
