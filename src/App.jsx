import MainPage from "./pages/Main-Page";
import FilesFolders from "./pages/Files-Folders";
import TopicsFolder from "./pages/Topics-Folder";
import FlashcardsTerminal from "./pages/Flashcards-Terminal";
import Navbar from "./components/Navbar";
import LogIn from "./pages/Log-In";

import { Route, Routes } from "react-router-dom";

import "./main-page.css";
import "./navigation.css";

function App() {
  return (
    <>
      {/* Dont show the Navbar in the log in page */}
      {window.location.href === "http://localhost:5173/" ? "" : <Navbar />}
      <Routes>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="/Main-Page" element={<MainPage />} />
        <Route path="/Files-Folders" element={<FilesFolders />} />
        <Route path="/Files-Folders/Topics" element={<TopicsFolder />} />
        <Route path="/Files-Folders/Topics/Flashcards" element={<FlashcardsTerminal />} />
      </Routes>
    </>
  );
}

export default App;
