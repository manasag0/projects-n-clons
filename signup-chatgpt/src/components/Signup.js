import React , {useEffect, useState} from 'react';
import Validation from './Validation';

const Signup = ({submitForm}) => {

    const [values,setValues] = useState({
        name: "",
        email: "",
        password:"",
    });
    
    const [errors, setErrors] = useState({})
    const [dataIsCorrect,setDataIsCorrect] = useState(false)
    const handleChange = (event)=>{
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        setDataIsCorrect(true)
    }
    useEffect(()=>{
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            submitForm(true);
        }
    });
  return (
    <div className='app-wrapper'>
        <div>
            <h1 className='title'>Sign Up</h1>

        </div>
        <form className='form-wrapper'>
            <div className='name'>
                <label className='label'>Name</label>
                    <input className='input' type='text' name='email' value={values.name}
                    onChange={handleChange}/>
                {errors.name && <p className='error'>{errors.name}</p>}
            </div>
            <div className='email'>
                <label className='label'>Email</label>
                    <input className='input' type='email' name='email' value={values.email}
                    onChange={handleChange}/>
                {errors.email && <p className='error'>{errors.email}</p>}
            </div>
            <div className='password'>
                <label className='label'>Passwrod</label>
                    <input className='input' type='password' name='password' value={values.password}
                    onChange={handleChange}/>
                            {errors.password && <p className='error'>{errors.password}</p>}
            </div>
            <div className='submit' onClick={handleFormSubmit}><button>Sign Up</button></div>
        </form>
      
    </div>
  )
}

export default Signup
