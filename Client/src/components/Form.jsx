import React from 'react';
import { useState } from 'react';
import validation from './validation';
import Style from './styles/Form.module.css';

export default function Form ({login})  {

    const [userData, setUserData] = useState({email: '', password: ''});
    const [errors, setErrors] = useState({});
    

    const handleChange = (event) => {
        setUserData({... userData, [event.target.name]: event.target.value},);
        setErrors(validation({...userData, [event.target.name]: event.target.value, }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
        <div className={Style.divForm}>
            <form className={Style.form} onSubmit={handleSubmit}>
                <div className={Style.email}>
                    <label><span className={Style.text}>Email</span></label>
                    <input name='email' className={errors.email && Style.warnig} 
                    value={userData.email} onChange={handleChange}/>
                    <p className={Style.danger}>{errors.email}</p>
                </div>
                <div className={Style.password}>
                    <label ><span className={Style.text}>Password</span></label>
                    <input name='password' value={userData.password} onChange={handleChange} 
                    type='password' className={errors.password && Style.warnig}/>
                    <p className={Style.danger}>{errors.password}</p>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}