import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Protected from "./components/Protected";
import UserProtected from "./components/UserProtected";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GameDetail from "./pages/GameDetail";
import Games from "./pages/Games";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/admin/Dashboard";
import GameUpload from "./pages/admin/GameUpload";
import ReviewsModerator from "./pages/admin/ReviewsModerator";
import UsersLocator from "./pages/admin/UsersLocator";
import Profile from "./pages/Profile";
import GamesModerator from "./pages/admin/GamesModerator";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <div className="App bg-stone-950">
      <ScrollToTop />
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<UserProtected />}>
            <Route path="/games/:id" element={<GameDetail />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route element={<Protected />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/gameUpload" element={<GameUpload />} />
            <Route path="/admin/reviews-mod" element={<ReviewsModerator />} />
            <Route path="/admin/users-locator" element={<UsersLocator />} />
            <Route path="/admin/games-mod" element={<GamesModerator />} />
          </Route>
        </Routes>
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
