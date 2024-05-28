import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useContext, useEffect, useState } from "react";
import { ReviewContext } from "../../contexts/reviewContext";

const UsersLocator = ({ user }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCEGJqKrlZQGm_jgtOTWjoeFVdD-zBH2pg",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [zoom, setZoom] = useState(3);
  const { reviews } = useContext(ReviewContext);
  const [review, setReview] = useState();

  const updateMap = () => {
    setCoordinates(user?.location);
  };

  const setCoordinates = (coordinates) => {
    if (coordinates) {
      setCenter({
        lat: Number(coordinates?.latitude),
        lng: Number(coordinates?.longitude),
      });
      setZoom(6);
    }
  };

  console.log(reviews);

  useEffect(() => {
    updateMap();
  }, []);

  return (
    <div style={{ height: "70vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "flex-start",
            pb: 5,
          }}
        >
          <h2 as="h2">Map</h2>
          <p>View location of reviews</p>
        </div>
      </div>
      <hr />
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={zoom}
        >
          {reviews?.length > 0 &&
            reviews?.map((review, i) => (
              <MarkerF
                title={review?.comment}
                key={i}
                onClick={(e) => setReview(review)}
                position={{
                  lat: Number(review?.location?.latitude),
                  lng: Number(review?.location?.longitude),
                }}
              />
            ))}
        </GoogleMap>
      )}

      <div
        id="static-modal"
        data-modal-backdrop="static"
        tabindex="-1"
        aria-hidden="true"
        className={`${
          !review ? "hidden" : ""
        } overflow-y-auto overflow-x-hidden fixed top-20 right-20 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold dark:text-white">
                Comment informtion
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="static-modal"
                onClick={() => setReview()}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              Title: {review?.comment} <br />
              Game: {review?.gameId?.name} <br />
              Location: {review?.location?.address} <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersLocator;
