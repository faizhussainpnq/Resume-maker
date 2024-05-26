import React, { useState, useRef } from 'react';
// import Navbar from './Navbar';
import './Resumebuilder.css';
import { ArrowDown } from "react-feather";
import Editor from '../Editor/Editor';
import Preview from './Preview';
import ReactToPrint from 'react-to-print';


export default function Resumebuilder() {

  const colors = ["#3B71CA","#ff4500","#b00f0f","#ffb703","#02a1a6","#09e272"];

  const [activeColor, setActiveColor] = useState(colors[0]); 
  const resumeRef = useRef()

  const sections = {
    personalInfo : "Personal Info",
    workExp : "Work Experience",
    education : "Education",
    skills : "Skills",
    summary : "Summary"
  }

  const [resumeInformation,setResumeInformation] = useState({
    [sections.personalInfo]:{
      id : sections.personalInfo,
      sectionTitle : sections.personalInfo,
      detail:{},
    },
    [sections.workExp]:{
      id : sections.workExp,
      sectionTitle : sections.workExp,
      points:[],
    },
    [sections.education]:{
      id : sections.education,
      sectionTitle : sections.education,
      detail:{},
    },
    [sections.skills]:{
      id : sections.skills,
      sectionTitle : sections.skills,
      points:[],
    },
    [sections.summary]:{
      id : sections.summary,
      sectionTitle : sections.summary,
      detail:"",
    },
  })

  // useEffect(()=>{
  //   console.log(resumeInformation)
  // },[resumeInformation])

  

  return (
    <>

     <div className="container">
      <h1 className="build">𝐑𝐞𝐬𝐮𝐦𝐞 𝐁𝐮𝐢𝐥𝐝𝐞𝐫</h1>
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
        <ReactToPrint
          trigger={() => {
            
            return (
              <button className="download">Download<ArrowDown/></button>
            );
          }}
          content={() => resumeRef.current}
        />
        
      </div>
      <div className="main">

      <Editor sections={sections} information={resumeInformation} setInformation={setResumeInformation}/>
      <Preview sections={sections} information={resumeInformation} activeColor={activeColor} ref={resumeRef}/>
      
      </div>
     </div>  

    </>
  )
}
