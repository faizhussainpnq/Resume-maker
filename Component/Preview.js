import React, { forwardRef, useEffect, useState } from 'react';
import '../Component/Preview.css';
import {Mail, Calendar, Linkedin,GitHub,PhoneCall,MapPin,Paperclip} from 'react-feather';


const Preview = forwardRef((props, ref) => {

// const information = props.information;
// const sections = props.sections;
// const activeColor = props.activeColor;

const { sections, information, activeColor } = props;

  const [columns,setColumns] = useState([[],[]]);

  const info = {
    personalInfo: information[sections.personalInfo],
    workExp: information[sections.workExp],
    education: information[sections.education],
    skills: information[sections.skills],
    summary: information[sections.summary],
  }


  const getFormattedDate = (value) => {
    if(!value) return ""
    const date = new Date(value)
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
  }

 
  


  useEffect(()=>{
  setColumns([
    [ sections.workExp, sections.education ],
    [sections.skills, sections.summary],
  ])
  },[])

//  useEffect(()=>{
//   const container5 = container5Ref.currrent;
//   if(!props.activeColor || !container5) return;
//   container5.style.setProperty("--color",props.activeColor)
   
//  },[props.activeColor])

  return (
     <>

<div ref={ref} className="container5" >
 <div className="heading">
    <p className="heading1"><a href="" name="preview"></a>{info.personalInfo?.detail?.name}</p>
    <p className='subHeading' style={{ color: activeColor }}>{info.personalInfo?.detail?.title}</p>
    <div className="infocontainer">
    <p className="subHeading" style={{ color: activeColor }}>Age : <span>{info.personalInfo?.detail?.age}</span></p>
    <p className="subHeading" style={{ color: activeColor }}>DOB : <span>{getFormattedDate(info.personalInfo?.detail?.DOB)}</span></p>
    </div>
    <p className="subHeading" style={{ color: activeColor }}>Address : <span>{info.personalInfo?.detail?.address}</span></p>

    <div className="links">
    {info.personalInfo?.detail?.email ?
      <a href="" className="link"><Mail style={{ color: activeColor }}/>{info.personalInfo?.detail?.email}</a>
    :<span/>}
    {info.personalInfo?.detail?.linkedin ?
      <a href="" className="link"><Linkedin style={{ color: activeColor }}/>{info.personalInfo?.detail?.linkedin}</a>
      :<span/>}
        {info.personalInfo?.detail?.github ?
        <a href="" className="link"><GitHub style={{ color: activeColor }}/>{info.personalInfo?.detail?.github}</a>
        :<span/>}
        {info.personalInfo?.detail?.mobile ?
        <a href="" className="link"><PhoneCall style={{ color: activeColor }}/>{info.personalInfo?.detail?.mobile}</a>:<span/>}
       

       
    </div>
    </div>
    <div className="main">


{/* //////////////////////////// summary //////////////////////////////// */}

      
<div key={"summary"} className="summary">
      

      <div className="sectionTitle">{information[sections.summary]?.sectionTitle}</div>
      <div className="content">
      <div className="item">

      <p className="overview">{info.summary?.detail?.summary}</p>

      </div>
      </div>
      </div>




      {/* //////////////////////////// Workexp //////////////////////////////// */}

      <div key={"workExp"} className="workExp">
      

      <div className="sectionTitle">{information[sections.workExp]?.sectionTitle}</div>
      <div className="content">
      <div className="item">
      {info.workExp?.detail?.designation ?
        <p className="subTitle" style={{ color: activeColor }}>{info.workExp?.detail?.designation}</p>:<span/>}
      {info.workExp?.detail?.companyName ?
        <p className="subTitle" style={{ color: activeColor }}>{info.workExp?.detail?.companyName}</p>:<span/>}
      {info.workExp?.detail?.experienceCertificate ?
        <a className="subTitle" style={{ color: activeColor }}><Paperclip style={{ color: activeColor }}/>{info.workExp?.detail?.experienceCertificate}</a>:<span/>}
      {info.workExp?.detail?.location ?
        <p className="subTitle" style={{ color: activeColor }}><MapPin style={{ color: activeColor }}/>{info.workExp?.detail?.location}</p>:<span/>}
      {info.workExp?.detail?.startDate ?
        <div className="date">
           <Calendar style={{ color: activeColor }}/>{" "}
           {getFormattedDate(info.workExp?.detail?.startDate)} - {getFormattedDate(info.workExp?.detail?.endDate)}
           </div>:<span/>}
           {info.workExp?.detail?.points ?
        <li className="subTitle" style={{ color: activeColor }}>{info.workExp?.detail?.points[0]}</li>:<span/>}
           {info.workExp?.detail?.points ?
        <li className="subTitle"  style={{ color: activeColor }}>{info.workExp?.detail?.points[1]}</li>:<span/>}
           {info.workExp?.detail?.points ?
        <li className="subTitle" style={{ color: activeColor }}>{info.workExp?.detail?.points[2]}</li>:<span/>}

      </div>
      </div>
      </div>

    
        {/* //////////////////////////// education //////////////////////////////// */}

      <div key={"education"} className="education">
      

      <div className="sectionTitle">{information[sections.education]?.sectionTitle}</div>
      <div className="content">
      <div className="item">
      {info.education?.detail?.title ?
        <p className="subTitle" style={{ color: activeColor }}>{info.education?.detail?.title}</p>:<span/>}
      {info.education?.detail?.collegeName ?
        <p className="subTitle" style={{ color: activeColor }}>{info.education?.detail?.collegeName}</p>:<span/>}
      {info.education?.detail?.startDate ?
        <div className="date">
           <Calendar style={{ color: activeColor }}/>{" "}
           {getFormattedDate(info.education?.detail?.startDate)} - {getFormattedDate(info.education?.detail?.endDate)}
           </div>:<span/>}

      </div>
      </div>
      </div>


       {/* //////////////////////////// skills //////////////////////////////// */}

      
       <div key={"skills"} className="skills">
      

      <div className="sectionTitle">{information[sections.skills]?.sectionTitle}</div>
      <div className="content">
      <div className="item">

           {info.skills?.detail?.points ?
        <li className="subTitle" style={{ color: activeColor }}>{info.skills?.detail?.points[0]}</li>:<span/>}
           {info.skills?.detail?.points ?
        <li className="subTitle" style={{ color: activeColor }}>{info.skills?.detail?.points[1]}</li>:<span/>}
           {info.skills?.detail?.points ?
        <li className="subTitle" style={{ color: activeColor }}>{info.skills?.detail?.points[2]}</li>:<span/>}
           {info.skills?.detail?.points ?
        <li className="subTitle" style={{ color: activeColor }}>{info.skills?.detail?.points[3]}</li>:<span/>}
           {info.skills?.detail?.points ?
        <li className="subTitle" style={{ color: activeColor }}>{info.skills?.detail?.points[4]}</li>:<span/>}

      </div>
      </div>
      </div>





      {/* <div className="col1">{columns[0].map(item=>sectionDiv[item])}</div>
      <div className="col2">{columns[1].map(item=>sectionDiv[item])}</div> */}
    </div>
</div>

     </>
  )
})

export default Preview
