import { Link } from "react-router-dom";
import "../log-in.css";
import lightningIcon from "#logo";
function LogIn() {
  return (
    <>
      <div className="flashycards-logo">
        <img src={lightningIcon} className="lightning-icon" alt="shi" />
        <div className="flashycards-text">FlashyCards</div>
      </div>
      <div className="log-in-container">
        <div className="container-1">
          <div className="log-in">
            <input className="email-username" placeholder="Username or email" />
            <input type="password" className="password" placeholder="Password" />
          </div>
        </div>
        <div className="container-2">
          <div className="log-in-button-container">
            <button className="log-in-button">Log In</button>
          </div>
          <div className="signup">
            No Account?&nbsp;
            <Link to="/Sign-Up" className="signup-link">
              Create a new account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
