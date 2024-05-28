import { FaLocationDot } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";

const Review = ({ reviews, reviewLoading, reviewError }) => {
  return (
    <div className="flex flex-col gap-10">
      {reviewLoading && <div> ...loading</div>}
      {reviewError && <div> There's an error</div>}
      {reviews &&
        reviews.map((review) => (
          <div className="flex flex-col gap-4">
            <div className="user-details flex flex-row text-stone-100">
              <div className="name-location-image flex items-center gap-6">
                <div className="user-image w-14 h-14 rounded-3xl">
                  <img
                    className="rounded-3xl w-full h-full object-fit object-cover"
                    src={review?.gameId?.imageUrl}
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
                <p className="text-stone-100 font-bold text-md hidden md:inline">Ratings:</p>
                <p className="item-info text-sm text-amber-500 flex pt-1 pb-2">
                  {[...Array(review.rating)].map((_, index) => (
                    <IoMdStar key={index} size={20} />
                  ))}
                </p>
              </div>
            </div>

            <div className="comment text-stone-100 text-justify">
              {review.comment}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Review;
