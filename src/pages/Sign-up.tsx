import { Link, useNavigate } from "react-router-dom";
import "../sign-up.css";
import { useState } from "react";
import visibility_off from "../Pics/password/visibility-off.svg";
import visibility_on  from "../Pics/password/visibility-on.svg"; 
import { FormEvent } from "react";

function SignUp() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [userNameExist, setUserNameExist] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false);

  const navigate = useNavigate();
  const saveData = async () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName: userName, userPassword: password }),
      };

      const response = await fetch("http://localhost:8000/createAccount", requestOptions);
      const data = await response.json();

      if (data.usernameExist) {
        setUserNameExist(true);
      } else {
        setUserNameExist(false);
        navigate("/Main-page");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    saveData();
  };

  /* const checkPasswordStrength = (password) => {
    if (password === "" || password === undefined) {
      return;
    }
    if (password.length < 8) {
      return "Password should be at least 8 characters!";
    }
    // Checking for uppercase, lower case and etc.. below
    else 
    {
      let strengthScore = 0;
      if(/[A-Z]/.test(password))

    }
  }; */

  return (
    <>
      <div className="parent-container">
        <div className="flashycards-logo">
          <div className="flashycards-text">FlashyCards</div>
        </div>

        <div className="sign-up-container">
          <form className="sign-up" onSubmit={handleSubmit}>
            <div>
              <div className="sign-up-username-sign sign-up-sign">Username</div>
              {/* USERNAME INPUT */}
              <input
                className="username"
                required
                placeholder="Enter your username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="password-group">
              <div className="sign-up-password-sign sign-up-sign">Password</div>
              <span
                className="password-visibility"
                onClick={() => {
                  setPasswordVisibility(!passwordVisibility);
                }}
              >
                <img className="password-visibility-icon" src={`${passwordVisibility ? visibility_on : visibility_off}`} alt="" />
              </span>
              {/* PASSWORD INPUT */}
              <input
                type={`${passwordVisibility ? "text" : "password"}`}
                className="password"
                required
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <div className="password-strength">{checkPasswordStrength(password)}</div> */}
            </div>
            <div className="confirm-password-group">
              <div className="sign-up-confirm-password-sign sign-up-sign">Confirm Password</div>
              <span
                className="confirm-password-visibility"
                onClick={() => {
                  setConfirmPasswordVisibility(!confirmPasswordVisibility);
                }}
              >
                <img className="password-visibility-icon" src={`${confirmPasswordVisibility ? visibility_on : visibility_off}`} alt="" />
              </span>
              {/* CONFIRM PASSWORD INPUT */}
              <input
                type={`${confirmPasswordVisibility ? "text" : "password"}`}
                className="confirm-password"
                required
                placeholder="Confirm your password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
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
