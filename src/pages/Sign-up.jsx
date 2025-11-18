import { Link } from "react-router-dom";
import "../sign-up.css";
import { useState } from "react";
import visibility_off from "../Pics/password/visibility-off.svg";
import visibility_on from "../Pics/password/visibility-on.svg";

function SignUp() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [userNameExist, setUserNameExist] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false);

  const sendData = async (userName, password) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName: userName, userPassword: password }),
    };

    const response = await fetch("http://localhost:8000/createAccount", requestOptions);
    const data = await response.json();
    console.log(data.userNameExist);
    if (data.usernameExist) { 
      console.log("INSIDE IF");
      setUserNameExist(true); } 
    else {
      console.log("INSIDE ELSE"); 
      setUserNameExist(false); }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    sendData(event.target[0].value, event.target[1].value);
  };

  return (
    <>
      <div className="parent-container">
        <div className="flashycards-logo">
          <div className="flashycards-text">FlashyCards</div>
        </div>

        <div className="sign-up-container">
          <form className="sign-up" onSubmit={handleSubmit}>
            <div>
              <div className="username-sign sign">Username</div>
              {/* USERNAME INPUT */}
              <input className="username" required placeholder="Enter your username" onChange={(e) => {
                setUsername(e.target.value);
                }
              } />
            </div>
            <div className="password-group">
              <div className="password-sign sign">Password</div>
              <span
                className="password-visibility"
                onClick={() => {
                  setPasswordVisibility(!passwordVisibility);
                }}
              >
                <img src={`${passwordVisibility ? visibility_on : visibility_off}`} alt="" />
              </span>
              {/* PASSWORD INPUT */}
              <input
                type={`${passwordVisibility ? "text" : "password"}`}
                className="password"
                required
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="confirm-password-group">
              <div className="confirm-password-sign sign">Confirm Password</div>
              <span
                className="confirm-password-visibility"
                onClick={() => {
                  setConfirmPasswordVisibility(!confirmPasswordVisibility);
                }}
              >
                <img src={`${confirmPasswordVisibility ? visibility_on : visibility_off}`} alt="" />
              </span>
              {/* CONFIRM PASSWORD INPUT */}
              <input
                type={`${confirmPasswordVisibility ? "text" : "password"}`}
                className="confirm-password"
                required
                placeholder="Confirm your password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  console.log(passwordConfirm);
                  // if confirm pass is empty or pass equals to confirm pass
                  if (e.target.value === "" || e.target.value === password) setErrorMessage(false);
                  else if (e.target.value != password) setErrorMessage(true);
                }}
              />
              <div className={`error-message ${errorMessage ? "activate" : ""}`}>Password does not match</div>
            </div>

            <div className={`username-exist-message ${userNameExist ? "activate" : ""}`}>Username already exist!</div>
            <button className="sign-up-button">Sign Up</button>
          </form>
          <div className="login-button">
            
            <div className="go-back-login">
              Go back to{" "}
              <Link to="/" className="gold-login">
                Log In
              </Link>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}

export default SignUp;
