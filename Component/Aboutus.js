import React from 'react';
import './Aboutus.css';
import aboutSvg from "../Component/Image/about.svg";
import aboutusSvg from '../Component/Image/aboutus.svg';
import about1Svg from '../Component/about1.svg';
import { Linkedin,GitHub,Instagram,Twitter,Facebook } from 'react-feather';
import { FaWhatsapp } from "react-icons/fa";

// import Navbar from './Navbar';

export default function Aboutus() {
  return (
    <>
      <div className="aboutus">
        <div className="imgabout">
          <img src={about1Svg} className="image" alt="" />
        </div>
        <div className="about">
          <h1><span>A</span>bout</h1>
          <p>Welcome to Resume maker, your go-to platform for creating professional resumes
           that stand out. Our mission is to empower individuals like you to craft compelling
           resumes that showcase your skills, experiences, and achievements effectively.

            At Resume maker, we understand the importance of a well-crafted resume in today's
             competitive job market. Whether you're a recent graduate, seasoned professional,
              or making a career transition, our user-friendly interface and customizable 
              templates make it easy to create a resume tailored to your unique career goals.
            </p>
        </div>
      </div>
      <div className="bottom">
      <div className="contact">
      <h3>Connect with us on social media</h3>
      </div> 
       <div className="social">
       <div className="linked"><a href="https://www.linkedin.com/in/faiz-hussain-8747a4285/" target='blank'><Linkedin/></a></div>
       <div className="git"><a href="https://github.com/faizhussainpnq/portfolio" target='blank'><GitHub/></a></div>
       <div className="insta"><a href="https://www.instagram.com/faizbarkati/" target='blank'><Instagram/></a></div>
       <div className="twitter"><a href="https://twitter.com/faizhussainpnq" target='blank'><Twitter/></a></div>
       <div className="facebook"><a href="https://www.facebook.com/faiz.barkati.3/" target='blank'><Facebook/></a></div>
       <div className="whatsapp"><a href="https://web.whatsapp.com/" target='blank'><FaWhatsapp size={30} color='white'/></a></div>
       
       </div>
        </div>

    </>
  )
}
