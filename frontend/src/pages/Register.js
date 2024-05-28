import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import heroImg from "../images/593333.jpg";
import LoginImg from "../images/tate-lohmiller-tH26UyDSfEU-unsplash.jpg";

const Register = () => {
  const { register, defaultUserType } = useContext(AuthContext);
  const [confirmPassword, setConfirmPassword] = useState();
  const [payload, setPayload] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
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

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    let _payload = { ...payload };
    if (payload.password === confirmPassword) {
      // Passwords match, proceed with form submission
      // console.log("Passwords match!");

      if (_payload) {
        register(_payload)
          .then((res) => {
            // console.log(res);
            toast.success(res.data, { hideProgressBar: true });
            navigate("/login");
          })
          .catch((error) => {
            toast.error(error.message, { hideProgressBar: true });
            console.error(error);
          });
      }
      // Add your form submission logic here
    } else {
      // Passwords don't match, show an error or take appropriate action
      toast.error("Passwords do not match", { hideProgressBar: true });
      console.error("Passwords do not match");
    }
  };

  return (
    <div className="min-h-[100vh] w-full" style={bgStyle}>
      <div
        className="bg-container w-full h-full pt-6 md:pt-20"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.7 )" }}
      >
        <div className="container flex mx-auto mt-20 bg-white min-h-[500px] w-full md:w-[70%] rounded-xl">
          <div className="left-section hidden md:flex w-[45%]">
            <div className="left-section w-[45%] flex-1 h-full hidden md:flex object-cover object-center">
              <img
                className="object-cover object-center w-full h-full"
                src={LoginImg}
                alt=""
              />
            </div>
          </div>
          <div className="right-section w-[55%] flex-1 bg-gray-100 p-8 flex flex-col gap-8 items-center h-full">
            <h2 className="font-bold text-4xl">Register</h2>
            <form
              className="flex flex-col items-end gap-4 w-full"
              onSubmit={handleRegister}
            >
              <div className="Name-section flex items-center gap-2 flex-wrap w-full">
                <div className="w-full">
                  <label className="text-lg" htmlFor="">
                    Fisrt Name
                  </label>
                  <input
                    name="firstName"
                    onChange={handleChange}
                    value={payload.firstName}
                    className="p-3 rounded-lg w-full"
                    type="text"
                    placeholder="Joe"
                  />
                </div>

                <div className="w-full">
                  <label className="text-lg" htmlFor="">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    onChange={handleChange}
                    value={payload.lastName}
                    className="p-3 rounded-lg w-full"
                    type="text"
                    placeholder="Godons"
                  />
                </div>
              </div>

              <div className="userName-section flex items-center gap-2 w-full flex-wrap">
                <label className="text-lg" htmlFor="">
                  Username
                </label>
                <input
                  name="username"
                  onChange={handleChange}
                  value={payload.username}
                  className="p-3 rounded-lg w-full"
                  type="text"
                  placeholder="GoJoe203"
                />
              </div>

              <div className="email-section flex items-center gap-2 w-full flex-wrap">
                <label className="text-lg" htmlFor="">
                  Email
                </label>
                <input
                  name="email"
                  onChange={handleChange}
                  value={payload.email}
                  className="p-3 rounded-lg w-full"
                  type="email"
                  placeholder="joe@mail.com"
                />
              </div>

              <div className="password-section flex items-center gap-2 w-full flex-wrap">
                <div className="1st-pass w-full">
                  <label htmlFor="">Password</label>
                  <input
                    name="password"
                    onChange={handleChange}
                    value={payload.password}
                    className="p-3 rounded-lg w-full"
                    type="password"
                    placeholder="*********"
                  />
                </div>
                <div className="2nd-pass w-full">
                  <label htmlFor="">Confirm Password</label>
                  <input
                    name="password"
                    onChange={handleConfirmPassword}
                    value={confirmPassword}
                    className="p-3 rounded-lg w-full"
                    type="password"
                    placeholder="*********"
                  />
                </div>
              </div>

              <button className="mt-4 bg-amber-500 py-2 px-8 rounded-lg text-sm ">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
