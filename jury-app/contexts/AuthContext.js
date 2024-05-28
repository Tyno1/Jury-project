import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [defaultUserType, setDefaultUserType] = useState(null);
  const router = useRouter();

  const login = ({ email, password }) => {
    return new Promise((resolve, reject) => {
      axios
        .post("https://game-app-1.onrender.com/users/login", {
          email,
          password,
        })
        .then((res) => {
          resolve(res);
          AsyncStorage.setItem("user", JSON.stringify(res.data));
          setUser(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  const register = (data) => {
    return new Promise((resolve, reject) => {
      axios
        .post("https://game-app-1.onrender.com/users/signup", data)
        .then((res) => {
          resolve(res);
          setUser(res.data);
          
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const logout = async () => {
    try {
      router.replace("/login");
      await AsyncStorage.removeItem("user");
      setUser(null);
      // Redirect to login screen after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // const fetchUserTypes = () => {
  //   // console.log(defaultUserType);
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .get("http://localhost:3000/userTypes/all")
  //       .then((res) => {
  //         resolve(res);
  //         setDefaultUserType(
  //           res.data.find((d) => d.name.toLowerCase() === "user")
  //         );
  //       })
  //       .catch((err) => {
  //         reject(err);
  //       });
  //   });
  // };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const savedUser = await AsyncStorage.getItem("user");
        if (savedUser) {
          setUser(JSON.parse(savedUser));
          router.push("/(tabs)/profile");
        }
      } catch (error) {
        console.error("Error retrieving user data from AsyncStorage:", error);
      }
    };

    getUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, register, user, defaultUserType, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
