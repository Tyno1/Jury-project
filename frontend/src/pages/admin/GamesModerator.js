import React, { useContext } from "react";
import { IoMdStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";

const GamesModerator = () => {
  const { data, loading, error, refresh } = useFetch(
    "https://game-app-1.onrender.com/games/all"
  );
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDeleteGames = (gameId) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`https://game-app-1.onrender.com/games/${gameId}`, {
          headers: { Authorization: user?.token },
        })
        .then((res) => {
          resolve(res);
          refresh();
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  return (
    <div className="catalogue">
      <div className="game-container w-full min-h-[100vh] bg-stone-950 pt-6 md:pt-20">
        <div className="inner-container-1 m-10">
          <h2 className="font-bold text-4xl text-stone-100">Game Catalogue</h2>
          <p className="text-stone-100 mt-2">
            Reviews and Ratings are determined by Jury Users
          </p>
        </div>
        <div className="inner-container-1 mt-10 px-10 flex flex-col gap-4">
          {/* items */}
          {loading && <p>Loading...</p>}
          {error && <div className=""> {error.message} </div>}
          {data &&
            data.map((game) => (
              <div
                key={game._id}
                className="bg-stone-800 w-full p-4 flex gap-8 items-center justify-center rounded-xl"
              >
                <div className="image-container w-28 h-full rounded-lg">
                  <img
                    src={game?.imageUrl}
                    className="h-full w-full object-cover rounded-lg"
                    alt=""
                  />
                </div>
                <div className="item-details w-[100%] flex flex-col">
                  <div className="info flex flex-col gap-4">
                    <p className="text-stone-100 font-bold text-2xl overflow-hidden text-ellipsis whitespace-wrap">
                      {game?.name}
                    </p>
                    <p className="text-stone-100">
                      Available on:
                      <span className="border p-2 rounded-lg border-amber-500 mx-2">
                        {game.gamePlatform &&
                          game.gamePlatform.map((platform) => (
                            <span className="border p-2 rounded-lg border-amber-500 mx-2">
                              {platform}
                            </span>
                          ))}
                      </span>
                    </p>
                  </div>

                  <div className="rating mt-6 flex items-center gap-2">
                    <p className="text-stone-100 font-bold text-md">Ratings:</p>
                    <p className="item-info text-sm text-amber-500 flex pt-1 pb-2">
                      {game?.rating > 0
                        ? Array.from({ length: game.rating }).map(
                            (_, index) => <IoMdStar key={index} size={20} />
                          )
                        : "N/A"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/games/${game._id}`)}
                  className="bg-amber-500 p-2 rounded text-sm ml-auto"
                >
                  Reviews
                </button>
                <button
                  onClick={() => handleDeleteGames(game?._id)}
                  className="bg-red-500 text-white py-2 px-4 rounded text-sm ml-auto"
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GamesModerator;
