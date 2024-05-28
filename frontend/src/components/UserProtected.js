import { useContext, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import UserLayout from "./UserLayout";

const UserProtected = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  // const { setIsSideOpened } = useNavContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return <UserLayout content={<Outlet />} />;
};

export default UserProtected;
