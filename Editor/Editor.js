import React, { useEffect, useState } from 'react';
import "../Editor/Editor.css"
import Inputcontrol from '../Inputcontrol/Inputcontrol';
// import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Editor(props) {
const sections = props.sections;
const information = props.information;

  const [active,setActive] = useState(Object.keys(sections)[0]);

  const [sectionTitle,setSectionTitle] = useState(sections[Object.keys(sections)[0]]);

  const [activeInformation,setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  );
 
  const [personalInfoData, setPersonalInfoData] = useState({
    name: activeInformation?.detail?.name || "",
    title: activeInformation?.detail?.title || "",
    age: activeInformation?.detail?.age || "",
    DOB: activeInformation?.detail?.DOB || "",
    linkedin: activeInformation?.detail?.linkedin || "",
    github: activeInformation?.detail?.github || "",
    email: activeInformation?.detail?.email || "",
    mobile: activeInformation?.detail?.mobile || "",
    address: activeInformation?.detail?.address || "",
});



const handlePointUpdate = (value, index) => {
  const tempValues = { ...personalInfoData };
  tempValues.points = tempValues.points || []; // Ensure points is initialized as an array
  tempValues.points[index] = value;
  setPersonalInfoData(tempValues);
};




  // const [workExpData, setWorkExpData] = useState({
  //   designation: "",
  //   companyName: "",
  //   experienceCertificate: null,
  //   location: "",
  //   startDate: "",
  //   endDate: "",
  //   workDescription: ["", "", ""]
  // });
  // const [educationData, setEducationData] = useState({
  //   title: "",
  //   collegeName: "",
  //   startDate: "",
  //   endDate: ""
  // });
  // const [skillData, setSkillData] = useState({
  //   skills: ["", "", "", "", ""]
  // });
  // const [summaryData, setSummaryData] = useState({
  //   summary: ""
  // });




  const personalInfo = (
   <div className="detail">
    <div className="row">
        <Inputcontrol label="Name" placeholder="Enter your name eg. John david"
          value={personalInfoData.name} onChange={(event)=>setPersonalInfoData(prev=>({...prev,name:event.target.value}))}
        />
        <Inputcontrol label="Title" placeholder="Enter your title eg. Backend developer"
        
          value={personalInfoData.title} onChange={(event)=>setPersonalInfoData(prev=>({...prev,title:event.target.value}))}
        />
    </div>
    
    <div className="row">
        <Inputcontrol label="Age" placeholder="Enter your age eg. 24"
          value={personalInfoData.age} onChange={(event)=>setPersonalInfoData(prev=>({...prev,age:event.target.value}))}
        />
        <Inputcontrol label="DOB" type="date" placeholder="Enter your title"
          value={personalInfoData.DOB} onChange={(event)=>setPersonalInfoData(prev=>({...prev,DOB:event.target.value}))}
        />
    </div>


    <div className="row">
        <Inputcontrol label="Address" placeholder="Address"
          value={personalInfoData.address} onChange={(event)=>setPersonalInfoData(prev=>({...prev,address:event.target.value}))}
        />

    </div>


    <div className="row">
        <Inputcontrol label="Linkedin Link" placeholder="Enter your linkedin profile link"
          value={personalInfoData.linkedin} onChange={(event)=>setPersonalInfoData(prev=>({...prev,linkedin:event.target.value}))}
        />
        <Inputcontrol label="Github Link"  placeholder="Enter your github profile link"
          value={personalInfoData.github} onChange={(event)=>setPersonalInfoData(prev=>({...prev,github:event.target.value}))}
        />
    </div>
    <div className="row">
        <Inputcontrol label="Email" type="email" placeholder="Enter your email id"
          value={personalInfoData.email} onChange={(event)=>setPersonalInfoData(prev=>({...prev,email:event.target.value}))}
        />
        <Inputcontrol label="Mobile" placeholder="Enter your mobile number"
          value={personalInfoData.mobile} onChange={(event)=>setPersonalInfoData(prev=>({...prev,mobile:event.target.value}))}
        />
    </div>
   </div>
  )

  

  let workExp = (
    <div className="detail">
    <div className="row">
        <Inputcontrol label="Designation" placeholder="Enter your designation"
          value={personalInfoData.designation} onChange={(event)=>setPersonalInfoData(prev=>({...prev,designation:event.target.value}))}
        />
        <Inputcontrol label="Company Name" placeholder="Enter company name eg. wipro"
          value={personalInfoData.companyName} onChange={(event)=>setPersonalInfoData(prev=>({...prev,companyName:event.target.value}))}
        />
    </div>
    <div className="row">
        <Inputcontrol label="Experience Certificate Link" placeholder="Upload your experience certificate"
          value={personalInfoData.experienceCertificate} onChange={(event)=>setPersonalInfoData(prev=>({...prev,experienceCertificate:event.target.value}))}
        />
        <Inputcontrol label="Location" placeholder="Enter job location eg. pune"
           value={personalInfoData.location} onChange={(event)=>setPersonalInfoData(prev=>({...prev,location:event.target.value}))}
        />
    </div>
    <div className="row">
        <Inputcontrol label="Start Date" type="date" placeholder="Start date of your job"
           value={personalInfoData.startDate} onChange={(event)=>setPersonalInfoData(prev=>({...prev,startDate:event.target.value}))}
        />
        <Inputcontrol label="End Date" type="date" placeholder="End date of your job"
           value={personalInfoData.endDate} onChange={(event)=>setPersonalInfoData(prev=>({...prev,endDate:event.target.value}))}
        />
    </div>
    <div className="column">
        <Inputcontrol label="Enter work description" placeholder="Line1"
           value={personalInfoData.points ? personalInfoData.points[0] : ""}
           onChange={(event)=>handlePointUpdate(event.target.value,0)}
        />
        <Inputcontrol placeholder="Line2"  value={personalInfoData.points ? personalInfoData.points[1] : ""}
          onChange={(event)=>handlePointUpdate(event.target.value,1)}
        />
        <Inputcontrol placeholder="Line3"  value={personalInfoData.points ? personalInfoData.points[2] : ""}
          onChange={(event)=>handlePointUpdate(event.target.value,2)}
        />
    </div>
    </div>
  )

  let education = (
    <div className="detail">
    <div className="row">
        <Inputcontrol label="Title" placeholder="Enter your title eg. B.com"
          value={personalInfoData.title}
          onChange={(event)=>setPersonalInfoData(prev=>({...prev,title:event.target.value}))}
        />
        <Inputcontrol label="College Name" placeholder="Enter name of your college"
          value={personalInfoData.collegeName}
          onChange={(event)=>setPersonalInfoData(prev=>({...prev,collegeName:event.target.value}))}
        />
    </div>
    <div className="row">
        <Inputcontrol label="Start Date" type="date" placeholder="Enter your start education date"
          value={personalInfoData.startDate}
          onChange={(event)=>setPersonalInfoData(prev=>({...prev,startDate:event.target.value}))}
        />
        <Inputcontrol label="End Date" type="date" placeholder="Enter your end education date"
          value={personalInfoData.endDate}
          onChange={(event)=>setPersonalInfoData(prev=>({...prev,endDate:event.target.value}))}
        />
    </div>
    </div>
  )

  let Skill = (
    <div className="detail">
    <div className="column">
        <Inputcontrol label="Skill" placeholder="Line 1" value={personalInfoData.points ? personalInfoData.points[0] : ""}
          onChange={(event)=>handlePointUpdate(event.target.value,0)}
        />
        <Inputcontrol placeholder="Line 2"  value={personalInfoData.points ? personalInfoData.points[1] : ""}
          onChange={(event)=>handlePointUpdate(event.target.value,1)}
        />
        <Inputcontrol  placeholder="Line 3"  value={personalInfoData.points ? personalInfoData.points[2] : ""}
          onChange={(event)=>handlePointUpdate(event.target.value,2)}
        />
        <Inputcontrol  placeholder="Line 4"  value={personalInfoData.points ? personalInfoData.points[3] : ""}
          onChange={(event)=>handlePointUpdate(event.target.value,3)}
        />
        <Inputcontrol  placeholder="Line 5"  value={personalInfoData.points ? personalInfoData.points[4] : ""}
          onChange={(event)=>handlePointUpdate(event.target.value,4)}
        />
    
    </div>
    </div>
  )

  let summary = (
    <div className="detail">
    <div className="row">
    <Inputcontrol label="Summary" placeholder="Enter your objective summary" 
      value={personalInfoData.summary}
      onChange={(event)=>setPersonalInfoData(prev=>({...prev,summary:event.target.value}))}
    />
    </div>
    </div>
  )

  const nextPage = () => {
    const keys = Object.keys(sections);
    const index = keys.indexOf(active);
    if (index < keys.length - 1) {
      setActive(keys[index + 1]); // Move to the next page
    }
  };
  
  const previousPage = () => {
    const keys = Object.keys(sections);
    const index = keys.indexOf(active);
    if (index > 0) {
      setActive(keys[index - 1]); // Move to the previous page
    }
  };

  let generatedbody = () => {
    if (active === 'personalInfo') {
      return personalInfo;
    } else if (active === 'workExp') {
      return workExp;
    } else if (active === 'education') {
      return education;
    } else if (active === 'skills') {
      return Skill;
    } else if (active === 'summary') {
      return summary;
    }
  }
  
  const handleSubmission=()=>{
    switch(sections[active]){
      case sections.personalInfo:
        {
         const tempDetail={
          name : personalInfoData.name,
          title : personalInfoData.title,
          age : personalInfoData.age,
          DOB : personalInfoData.DOB,
          address : personalInfoData.address,
          linkedin : personalInfoData.linkedin,
          github : personalInfoData.github,
          email : personalInfoData.email,
          mobile : personalInfoData.mobile,
         }
        props.setInformation(prev=>({...prev,[sections.personalInfo]:
          {...prev[sections.personalInfo],detail:tempDetail,sectionTitle,  }}))

        break;
      }
      case sections.workExp:
        {
         const tempDetail={
          designation : personalInfoData.designation,
          companyName : personalInfoData.companyName,
          experienceCertificate : personalInfoData.experienceCertificate,
          location : personalInfoData.location,
          startDate : personalInfoData.startDate,
          endDate : personalInfoData.endDate,
          points : personalInfoData.points,
         }
        props.setInformation(prev=>({...prev,[sections.workExp]:
          {...prev[sections.workExp],detail:tempDetail,sectionTitle,  }}))

        break;
      }
      case sections.education:
        {
         const tempDetail={
          title : personalInfoData.title,
          collegeName : personalInfoData.collegeName,
          startDate : personalInfoData.startDate,
          endDate : personalInfoData.endDate,
         }
        props.setInformation(prev=>({...prev,[sections.education]:
          {...prev[sections.education],detail:tempDetail,sectionTitle,  }}))

        break;
      }
      case sections.skills:
        {
         const tempDetail={
          points : personalInfoData.points,
         }
        props.setInformation(prev=>({...prev,[sections.skills]:
          {...prev[sections.skills],detail:tempDetail,sectionTitle,  }}))

        break;
      }
      case sections.summary:
        {
         const tempDetail={
          summary : personalInfoData.summary,
         }
        props.setInformation(prev=>({...prev,[sections.summary]:
          {...prev[sections.summary],detail:tempDetail,sectionTitle,  }}))

        break;
      }
    }
  }

 
  useEffect(() => {
    const activeInfo = information[sections[active]];
    setActiveInformation(activeInfo);
    setSectionTitle(sections[active]);
    if (active !== 'skills'  && active !== 'workExp') {
      setPersonalInfoData(prevData => ({
          ...prevData,
          points: ["", "", "", "", ""]
      }));
  } else {
      // Setting points state for the skills section
      setPersonalInfoData(prevData => ({
          ...prevData,
          points: activeInfo?.detail?.points || ["", "", "", "", ""]
      }));
  }
    setPersonalInfoData(prevData => ({
      ...prevData,
      name: activeInfo?.detail?.name || "",
      title: activeInfo?.detail?.title || "",
      age: activeInfo?.detail?.age || "",
      DOB: activeInfo?.detail?.DOB || "",
      linkedin: activeInfo?.detail?.linkedin || "",
      github: activeInfo?.detail?.github || "",
      email: activeInfo?.detail?.email || "",
      mobile: activeInfo?.detail?.mobile || "",
      designation: activeInfo?.detail?.designation || "",
      companyName: activeInfo?.detail?.companyName || "",
      experienceCertificate: activeInfo?.detail?.experienceCertificate || "",
      location: activeInfo?.detail?.location || "",
      startDate: activeInfo?.detail?.startDate || "",
      endDate: activeInfo?.detail?.endDate || "",
      // points: activeInfo?.detail?.skills || ["", "", "", "", ""],
      collegeName: activeInfo?.detail?.collegeName || "",
      summary: typeof activeInfo?.detail?.summary === "string" ? activeInfo.detail.summary :"",
    }));
  }, [active]);


  
  
  const saved = () => toast.success("Your details has been saved successfully", {
    position: "top-center",
    autoClose: 2000,
    bgcolor: 'green',
    // hideProgressBar: false,
    // closeOnClick: true,
    // pauseOnHover: true,
    // draggable: true,
    // progress: undefined,
    });
 
