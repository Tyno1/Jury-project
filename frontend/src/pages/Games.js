import React from "react";
import { IoMdStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Games = () => {
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_BACKEND_SERVER_URL}/games/all`
  );
  const navigate = useNavigate();
  return (
    <div className="catalogue">
      <div className="game-container w-full min-h-[100vh] bg-black pt-12 md:pt-20">
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
                className="bg-stone-950 w-full p-4 flex gap-8 items-center justify-center rounded-xl"
              >
                <div className="image-container hidden md:flex w-28 h-full rounded-lg">
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
                    <p className="text-stone-100 text-[10px] md:text-sm leading-[3rem]">
                      <span className="hidden md:flex leading-[3rem]">
                        Available on:
                      </span>
                      <span className="">
                        {game.gamePlatform &&
                          game.gamePlatform.map((platform) => (
                            <span
                              id={platform.index}
                              className="border p-2 rounded-lg border-amber-500 mr-1"
                            >
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
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Games;
