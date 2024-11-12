import { useContext, useEffect } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GiGamepad } from "react-icons/gi";
import { MdRemoveModerator, MdSpaceDashboard } from "react-icons/md";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Layout from "./Layout";

const Protected = () => {
  const { user, logout, decodeUserToken } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const decoded = decodeUserToken();

    if (decoded?.userType?.name !== "ADMIN") {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  const Style = (path) => ({
    color: location.pathname === path ? "#777" : "initial",
  });

  const closeNav = () => {
    // setIsSideOpened(false);
  };

  return (
    // <UserProvider>
    <Layout
      sideLinks={
        <>
          <div className="w-full h-full p-4 pt-14">
            <ul className="links flex flex-col">
              <li className="pt-2 pb-4 border-solid mb-2 border-b-2 border-gray-800 ">
                <Link className="flex gap-4 items-center" to="/admin/dashboard">
                  <MdSpaceDashboard size={30} className="text-amber-500" />
                  <p>Dashboard</p>
                </Link>
              </li>
              <li className="pt-2 pb-4 border-solid mb-2 border-b-2 border-gray-800 ">
                <Link
                  to="/admin/users-locator"
                  className="flex gap-4 items-center"
                >
                  <FaMapMarkedAlt size={30} className="text-amber-500" />
                  <p>Users Locator</p>
                </Link>
              </li>
              <li className="pt-2 pt-2 pb-4 border-solid mb-2 border-b-2 border-gray-800 ">
                <Link
                  className="flex gap-4 items-center"
                  to="/admin/reviews-mod"
                >
                  <MdRemoveModerator size={30} className="text-amber-500" />
                  <p>Reviews Moderator</p>
                </Link>
              </li>

              <li className="pt-2 pt-2 pb-4 border-solid mb-2 border-b-2 border-gray-800 ">
                <Link
                  className="flex gap-4 items-center"
                  to="/admin/games-mod"
                >
                  <MdRemoveModerator size={30} className="text-amber-500" />
                  <p>Games Moderator</p>
                </Link>
              </li>

              <li className="pt-2 pt-2 pb-4 border-solid mb-2 border-b-2 border-gray-800">
                <Link
                  className="flex gap-4 items-center"
                  to="/admin/gameUpload"
                >
                  <GiGamepad size={30} className="text-amber-500" />
                  <p>Game Upload</p>
                </Link>
              </li>
              <li className="pt-2 pt-2 pb-4 border-solid mb-2">
                <button
                  className="flex gap-4 items-center"
                  to="#"
                  onClick={logout}
                >
                  <BiLogOut size={30} className="text-amber-500" />
                  <p>Logout</p>
                </button>
              </li>
            </ul>
          </div>
        </>
      }
      content={<Outlet />}
    />
    // </UserProvider>
  );
};

export default Protected;
