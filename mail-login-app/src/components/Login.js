
import React, { useState } from 'react';
import classes from './Login.module.css';

function Login(props) {
    const [enteredEmail, setEnteredEmail] = useState ("");
    const [enteredPassword, setEnteredPassword] = useState ("");
    const [isEmailValid, setIsEmailValid] = useState();
    const [isPasswordValid, setIsPasswordValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const enterEmailHandler = (event) =>{
        setEnteredEmail(event.target.value);
        setFormIsValid(
            event.target.value.includes('@') && enteredPassword.trim().length > 7 
            );
    }

    const enterPasswordHandler = (event) =>{
        setEnteredPassword(event.target.value);
        setFormIsValid(
            event.target.value.trim().length >7 && enteredEmail.includes('@')
        );
    }

    const validateEmailHandler = () =>{
        setIsEmailValid(enteredEmail.includes('@'));
    }

    const validatePasswordHandler = () => {
        setIsPasswordValid(enteredPassword.trim().length > 7 );
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        props.onLogIn(enteredEmail, enteredPassword);
        setEnteredEmail("");
        setEnteredPassword("");
    }

    return (
      
        <form onSubmit={submitHandler}>
            <div
          className={`${classes.control} ${
            isEmailValid === false ? classes.invalid : ''
          }`}
        >
            
            <label>Email Id</label>
            <input type="email" id='email' onChange={enterEmailHandler} onBlur={validateEmailHandler}></input>
            </div>
            <div
          className={`${classes.control} ${
            isPasswordValid === false ? classes.invalid : ''
          }`}
        >
            <label>Password</label>
            <input type="password" id='password' onChange={enterPasswordHandler} onBlur={validatePasswordHandler}></input>
            </div>
            <div className='button'>
            <button type="submit" disabled={!formIsValid} >Login</button>
            </div>
        </form>
        
    )

}
export default Login; 