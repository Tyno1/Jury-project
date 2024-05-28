import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState(null);
  const [postResp, setPostResp] = useState(null);
  const { user } = useContext(AuthContext);

  const sendReview = ({ location, gameId, comment, rating }) => {
    return new Promise((resolve, reject) => {
      axios
        .post("https://game-app-1.onrender.com/reviews", {
          userId: user.user._id,
          location,
          gameId,
          comment,
          rating,
        })
        .then((res) => {
          resolve(res);
          setPostResp(res.data);
          // console.log(setPostResp);
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

  const deleteReview = (reviewId) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`https://game-app-1.onrender.com/reviews/${reviewId}`)
        .then((res) => {
          resolve(res);
          // Optionally update the reviews state to reflect the deletion
          setReviews(reviews.filter((review) => review._id !== reviewId));
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

  useEffect(() => {
    getReview();
  }, []);

  return (
    <ReviewContext.Provider
      value={{ getReview, sendReview, deleteReview, reviews }}
    >
      {children}
    </ReviewContext.Provider>
  );
};
