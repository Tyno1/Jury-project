import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const savedUser = localStorage.getItem("user");
  const parsedUser = JSON.parse(savedUser);
  const [user, setUser] = useState(parsedUser);
  const [defaultUserType, setDefaultUserType] = useState(null);
  const [decodedToken, setDecodedToken] = useState();

  const login = ({ email, password }) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${process.env.REACT_APP_BACKEND_SERVER_URL}/users/login`, {
          email,
          password,
        })
        .then((res) => {
          // resolve(res);
          const decoded = decodeToken(res.data.token);
          setDecodedToken(decoded);
          localStorage.setItem("user", JSON.stringify(res.data));
          setUser(res.data);

          if (decoded?.userType?.name === "USER") {
            window.location.replace("/");
          } else {
            window.location.replace("/admin/dashboard");
          }
        })
        .catch((err) => {
          if (err.response && err.response.status === 401) {
            // Unauthorized error, handle it
            reject("Invalid email or password"); // Reject with custom error message
            toast.error("Invalid email or password", { hideProgressBar: true });
          } else {
            // Other error, reject with the actual error
            reject(err);
          }
        });
    });
  };

  const decodeUserToken = () => {
    const decoded = decodeToken(user?.token);

    return decoded;
  };

  const register = (data) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${process.env.REACT_APP_BACKEND_SERVER_URL}/users/signup`, data)
        .then((res) => {
          resolve(res);
          setUser(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  useEffect(() => {
    if (!user) {
      // window.
    }
  }, []);

  const fetchUserTypes = () => {
    // console.log(defaultUserType);
    return new Promise((resolve, reject) => {
      axios
        .get(`${process.env.REACT_APP_BACKEND_SERVER_URL}userTypes/all`)
        .then((res) => {
          resolve(res);
          setDefaultUserType(
            res.data.find((d) => d.name.toLowerCase() === "user")
          );
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const logout = () => {
    localStorage.clear();
    window.location.replace("/login");
  };

  useEffect(() => {
    // fetchUserTypes();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        register,
        user,
        defaultUserType,
        decodedToken,
        decodeUserToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
