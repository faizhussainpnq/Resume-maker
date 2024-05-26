import React, { useState, useRef } from 'react';
// import Navbar from './Navbar';
import './Resumebuilder.css';
import { ArrowDown } from "react-feather";
import Editor from '../Editor/Editor';
import Preview from './Preview';
import ReactToPrint from 'react-to-print';


export default function Resumebuilder() {
// Define the color palette for the resume
  const colors = ["#3B71CA","#ff4500","#b00f0f","#ffb703","#02a1a6","#09e272"];
// State to manage the active color
  const [activeColor, setActiveColor] = useState(colors[0]); 
  const resumeRef = useRef()
 // Define the sections of the resume
  const sections = {
    personalInfo : "Personal Info",
    workExp : "Work Experience",
    education : "Education",
    skills : "Skills",
    summary : "Summary"
  }
// State to manage the resume information
  const [resumeInformation,setResumeInformation] = useState({
    [sections.personalInfo]:{
      id : sections.personalInfo,
      sectionTitle : sections.personalInfo,
      detail:{},   // Detail for personal info section
    },
    [sections.workExp]:{
      id : sections.workExp,
      sectionTitle : sections.workExp,
      points:[],   // Points for work experience section
    },
    [sections.education]:{
      id : sections.education,
      sectionTitle : sections.education,
      detail:{},    // Detail for education section
    },
    [sections.skills]:{
      id : sections.skills,
      sectionTitle : sections.skills,
      points:[],   // Points for skills section
    },
    [sections.summary]:{
      id : sections.summary,
      sectionTitle : sections.summary,
      detail:"",      // Detail for summary section
    },
  })

  // useEffect(()=>{
  //   console.log(resumeInformation)
  // },[resumeInformation])

  

  return (
    <>

     <div className="container">
      <h1 className="build">𝐑𝐞𝐬𝐮𝐦𝐞 𝐁𝐮𝐢𝐥𝐝𝐞𝐫</h1>
     {/* Toolbar with color options and download button */}
      <div className="toolbar">
        <div className="colors">
         {colors.map((item)=> (
          <span
            key={item}
            style={{backgroundColor: item}}
            className='color'
            id={item === activeColor ? "activeColor" : ""}
            onClick={()=>setActiveColor(item)}
          />
         ))}
        </div>
         {/* ReactToPrint for downloading the resume as a PDF */}
        <ReactToPrint
          trigger={() => {
            
            return (
              <button className="download">Download<ArrowDown/></button>
            );
          }}
          content={() => resumeRef.current}
        />
        
      </div>
       {/* Main content area containing the Editor and Preview components */}
      <div className="main">

      <Editor sections={sections} information={resumeInformation} setInformation={setResumeInformation}/>
        {/* Preview component for viewing the resume */}
      <Preview sections={sections} information={resumeInformation} activeColor={activeColor} ref={resumeRef}/>
      
      </div>
     </div>  

    </>
  )
}
