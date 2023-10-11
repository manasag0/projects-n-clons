import React, { useState } from 'react'
import "../App.css";
import Signup from './Signup';
import Signupsuccess from './Signupsuccess';

const Signedup = () => {
    const [formIsSubmitted, setFormIsSubmitted]= useState(false);
    const submitForm = ()=>{
        setFormIsSubmitted(true)
    }
  return (
    <div>
        {!formIsSubmitted?<Signup submitForm={submitForm}/> :<Signupsuccess />}
    </div>
  )
}

export default Signedup;
