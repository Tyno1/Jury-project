import { useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { MdClose } from "react-icons/md";

function useDisclosure(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return {
    isOpen,
    onOpen,
    onClose,
  };
}

const MyMap = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(false); // Using the custom hook
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_API_KEY,
  });
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [zoom, setZoom] = useState(3);

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

  useEffect(() => {
    updateMap();
  }, []);

  return (
    <div className="App">
      <div className="flex justify-between items-center pr-1">
        <div className="mt-0 flex flex-col flex-1 items-start pb-5">
          <h2 className="text-lg">Map</h2>
          <p className="text-sm">View location of prospective students</p>
        </div>
      </div>
      <hr className="border-t border-gray-400" />
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={zoom}
        >
          <Marker
            onClick={onOpen}
            position={{
              lat: Number(user?.location?.latitude),
              lng: Number(user?.location?.longitude),
            }}
          />
        </GoogleMap>
      )}
      {/* Using isOpen state from useDisclosure hook */}
      <div className={`Modal ${isOpen ? "block" : "hidden"}`} onClick={onClose}>
        <div className="header" paddingBottom={0} paddingTop={-5} paddingLeft={5}>
          <div className="flex justify-between">
            <button className="button" padding={2} onClick={onClose}>
              <MdClose />
            </button>
          </div>
        </div>
        <div className="body" padding={0} marginTop={-20} background="#fff"></div>
      </div>
    </div>
  );
};

export default MyMap;
