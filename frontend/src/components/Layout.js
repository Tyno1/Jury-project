import { useContext, useRef } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Layout = ({ sideLinks, header, content }) => {
  const { user } = useContext(AuthContext);
  // const { isSideOpened, setIsSideOpened } = useNavContext();
  const ref = useRef();

  const handleLogout = () => {
    window.location.reload();
  };

  return user ? (
    <div className="flex h-full bg-black">
      {/* Sidebar */}
      <div
        ref={ref}
        className="w-[300px] h-full z-20 fixed bg-black p-7 text-white"
      >
        {sideLinks}
      </div>

      {/* Content */}
      <div
        className="flex flex-col flex-1 ml-64"
        style={{ paddingLeft: "50px" }}
      >
        {/* Main Content */}
        <main className="flex-1 p-8">{content}</main>
      </div>
    </div>
  ) : (
    <>{content}</>
  );
};

export default Layout;
