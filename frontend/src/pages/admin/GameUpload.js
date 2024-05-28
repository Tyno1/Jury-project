import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";

const GameUpload = () => {
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    name: "",
    description: "",
    imageUrl: null,
    rating: 0,
    gamePlatform: [],
  });
  const { user } = useContext(AuthContext);

  const handleChange = (e) => {
    if (e.target.name === "gamePlatform") {
      const selectedOptions = Array.from(e.target.options)
        .filter((option) => option.selected)
        .map((option) => option.value);
      setPayload({ ...payload, [e.target.name]: selectedOptions });
    } else if (e.target.name.toLowerCase() === "rating") {
      setPayload({ ...payload, [e.target.name]: parseInt(e.target.value, 10) });
    } else if (e.target.name === "imageUrl") {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const newPayload = { ...payload, imageUrl: fileReader.result };
        console.log("New Payload:", newPayload); // Check if imageUrl is set correctly
        setPayload(newPayload);
      };

      if (e.target.files[0]) {
        fileReader.readAsDataURL(e.target.files[0]);
      }
    } else {
      setPayload({ ...payload, [e.target.name]: e.target.value });
    }
  };
  const handleGameUpload = (e) => {
    e.preventDefault();

    if (payload) {
      axios
        .post("https://game-app-1.onrender.com/games", payload, {
          headers: { Authorization: user?.token },
        })
        .then((res) => {
          navigate("/admin/games-mod");
        })
        .catch((error) => {
          toast.error(error.message, { hideProgressBar: true });
          console.error(error);
        });
    }
  };

  return (
    <div className="w-full min-h-[10vh] bg-black pt-6 md:pt-20 flex flex-col items-center text-black">
      <div className="mb-10">
        <h2 className="text-3xl text-stone-100 ">Game Upload</h2>
      </div>
      <form
        onSubmit={handleGameUpload}
        className="text-stone-100 w-[70%] flex flex-col gap-10 items-start mx-auto"
      >
        <div className="name flex flex-col w-full">
          <label>Game Name</label>
          <input
            onChange={handleChange}
            name="name"
            value={payload.name}
            className="w-full p-4 text-black rounded-xl"
            required
          />
        </div>

        <div className="description flex flex-col w-full">
          <label>Description</label>
          <textarea
            onChange={handleChange}
            name="description"
            value={payload.description}
            className="w-full p-4 text-black rounded-xl"
            required
          />
        </div>

        <div className="image flex flex-col w-full">
          <label>Image</label>
          <input
            type="file"
            id="fileInput"
            accept="image/png, image/jpeg, image/jpg, image/jfif"
            onChange={handleChange}
            name="imageUrl"
            className="w-full"
            required
          />
        </div>

        <div className="platform flex flex-col">
          <label>Game Platform</label>
          <select
            onChange={handleChange}
            name="gamePlatform"
            value={payload.gamePlatform}
            multiple
            className="p-2 rounded-lg text-stone-900"
            required
          >
            <option value="PC">PC</option>
            <option value="PS 5">PS5</option>
            <option value="PS">PS4</option>
            <option value="xbox">Xbox</option>
            <option value="Mobile">Xbox</option>
          </select>
        </div>
        <button className="py-4 px-8 bg-amber-500 rounded-xl text-black font-medium">Upload Game</button>
      </form>
    </div>
  );
};

export default GameUpload;
