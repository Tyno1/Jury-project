import React, { useContext, useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Review from "../components/Reviews";
import { AuthContext } from "../contexts/AuthContext";
import { LocationContext } from "../contexts/locationContext";
import { ReviewContext } from "../contexts/reviewContext";
import useFetch from "../hooks/useFetch";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#f59e0b",
};

const GameDetail = () => {
  const { id } = useParams();
  const { getLocation, address, coords } = useContext(LocationContext);
  const { user } = useContext(AuthContext);

  const { sendReview } = useContext(ReviewContext);

  const [payload, setPayload] = useState({
    userId: user?.user?._id,
    location: null,
    gameId: id,
    comment: "",
    rating: "",
  });

  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_BACKEND_SERVER_URL}/games/` + id
  );

  const {
    data: reviews,
    loading: reviewLoading,
    error: reviewError,
    refresh,
  } = useFetch(
    `${process.env.REACT_APP_BACKEND_SERVER_URL}/reviews/game/` + id
  );

  useEffect(() => {}, []);

  const handleChange = (e) => {
    if (e.target.tagName.toLowerCase() === "textarea") {
      setPayload({ ...payload, [e.target.name]: e.target.value });
    } else if (e.target.tagName.toLowerCase() === "select") {
      setPayload({ ...payload, [e.target.name]: parseInt(e.target.value, 10) });
    }

    getLocation();
  };

  const handlePostReview = (e) => {
    e.preventDefault();

    if (payload.rating === 0) {
      toast("Please rate the game", { hideProgressBar: true });
      return;
    }
    if (payload.comment.trim().length === 0) {
      toast("Please enter a comment", { hideProgressBar: true });
      return;
    }

    const newPayload = {
      ...payload,
      location: {
        address: `${address.address.suburb}, ${address.address.country}`,
        latitude: coords[0],
        longitude: coords[1],
      },
    };
    if (newPayload) {
      sendReview(newPayload)
        .then((res) => {
          refresh();
        })
        .catch((error) => {
          toast.error(error.message, { hideProgressBar: true });
          console.error(error);
        });
    }
  };

  return (
    <div className="review-page w-full">
      {loading && (
        <ClipLoader
          color="amber-500"
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}{" "}
      {error && <div> {error}</div>}
      {data && (
        <div className="w-full min-h-[100vh] bg-stone-950 pt-14 md:pt-20 flex flex-col">
          <div className="game-details p-8 flex flex-row gap-10 h-full w-full">
            <div className="image-container hidden md:flex w-[30%] h-[500px]">
              <img
                className="w-full h-full object-fit object-cover"
                src={data?.imageUrl}
                alt="game image"
              />
            </div>
            <div className="text-container w-[70%] flex-1 flex flex-col gap-6">
              <h2 className="game-name text-stone-100 font-bold text-6xl overflow-hidden text-ellipsis whitespace-wrap">
                {data.name}
              </h2>

              <p className="text-stone-100">
                Available on:
                <span className="border p-2 rounded-lg border-amber-500 mx-2">
                  {data.gamePlatform &&
                    data.gamePlatform.map((platform) => (
                      <span className="border p-2 rounded-lg border-amber-500 mx-2">
                        {platform}
                      </span>
                    ))}
                </span>
              </p>

              <div className="rating mt-6 flex items-center gap-2">
                <p className="text-stone-100 font-bold text-md">Ratings:</p>
                <p className="item-info text-sm text-amber-500 flex pt-1 pb-2">
                  {data?.rating > 0
                    ? Array.from({ length: data.rating }).map((_, index) => (
                        <IoMdStar key={index} size={20} />
                      ))
                    : "N/A"}
                </p>
              </div>

              <div className="about text-stone-100 pt-6 text-justify">
                {data.description}
              </div>
            </div>
          </div>

          <div className="reviews-section p-8 w-full">
            <h2 className="review-title font-bold text-4xl text-stone-100 mb-10">
              Reviews
            </h2>
            <div className="reviews-list">
              {reviews && reviews.length > 0 ? (
                <Review
                  reviews={reviews}
                  reviewLoading={reviewLoading}
                  reviewError={reviewError}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-white font-bold fo">No reviews found</p>
                </div>
              )}
            </div>
          </div>

          <div className="add-review p-8">
            <form
              className="w-full md:w-[80%] items-center mx-auto flex flex-col p-10 gap-8"
              onSubmit={handlePostReview}
            >
              <div className="rating w-full flex flex-col gap-4">
                <label className="text-stone-100 text-2xl"> Comment</label>
                <textarea
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl min-h-40"
                  type="text"
                  name="comment"
                  value={payload.comment}
                />
              </div>

              <div className="flex flex-col md:flex-row items-end w-full gap-4">
                <div className="rating w-full flex flex-col gap-4">
                  <label className="text-stone-100 text-2xl">Rating</label>
                  <select
                    onChange={handleChange}
                    value={payload.rating}
                    className="w-40 p-4 rounded-xl"
                    name="rating"
                  >
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                  </select>
                </div>

                <button className="mt-4 bg-amber-500 h-14 w-60  rounded-lg text-sm ">
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameDetail;