//   let saved = ()=>{
//  return(
//   <Alert variant="filled" severity="success">
//   This is a filled success Alert.
// </Alert>
//  )
//   }
  
  return (
    
    <div className="container1">
        <div className="container2">
           {Object.keys(sections)?.map(key=><div
              className={active === key ? "section active" : "section"} key={key}
            onClick={()=>setActive(key)}>
            {sections[key]}
           </div>)}
        </div>
        <div className="body">
          <Inputcontrol label="Title" placeholder="Enter section title" 
            value={sectionTitle}
            onChange={(event)=>setSectionTitle(event.target.value)}
          /><br />

          {generatedbody()} 
         
         <div className="all">
         <div className="btn">
         <button onClick={()=>{handleSubmission(); saved();}}>Save</button>
        </div>
        <ToastContainer />
        <div className="pvn">
        {active !== 'personalInfo' &&(
         <div className="previous">
          <button onClick={previousPage}>Previous</button>
         </div>
         )}
         {active !== 'summary' && (
         <div className="next">
          <button onClick={nextPage}>Next</button>
         </div>
         )}
         {active !== 'personalInfo' && active !== 'workExp' && active !== 'education' && active !== 'skills' && (
         <div className="preview">
         <button onClick={nextPage}><a className='pre' style={{textDecoration:"none" , color:"white"}} href="#preview">Preview</a></button>
         </div>
         )}
     
         </div>
         </div>
       
        </div>
    </div>
    
  )
}