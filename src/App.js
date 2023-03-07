import './App.css';
// Importation des modules
import React from "react";
import { Routes, Route } from "react-router-dom";

// Importation des pages
import Home from "./pages/home/Home";
import Navbar from './components/Navbar/Navbar.jsx';

// Style
import "bootstrap/dist/css/bootstrap.min.css";

// App
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        /** Ne rien mettre en dessous de cette route */
        <Route path="*" element={<h1> error 404</h1>} />
      </Routes>
    </>
  );
}

export default App;