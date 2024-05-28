import React, { useContext } from "react";
import { GiGamepad } from "react-icons/gi";
import { ImUsers } from "react-icons/im";
import { MdRateReview } from "react-icons/md";
import { AuthContext } from "../../contexts/AuthContext";
import useFetch from "../../hooks/useFetch";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const {
    data: games,
    loading: gamesLoading,
    error: gamesError,
  } = useFetch("https://game-app-1.onrender.com/games/all");

  const {
    data: reviews,
    loading: reviewsLoading,
    error: reviewsError,
  } = useFetch("https://game-app-1.onrender.com/reviews/all");

  const {
    data: users,
    loading: usersLoading,
    error: usersError,
  } = useFetch("https://game-app-1.onrender.com/users/all");

  return (
    <div className="dash-container min-h-[100vh] w-full text-stone-100 flex-1 flex flex-row">
      <div className="right-section bg-black h-full w-[100%] flex-1 p-10">
        <div className="top-section w-full h-[100px]">
          <h2 className="text-lg">Welcome,</h2>
          <h2 className="text-4xl font-bold"> {user?.user?.fullName}</h2>
        </div>
        <div className="bottom-section w-full h-full flex flex-col gap-10">
          <div className="flex flex-wrap gap-10">
            <div className="box-1 bg-stone-800 min-w-[250px] h-[200px] flex-1 rounded-xl p-4 flex flex-row items-center justify-between">
              <div className="flex flex-col items-start justify-center gap-2">
                <p className="text-lg">Game Catalogue Count</p>
                <p className="font-bold text-amber-600  text-8xl">
                  {games.length}
                </p>
              </div>
              <GiGamepad size={100} />
            </div>
            <div className="box-2 bg-stone-800 min-w-[250px] h-[200px] flex-1 rounded-xl p-4 flex flex-row items-center justify-between">
              <div className="flex flex-col items-start justify-center gap-2">
                <p className="text-lg">Reviews Count</p>
                <p className="font-bold text-amber-600  text-8xl">
                  {reviews.length}
                </p>
              </div>
              <MdRateReview size={100} />
            </div>
            <div className="box-3 bg-stone-800 min-w-[250px] h-[200px] flex-1 rounded-xl p-4 flex flex-row items-center justify-between">
              <div className="flex flex-col items-start justify-center gap-2">
                <p className="text-lg">Users Count</p>
                <p className="font-bold text-amber-600  text-8xl">
                  {users.length}
                </p>
              </div>
              <ImUsers size={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
