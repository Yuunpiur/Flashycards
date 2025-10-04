import { Link } from "react-router-dom";
import { useState } from "react";
import lightningIcon from "#logo";
import mainPageIcon from "../Pics/nav-icons/main-page-icon.svg";
import filesIcon from "../Pics/nav-icons/files-icon.svg"

function Navbar() {
  const [click, setClick] = useState(false);
  const [slide, setSlide] = useState(false);

  return (
    <div className="rectangle-1" id="rectangle-1">
      <div className="top-bar">
        {/* HAMBURGER MENU */}
        <div className="hamburger-menu" id="hamburgerMenu" onClick={() => setClick(!click)}>
          <div className="parent">
            <div className="hamburger" onClick={() => setSlide(!slide)}>
              <div className={`bar1 ${slide ? "slide" : ""}`}></div>
              <div className={`bar2 ${slide ? "slide" : ""}`}></div>
              <div className={`bar3 ${slide ? "slide" : ""}`}></div>
            </div>
          </div>
        </div>
        {/* POP UP NAVIGATION MENU */}
        <nav className={`menu ${click ? "move-right" : ""}`} id="navMenu">
          <ul>
            <Link to="/Main-Page" className="main-page nav-text">
              <img src={mainPageIcon} alt="" />
              Main Page
            </Link>
            <Link to="/Files-Folders" className="files-folders nav-text">
              <img src={filesIcon} alt="" />
              Files and Folders
            </Link>
          </ul>
        </nav>
        {/* LIGHTNING AND TEXT LOGO */}
        <div className="logo-container">
          <div className="lightning-logo">
            <img src={lightningIcon} alt="lightning-logo" width="50" height="50" />
          </div>
          <div className="gold-text">FlashyCards</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
