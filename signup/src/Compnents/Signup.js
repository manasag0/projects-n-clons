import React from 'react';
import '../Compnents/signup.css';

export default function Signup() {
  return (
    <div className='container'>
       <div className='header'>

<div className='text'>Sign Up</div>
<div className='underline'></div>
</div>
<div className='inputs'>
<div className='input'>
<input type ="text" placeholder='Name'/>
</div>
<div className='input'><input type ="email" placeholder='EmailId'/></div>
<div className='input'>
<input type ="password" placeholder='Password'/>
</div>
</div>
<div className='submit-container'>Sign Up</div>
    </div>
  )
}
