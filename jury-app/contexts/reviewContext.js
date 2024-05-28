import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState(null);
  const [postResp, setPostResp] = useState(null);
  const { user } = useContext(AuthContext);


  const sendReview = (payload) => {
    return new Promise((resolve, reject) => {
      axios
        .post("https://game-app-1.onrender.com/reviews", payload)
        .then((res) => {
          resolve(res);
          setPostResp(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const getReview = () => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://game-app-1.onrender.com/reviews/all")
        .then((res) => {
          resolve(res);
          setReviews(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
// confirm this is correct
  // const getReviewByGameId = () => {
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .get(`http://localhost:3000/reviews/game/${gameId}`)
  //       .then((res) => {
  //         resolve(res);
  //         setReviews(res.data);
  //       })
  //       .catch((err) => {
  //         reject(err);
  //       });
  //   });
  // };


  return (
    <ReviewContext.Provider value={{ getReview, sendReview }}>
      {children}
    </ReviewContext.Provider>
  );
};
