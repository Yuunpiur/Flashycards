import { Link } from "react-router-dom";
import lightningIcon from "#logo";
import "../sign-up.css";

function SignUp() {
  return (
    <>
      <div className="flashycards-logo">
        <img src={lightningIcon} className="lightning-icon" alt="shi" />
        <div className="flashycards-text">FlashyCards</div>
      </div>

      <div className="sign-up-container">
        <div className="sign-up">
          <input className="email-username" placeholder="Username or email" />
          <input type="password" className="password" placeholder="Password" />
        </div>
        <div className="sign-up-button-container">
          <button className="sign-up-button">Sign Up</button>

          <button className="log-in-link">
            <Link to="/" className="log-in-link">
              Log In
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default SignUp;
