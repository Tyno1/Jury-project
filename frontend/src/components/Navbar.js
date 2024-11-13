import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handler = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ref, callback]);
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout, decodeUserToken } = useContext(AuthContext);
  const menuRef = useRef();
  const loginRef = useRef();
  const mobileRef = useRef();

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const closeLogin = useCallback(() => setLoginOpen(false), []);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useOutsideClick(menuRef, closeMenu);
  useOutsideClick(loginRef, closeLogin);
  useOutsideClick(mobileRef, closeMobile);

  return (
    <nav className="navbar w-[100vw] h-20 md:h-20 fixed left-0 right-0 py-7 px-7 flex items-center shadow-lg backdrop-blur-lg bg-black text-amber-500 z-50">
      <Link
        className="font-bold text-3xl text-amber-500"
        to="/"
        aria-label="Home"
      >
        Jury
      </Link>
      {/* icons on mobile */}
      <div className="md:hidden flex gap-3 ml-auto items-center">
        <div className="menu-trigger" ref={menuRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hamburger mr-4"
            aria-label="Toggle Menu"
            role="button"
          >
            <GiHamburgerMenu size={25} />
          </button>

          {isOpen && (
            <div
              className="drop-down absolute top-20 right-0 z-50 w-56 bg-stone-950 px-5 py-2 rounded-sm shadow-2xl"
              role="menu"
            >
              <ul className="links flex flex-col gap-4">
                <li role="menuitem">
                  <Link to="/" onClick={closeMenu} aria-label="Home">
                    Home
                  </Link>
                </li>
                <li role="menuitem">
                  <Link
                    to="/games"
                    onClick={closeMenu}
                    aria-label="Games Catalogue"
                  >
                    Games Catalogue
                  </Link>
                </li>
                <li role="menuitem">
                  <Link to="/about" onClick={closeMenu} aria-label="About Us">
                    About Us
                  </Link>
                </li>
                <li role="menuitem">
                  <Link
                    to="/contact"
                    onClick={closeMenu}
                    aria-label="Contact Us"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="profile" onClick={closeMenu} ref={mobileRef}>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle User Profile"
            role="button"
          >
            <CgProfile size="2rem" />
          </button>
          {mobileOpen && (
            <div
              className="drop-down bg-stone-950 px-5 py-6 rounded-xl shadow-lg absolute top-20 right-0 z-50 w-56"
              role="menu"
            >
              {user ? (
                <ul className="flex flex-col gap-4">
                  <li role="menuitem">
                    {decodeUserToken()?.userType?.name === "ADMIN" ? (
                      <Link
                        onClick={closeMenu}
                        to="/admin/dashboard"
                        aria-label="Dashboard"
                      >
                        Dashboard
                      </Link>
                    ) : (
                      <Link
                        onClick={closeMenu}
                        to="/profile"
                        aria-label="Profile"
                      >
                        Profile
                      </Link>
                    )}
                  </li>
                  <li role="menuitem">
                    <Link
                      onClick={() => {
                        logout();
                        closeMenu();
                      }}
                      aria-label="Logout"
                    >
                      Log out
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="flex flex-col gap-4">
                  <li role="menuitem">
                    <Link onClick={closeMenu} to="/login" aria-label="Login">
                      Login
                    </Link>
                  </li>
                  <li role="menuitem">
                    <Link
                      onClick={closeMenu}
                      to="register"
                      aria-label="Register"
                    >
                      Register
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>

      {/* icons on web */}
      <div className="ml-auto hidden md:flex ">
        <ul role="menubar" className="hidden md:flex gap-6 items-center">
          <li role="menuitem">
            <Link to="/" aria-label="Home">
              Home
            </Link>
          </li>
          <li role="menuitem">
            <Link to="/games" aria-label="Games Catalogue">
              Games Catalogue
            </Link>
          </li>
          <li role="menuitem">
            <Link to="/about" aria-label="About Us">
              About Us
            </Link>
          </li>
          <li role="menuitem">
            <Link to="/contact" aria-label="Contact Us">
              Contact Us
            </Link>
          </li>
          <li role="menuitem" className="profile" ref={loginRef}>
            <button
              onClick={() => setLoginOpen(!loginOpen)}
              aria-label="Toggle User Profile"
              role="button"
            >
              <CgProfile size="2rem" />
            </button>
            {loginOpen && (
              <div
                className="drop-down bg-stone-950 px-5 py-6 rounded-xl shadow-lg absolute top-16 right-0 z-50 w-56"
                role="menu"
              >
                {user ? (
                  <ul role="menu" className="flex flex-col gap-4">
                    <li role="menuitem">
                      {decodeUserToken()?.userType?.name === "ADMIN" ? (
                        <Link
                          onClick={closeLogin}
                          to="/admin/dashboard"
                          aria-label="Dashboard"
                        >
                          Dashboard
                        </Link>
                      ) : (
                        <Link
                          onClick={closeLogin}
                          to="/profile"
                          aria-label="Profile"
                        >
                          Profile
                        </Link>
                      )}
                    </li>
                    <li role="menuitem">
                      <Link
                        onClick={() => {
                          logout();
                          closeLogin();
                        }}
                        aria-label="Logout"
                      >
                        Log out
                      </Link>
                    </li>
                  </ul>
                ) : (
                  <ul role="menu" className="flex flex-col gap-4">
                    <li role="menuitem">
                      <Link onClick={closeLogin} to="/login" aria-label="Login">
                        Login
                      </Link>
                    </li>
                    <li role="menuitem">
                      <Link
                        onClick={closeLogin}
                        to="register"
                        aria-label="Register"
                      >
                        Register
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
