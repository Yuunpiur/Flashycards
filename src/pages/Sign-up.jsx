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
          <input type="password" className="confirm-password" placeholder="Confirm Password" />
        </div>
        <div className="sign-up-button-and-login">
          <button className="sign-up-button">Sign Up</button>
          <div className="go-back-login">Go back to <Link to="/" className="gold-login">Log In</Link></div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
