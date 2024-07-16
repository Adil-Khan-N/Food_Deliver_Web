import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/storeContext';
import axios from "axios"

const LoginPopup = ({ setShowLogin }) => {

  const {url,setToken} = useContext(StoreContext)

  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler = (event) =>{
    const name = event.target.name
    const value = event.target.value
    setData(data=>({...data,[name]:value}))
  }

  const onLogin = async(event) =>{
    event.preventDefault()
    let newUrl = url
    if(currState==="Login"){
      newUrl += "/api/user/login"
    }
    else{
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl,data)

    if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem("token",response.data.token)
      setShowLogin(false)
    }
    else{
      alert(response.data.message)
    }

  }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? null : <input type="text" name="name" value={data.name} onChange={onChangeHandler} placeholder='Your name' required />}
          <input name="email" value={data.email} onChange={onChangeHandler} type="email" placeholder='Your Email' required />
          <input name="password" value={data.password} onChange={onChangeHandler}  type="password" placeholder='Your Password' required />
        </div>
        <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login Here</span></p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
