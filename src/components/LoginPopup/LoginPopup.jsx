import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/frontend_assets/assets";
const LoginPopup = ({setShowLogin}) => {
  const [currState, setCurrState] = useState("Signup");
  return (
    <div className="login-popoup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
            srcset=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="your name" required />
          )}
          <input type="email" placeholder="your email" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>{currState === "Signup" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree your terms and conditions</p>
        </div>
        {currState == "Login" ? (
          <p onClick={()=>{
            setCurrState("Signup")
          }}>
            Create a New Acoount? <span>Click Here</span>
          </p>
        ) : (
          <p onClick={()=>{
            setCurrState("Login")
          }}>
            Already have a account Account? <span>Click Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
