import React from 'react';
import "../Inputcontrol/Inputcontrol.css"

export default function Inputcontrol({label,...props}) {
  return (
    <>

    <div className="input">
        {label && <label>{label}</label>}
        <input type="text" {...props}/>
    </div>

    </>
  )
}
