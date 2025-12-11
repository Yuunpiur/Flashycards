import MainPage from "./pages/Main-Page";
import FilesFolders from "./pages/Files-Folders";
import TopicsFolder from "./pages/Topics-Folder";
import FlashcardsTerminal from "./pages/Flashcards-Terminal";
import Navbar from "./components/Navbar";
import LogIn from "./pages/Log-In.tsx";
import SignUp from "#pages/Sign-up.tsx";
import { useEffect } from "react";

import { Route, Routes } from "react-router-dom";

import "./main-page.css";
import "./navigation.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="/Sign-Up" element={<SignUp />}></Route>
        <Route
          path="/Main-Page"
          element={
            <div>
              <Navbar />
              <MainPage />
            </div>
          }
        />
        <Route
          path="/Files-Folders"
          element={
            <div>
              {" "}
              <Navbar />
              <FilesFolders />
            </div>
          }
        />
        <Route
          path="/Files-Folders/Topics"
          element={
            <div>
              {" "}
              <Navbar />
              <TopicsFolder />
            </div>
          }
        />
        <Route
          path="/Files-Folders/Topics/Flashcards"
          element={
            <div>
              {" "}
              <Navbar />
              <FlashcardsTerminal />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
