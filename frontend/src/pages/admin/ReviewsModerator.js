import React, { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import { IoMdStar } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Profile1 from "../../images/profile_1.jpeg";
import { ReviewContext } from "../../contexts/reviewContext";
import Filter from "bad-words";

const ReviewsModerator = () => {
  const filter = new Filter();
  const { data, loading, error, refresh } = useFetch(
    `${process.env.REACT_APP_BACKEND_SERVER_URL}/reviews/all`
  );

  const { deleteReview } = useContext(ReviewContext);

  const handleDelete = async (reviewId) => {
    try {
      await deleteReview(reviewId);
      refresh();
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };
  console.log(data);

  return (
    <div className="flex flex-col gap-14 p-20">
      {loading && <div> ...loadiing</div>}
      {error && <div> {error}</div>}
      {data &&
        data.map((review) => ( 
          <div className="flex flex-col gap-4">
            <div className="text-white font-bold text-xl">
              <span className="text-amber-500"> Review for - </span>
              {review?.gameId?.name}
            </div>
            <div className="user-details flex flex-row text-stone-100">
              <div className="name-location-image flex items-center gap-6">
                <div className="user-image w-14 h-14 rounded-3xl">
                  <img
                    className="rounded-3xl w-full h-full object-fit object-cover"
                    src={Profile1}
                    alt=""
                  />
                </div>
                <div className="name-and-location flex flex-col">
                  <div className="user-name text-stone-100 text-lg font-bold">
                    {review.userId.username}
                  </div>
                  <div className="location flex gap-2 items-center ">
                    <p className="text-yellow-500">
                      <FaLocationDot />
                    </p>
                    <p className="text-stone-400 text-sm">
                      {review.location.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rating mt-6 flex items-center gap-2 ml-auto">
                <p className="text-stone-100 font-bold text-md">Ratings:</p>
                <p className="item-info text-sm text-amber-500 flex pt-1 pb-2">
                  {[...Array(review.rating)].map((_, index) => (
                    <IoMdStar key={index} size={20} />
                  ))}
                </p>
                <div className="ml-10">
                  <button
                    onClick={() => handleDelete(review._id)}
                    className="bg-amber-500 text-black px-5 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>

            <div className="comment text-stone-100 text-justify">
              {filter.isProfane(review.comment) ? (
                <div className="flex flex-col items-start">
                  <span className="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                    Might contain bad word
                  </span>
                  {review.comment}
                </div>
              ) : (
                review.comment
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ReviewsModerator;
