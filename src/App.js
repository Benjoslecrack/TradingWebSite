import './App.css';
// Importation des modules
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useStateValue } from './context/AuthContext';
import axios from 'axios';

// Importation des pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login.jsx";
import Navbar from './components/Navbar/Navbar.jsx';
import Register from './pages/register/Register.jsx';
import Profile from './pages/profile/Profile.jsx';
import Contact from './pages/contact/Contact.jsx';
import Tools from './pages/tools/Tools';
import EmpruntAmortissable from './pages/tools/EmpruntAmortissable/EmpruntAmortissable';
import Lexique from './pages/Word/lexique/Lexique.jsx';

import Footer from './components/Footer/Footer';
import AllUser from './pages/AllUserPage/AllUser';
import Dashboard from './pages/dashboard/Dashboard';
import AddArticle from './pages/addArticle/AddArticle';
import ViewAllArticles from './pages/addArticle/ViewAllArticles';
import ArticleByCategorie from './pages/addArticle/articleByCategorie';
import AddWord from './pages/Word/AddWord/AddWord';
import WordPage from './pages/Word/wordPage/WordPage';
import MyWord from './pages/Word/myWord/MyWord';
import ModifyWord from './pages/Word/MofifyWord/ModifyWord';

// App
function App() {
  const [{ user }, dispatch] = useStateValue();


  useEffect(() => {
    // document.title = 'test';
    axios.get('/api/users/verifytoken', { withCredentials: true })
      .then((res) => {
        console.log("data verify", res.data)
        if (res.data) {
          dispatch({
            type: "SET_USER",
            user: res.data,
          })
        }
      })
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/allusers" element={<AllUser />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/ajoutarticle' element={<AddArticle />} />
        <Route path='/viewallarticles' element={<ViewAllArticles />} />
        <Route path="/articles/update" element={<AddArticle />} />

        <Route path='/emprunt-amortissable' element={<EmpruntAmortissable />} />

        <Route path="/tarificateurs" element={<div style={{ height: "100vh" }}>tarificateurs</div>} />
        <Route path="/articles/particuliers" element={<ArticleByCategorie />} />
        <Route path="/articles/professionnels" element={<ArticleByCategorie />} />
        <Route path="/articles/entreprises" element={<ArticleByCategorie />} />
        <Route path="/articles/actualités" element={<ArticleByCategorie />} />
        <Route path="/outils" element={<Tools />} />
        <Route path='/lexique' element={<Lexique />} />
        <Route path='/rgpd' element={<div style={{ height: "100vh" }}>RGPD</div>} />


        {user && <Route path="/mesmots" element={<MyWord />} />}
        {user && <Route path='/ajoutarticle' element={<AddArticle />} />}
        {user && <Route path='/ajoutmot' element={<AddWord />} />}
        {user && <Route path="/mesmots/modifier/:id" element={<ModifyWord />} />}
        {user && <Route path="/profile" element={<Profile />} />}

        <Route path="/contact" element={<Contact />} />

        <Route path='/lexique/:id' element={<WordPage />} />

        /** Ne rien mettre en dessous de cette route */
        <Route path="*" element={<h1> error 404</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;