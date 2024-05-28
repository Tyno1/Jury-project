import React, { useContext, useState } from "react";
import heroImg from "../images/593333.jpg";
import LoginImg from "../images/tate-lohmiller-tH26UyDSfEU-unsplash.jpg";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [payload, setPayload] = useState({ email: "", password: "" });
  const [res, setRes] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const bgStyle = {
    backgroundImage: `url(${heroImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (payload) {
      login(payload)
        .then((res) => {
          setRes(res);
          navigate("/dashboard");
        })
        .catch((error) => {
          toast.error(error.message, { hideProgressBar: true });
        });
    }
  };

  return (
    <div className=" h-[100vh] w-full" style={bgStyle}>
      <div
        className="bg-container w-full h-full pt-6 md:pt-20"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.7 )" }}
      >
        <div className="container flex mx-auto mt-40 md:mt-20 bg-white h-[400px] w-full md:w-[70%] rounded-xl">
          <div className="left-section w-[45%] flex-1 h-full hidden md:flex object-cover object-center">
            <img
              className="object-cover object-center w-full h-full"
              src={LoginImg}
              alt=""
            />
          </div>

          <div className="right-section w-[55%] flex-1 bg-gray-100 p-8 flex flex-col gap-8 items-center my-auto h-[100%]">
            <h2 className="font-bold text-4xl">Login</h2>
            <form
              className="flex flex-col items-end gap-4 h-full w-full"
              onSubmit={handleLogin}
            >
              <div className="email-section flex items-center gap-2 w-full">
                <label className="text-lg" htmlFor="">
                  Email
                </label>
                <input
                  className="p-3 rounded-lg w-full"
                  name="email"
                  type="email"
                  placeholder="joe@mail.com"
                  value={payload.email}
                  onChange={handleChange}
                />
              </div>

              <div className="password-section flex items-center gap-2 w-full">
                <label htmlFor="">Password</label>
                <input
                  className="p-3 rounded-lg w-full"
                  type="password"
                  name="password"
                  placeholder="*********"
                  value={payload.password}
                  onChange={handleChange}
                />
              </div>

              <button className="mt-4 bg-amber-500 py-2 px-8 rounded-lg text-sm ">
                Login
              </button>
              <div className="forgotp-password">
                <button>Forgot Password?</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
