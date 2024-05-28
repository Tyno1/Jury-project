import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const UserLayout = ({ sideLinks, header, content }) => {
  const { user } = useContext(AuthContext);

  return user ? <div className="flex h-full">{content}</div> : <>{content}</>;
};

export default UserLayout;
