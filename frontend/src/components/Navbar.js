import React, { useContext, useEffect, useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout, decodeUserToken } = useContext(AuthContext);
  const menuRef = useRef();
  const loginRef = useRef();
  const mobileRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  useEffect(() => {
    const menuHandler = (e) => {
      if (!loginRef.current.contains(e.target)) {
        setLoginOpen(false);
      }
    };
    document.addEventListener("mousedown", menuHandler);

    return () => {
      document.removeEventListener("mousedown", menuHandler);
    };
  }, []);

  useEffect(() => {
    const menuHandler = (e) => {
      if (!mobileRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", menuHandler);

    return () => {
      document.removeEventListener("mousedown", menuHandler);
    };
  }, []);

  return (
    <nav className="navbar h-20 md:h-20 fixed left-0 right-0 py-7 px-7 flex items-center shadow-lg backdrop-blur-lg bg-black text-amber-500 z-50">
      <p className="font-bold text-3xl text-amber-500">
        <Link className="hidden lg:block " to="/">
          Jury
        </Link>
        <Link className="lg:hidden " to="/">
          Jury
        </Link>
      </p>
      {/* icons on mobile */}
      <div className="md:hidden flex gap-3 ml-auto items-center">
        <div className="menu-trigger" ref={menuRef}>
          <button onClick={() => setIsOpen(!isOpen)} className="hamburger mr-4">
            <GiHamburgerMenu size={25} />
          </button>

          {isOpen && (
            <div className="drop-down absolute top-20 right-0 z-50 w-56 bg-stone-950 px-5 py-2 rounded-sm shadow-2xl">
              <ul className="links flex flex-col">
                <li className="pt-2 pb-4 border-solid mb-2 border-b-2 border-gray-800 ">
                  <Link to="/">Home</Link>
                </li>
                <li className="pt-2 pb-4 border-solid mb-2 border-b-2 border-gray-800 ">
                  <Link to="/games">Games Catalogue</Link>
                </li>
                <li className="pt-2 pt-2 pb-4 border-solid mb-2 border-b-2 border-gray-800 ">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="pt-2 pt-2 pb-4 border-solid mb-2">
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="profile" ref={mobileRef}>
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            <CgProfile size="2rem" />
          </button>
          {mobileOpen && (
            <div className="drop-down bg-stone-950 px-5 py-6 rounded-xl shadow-lg absolute top-20 right-0 z-50 w-56">
              {user ? (
                <ul>
                  <li className="pb-2 border-solid border-b-2 border-gray-900 ">
                    {decodeUserToken()?.userType?.name === "ADMIN" ? (
                      <Link to="/admin/dashboard">Dashboard</Link>
                    ) : (
                      <Link to="/profile">Profile</Link>
                    )}
                  </li>
                  <li className="pt-2 ">
                    <Link onClick={logout}>Log out</Link>
                  </li>
                </ul>
              ) : (
                <ul>
                  <li className="pb-2 border-solid border-b-2 border-gray-900 ">
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="pt-2 ">
                    <Link to="register">Register</Link>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>

      {/* icons on web */}
      <ul className="hidden md:flex links ml-auto items-center">
        <li className="pr-8">
          <Link to="/">Home</Link>
        </li>
        <li className="pr-8 ">
          <Link to="/games">Games Catalogue</Link>
        </li>
        <li className="pr-8 ">
          <Link to="/about">About Us</Link>
        </li>
        <li className="pr-8 ">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="profile pr-8" ref={loginRef}>
          <button onClick={() => setLoginOpen(!loginOpen)}>
            <CgProfile size="2rem" />
          </button>
          {loginOpen && (
            <div className="drop-down bg-stone-950 px-5 py-6 rounded-xl shadow-lg absolute top-16 right-0 z-50 w-56">
              {user ? (
                <ul>
                  <li className="pb-2 border-solid border-b-2 border-gray-900 ">
                    {decodeUserToken()?.userType?.name === "ADMIN" ? (
                      <Link to="/admin/dashboard">Dashboard</Link>
                    ) : (
                      <Link to="/profile">Profile</Link>
                    )}
                  </li>
                  <li className="pt-2 ">
                    <Link onClick={logout}>Log out</Link>
                  </li>
                </ul>
              ) : (
                <ul>
                  <li className="pb-2 border-solid border-b-2 border-gray-900 ">
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="pt-2 ">
                    <Link to="register">Register</Link>
                  </li>
                </ul>
              )}
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}
