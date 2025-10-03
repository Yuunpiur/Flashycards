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

      <div className="authentication-container">
        <div className="log-in">
          <input className="email-username" placeholder="Username or email" />
          <input type="password" className="password" placeholder="Password" />
        </div>
        <div className="signup">
          No Account?&nbsp;
          <Link to="/" className="signup-link">
            Create a new account
          </Link>
        </div>
      </div>
    </>
  );
}

export default LogIn;
