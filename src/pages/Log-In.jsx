import { Link } from "react-router-dom";
import "../log-in.css";
import visibility_off from "../Pics/password/visibility-off.svg";
import visibility_on from "../Pics/password/visibility-on.svg";
import { useState } from "react";

function LogIn() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [credentialStatus, setCredentialStatus] = useState(true);

  const saveData = async () => {
    if (username == "" || password == "") return;
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName: username, userPassword: password }),
      };

      const response = await fetch("http://localhost:8000/users", requestOptions);

      const parsedResponse = await response.json();

      if (parsedResponse.status) {
        setCredentialStatus(true);
      } else {
        setCredentialStatus(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveData();
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
            <div className="login-username-sign login-sign">Username</div>
            <input className="username" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)}/>
            <div className="login-password-sign login-sign">Password</div>
            <span
              className="visibility-container"
              onClick={() => {
                setPasswordVisibility(!passwordVisibility);
              }}
            >
              <img src={`${passwordVisibility ? visibility_on : visibility_off}`} alt="" />
            </span>
            <input type={`${passwordVisibility ? "text" : "password"}`} className="password" placeholder="Password" onChange={(e) => setPassword(e.target.value) }/>
          </div>
          <div className={`login-error-message ${credentialStatus? "" : "activate"}`}>Username or password incorrect!</div>
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
