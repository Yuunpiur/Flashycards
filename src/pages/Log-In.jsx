import { Link } from "react-router-dom";
import "../log-in.css";
import visibility_off from "../Pics/password/visibility-off.svg";
import visibility_on from "../Pics/password/visibility-on.svg";
import { useState } from "react";

function LogIn() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();


  };
  return (
    <>
      <div className="parent-container">
        <div className="presentation-container">
          <div className="flashycards-text">FlashyCards</div>
        </div>
        <form className="log-in-container" onSubmit={handleSubmit}>
          <div className="log-in">
            {/* PASSWORD INPUT */}
            <div className="username-sign sign">Username</div>
            <input className="username" placeholder="Enter username" />
            
            <div className="password-sign sign">Password</div>
            <span
              className="visibility-container"
              onClick={() => {
                setPasswordVisibility(!passwordVisibility);
              }}
            >
              <img src={`${passwordVisibility ? visibility_on : visibility_off}`} alt="" />
            </span>
            <input type={`${passwordVisibility? "text": "password"}`} className="password" placeholder="Password" />
          </div>
          <div className="log-in-button-container">
            <button className="log-in-button">Log In</button>
          </div>
          <div className="signup">
            No Account?&nbsp;
            <Link to="/Sign-Up" className="signup-link">
              Create a new account
            </Link>
          </div>

          {/* <form action={handleSubmit}>
            <input className="email-username" placeholder="Username or email" />
              <input type="password" className="password" placeholder="Password" />
            <button className="log-in-button">Log In</button>
          </form> */}
        </form>
      </div>
    </>
  );
}

export default LogIn;
