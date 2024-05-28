import React, { createContext, useEffect, useState } from "react";
import * as Location from "expo-location";
import axios from "axios";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let locationData = await Location.getCurrentPositionAsync({});
      setLocation([
        locationData.coords.latitude,
        locationData.coords.longitude,
      ]);
    } catch (error) {
      console.error("Error getting location:", error);
      setErrorMsg("Error getting location");
    }
  };

  const getAddress = () => {
    if (location.length === 2) {
      const url = `https://geocode.maps.co/reverse?lat=${location[0]}&lon=${location[1]}&api_key=65fa7110e8e2d400557410byua6b143`;

      axios
        .get(url)
        .then((response) => {
          setAddress(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (location.length === 2) {
      getAddress();
    }
  }, [location]);

  return (
    <LocationContext.Provider value={{ getLocation, address, getAddress, location }}>
      {children}
    </LocationContext.Provider>
  );
};
