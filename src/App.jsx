import MainPage from "./pages/Main-Page";
import FilesFolders from "./pages/Files-Folders"
import TopicsFolder from "./pages/Topics-Folder";
import FlashcardsTerminal from "./pages/Flashcards-Terminal"

import { Route, Routes, Link } from "react-router-dom";
import  { useState } from "react";

import './main-page.css';
import './navigation.css';

import lightningIcon from "./Pics/logo-Icon/lightning-icon.svg"


function App() {

  const [click, setClick] = useState(false);
  const [slide, setSlide] = useState(false);
  return (
    <>
    {/* Navbar */}
      <div className="rectangle-1" id="rectangle-1">
        <div className="top-bar">
          <div className="hamburger-menu" id="hamburgerMenu" onClick={() => setClick(!click)}>
            <div className="parent">
              <div className="hamburger" onClick={() => setSlide(!slide)}>
                <div className={`bar1 ${slide ? "slide" : ""}`}></div>
                <div className={`bar2 ${slide ? "slide" : ""}`}></div>
                <div className={`bar3 ${slide ? "slide" : ""}`}></div>
              </div>
            </div>
          </div>
          <nav className={`menu ${click ? "move-right" : ""}`} id="navMenu">
            <div className="first-section section">──────── Main Part ────────</div>
            <ul>
              <li className="main-page">
                <Link to="/">Main Page</Link>
              </li>
              <li className="files-folders">
                <Link to="/Files-Folders">Files and
                  Folders</Link>
              </li>
            </ul>
            <div className="second-section section">───── Special Features ─────</div>
          </nav>
          <div className="logo-container">
            <div className="lightning-logo">
              <img src={lightningIcon} alt="lightning-logo" width="50"
                height="50" />
            </div>
            <div className="gold-text">FlashyCards</div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Files-Folders" element={<FilesFolders />} />
        <Route path="/Files-Folders/Topics" element={<TopicsFolder />} />
        <Route path="/Files-Folders/Topics/Flashcards" element={<FlashcardsTerminal />} />
      </Routes>
    </>
  );
}

export default App;
