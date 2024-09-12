import {useState} from 'react'
import './LoginPopup.css'

function LoginPopup({setShowLogin}) {
    const[currentState, setCurrrentState]=useState("Sign up");


  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-header">
                <h2>{currentState}</h2>
                <span onClick={()=> setShowLogin(false)} className="close-login-popup">X</span>
            </div>
            <div className="login-popup-inputs">
                {currentState==="Login"?<></>:
                <input type="text" placeholder="Enter your Name" required/> }
                <input type="email" placeholder="Enter your email" required/>
                <input type="password" placeholder="Enter your password" required/>
            </div>
            <button className="login-btn">{currentState==="Sign up"?"Create Account": "Login"}</button>
            <div className="login-popup-conditions">
                <input type="checkbox" required/>
                <p>I agree to the terms and conditions</p>
            </div>
            {currentState === "Login"?
            <p>Create a new account? <span onClick={()=> setCurrrentState("Sign up")}>Click Here</span></p>
            :<p>Already Have an account?<span onClick={()=> setCurrrentState("Login")}>Login Here</span></p>}
        </form>
    </div>
  )
}

export default LoginPopup