import React from 'react';
import "../Inputcontrol/Inputcontrol.css"

// This is a reusable input control component that accepts a label and other props.
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
