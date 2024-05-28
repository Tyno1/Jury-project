import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full min-h-[100vh] bg-black pt-14 md:pt-20 flex gap-8 flex-col justify-center items-center">
      <p className="text-6xl text-amber-500 font-bold pt-14">Profile</p>
      <div className="container w-full flex flex-col gap-10 w-[50%] px-10 py-20 items-start rounded-3xl justify-center bg-stone-900">
        <div className="name flex flex-wrap gap-5 items-center w-full">
          <p className="text-amber-500 text-xl">Name:</p>
          <p className="text-white text-2xl">{user.user.fullName}</p>
        </div>
        <div className="name flex flex-wrap gap-5 items-center w-full">
          <p className="text-amber-500 text-xl">Username:</p>
          <p className="text-white text-2xl">{user.user.username}</p>
        </div>
        <div className="name flex flex-wrap gap-5 items-center w-full">
          <p className="text-amber-500 text-xl">Email:</p>
          <p className="text-white text-2xl text-wrap">{user.user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
