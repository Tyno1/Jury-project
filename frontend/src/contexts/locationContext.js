import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [coords, setCoords] = useState([]);
  const [address, setAddress] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      // console.log("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position) => {
    // setIsLoading(true);
    const currentCoords = [position.coords.latitude, position.coords.longitude];
    setCoords(currentCoords);
  };

  const getAddress = () => {
    const url = `https://geocode.maps.co/reverse?lat=${coords[0]}&lon=${coords[1]}&api_key=65fa7110e8e2d400557410byua6b143`;

    axios
      .get(url)
      .then((response) => {
        setAddress(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (coords.length === 2) {
      getAddress();
    }
  }, [coords]);

  return (
    <LocationContext.Provider value={{ getLocation, coords, address }}>
      {children}
    </LocationContext.Provider>
  );
};
