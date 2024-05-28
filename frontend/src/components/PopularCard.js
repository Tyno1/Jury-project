import React, { useContext } from "react";
import cardImg1 from "../images/314472.jpg";
import cardImg2 from "../images/1287842.jpg";
import cardImg3 from "../images/3524453-horizonforbiddenwest_20230426135735.jpg";
import cardImg4 from "../images/3485965-3025889629-F07tBOiWAAA6mu6.jpg";
import cardImg5 from "../images/702786-assassins-creed-3-wallpaper-1920x1080-for-pc.jpg";
import cardImg6 from "../images/Grand_Theft_Auto_V.png";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";


const PopularCard = () => {
  const {user} = useContext(AuthContext);

  return (
    <div className="popular-card h-[80vh] w-full bg-black mt-10 p-8 flex flex-col items-center">
      <h2 className="text-stone-100 text-3xl font-bold mb-6">Popular Games</h2>
      <div className="container h-[600px] w-full flex gap-4 mx-auto overflow-x-scroll whitespace-nowrap">
        {/* item 1 */}
        <div className="item-container h-[500px] w-[300px]">
          <Link to={user ? "/games" : "/login"}>
            <div className="img-cont h-[60%] w-full">
              <img
                className="w-full h-full object-cover object-center"
                src={cardImg1}
                alt=""
              />
            </div>
            <div className="item-detail mt-2 p-1 h-[40%] w-[300px] ">
              <p className="text-stone-300 font-bold text-md overflow-hidden text-ellipsis whitespace-nowrap">
                Call Of Duty: Modern Warfare 3 Lorem ipsum, dolor sit amet
                consectetur adipisicing.
              </p>
              <div className="flex flex-col">
                <p className="item-info text-sm text-amber-500 flex pt-1 pb-2">
                  <IoMdStar size={20} />
                  <IoMdStar size={20} />
                  <IoMdStar size={20} />
                </p>
                <button className="bg-amber-500 p-2 rounded text-sm">
                  Reviews
                </button>
              </div>
            </div>
          </Link>
        </div>
        {/* item 2 */}
        <div className="item-container h-[500px] w-[300px]">
          <Link to={user ? "/games" : "/login"}>
            <div className="img-cont h-[60%] w-full">
              <img
                className="w-full h-full object-cover object-center"
                src={cardImg2}
                alt=""
              />
            </div>
            <div className="item-detail mt-2 p-1 h-[40%] w-[300px] ">
              <p className="text-stone-300 font-bold text-md overflow-hidden text-ellipsis whitespace-nowrap">
                God of War Ragnarök
              </p>
              <div className="flex flex-col">
                <p className="item-info text-sm text-amber-500 flex pt-1 pb-2">
                  <IoMdStar size={20} />
                  <IoMdStar size={20} />
                  <IoMdStar size={20} />
                </p>
                <button className="bg-amber-500 p-2 rounded text-sm">
                  Reviews
                </button>
              </div>
            </div>
          </Link>
        </div>
        {/* item 3 */}
        <div className="item-container h-[500px] w-[300px]">
          <Link to={user ? "/games" : "/login"}>
            <div className="img-cont h-[60%] w-full">
              <img
                className="w-full h-full object-cover object-center"
                src={cardImg3}
                alt=""
              />
            </div>
            <div className="item-detail mt-2 p-1 h-[40%] w-[300px] ">
              <p className="text-stone-300 font-bold text-md overflow-hidden text-ellipsis whitespace-nowrap">
                Horizon Forbidden West
              </p>
              <div className="flex flex-col">
                <p className="item-info text-sm text-amber-500 flex pt-1 pb-2">
                  <IoMdStar size={20} />
                  <IoMdStar size={20} />
                  <IoMdStar size={20} />
                </p>
                <button className="bg-amber-500 p-2 rounded text-sm">
                  Reviews
                </button>
              </div>
            </div>
          </Link>
        </div>
        {/* item 4 */}
        <div className="item-container h-[500px] w-[300px]">
          <Link to={user ? "/games" : "/login"}>
            <div className="img-cont h-[60%] w-full">
              <img
                className="w-full h-full object-cover object-center"
                src={cardImg4}
                alt=""
              />
            </div>
            <div className="item-detail mt-2 p-1 h-[40%] w-[300px] ">
              <p className="text-stone-300 font-bold text-md overflow-hidden text-ellipsis whitespace-nowrap">
                EA Sports FC 24
              </p>
              <div className="flex flex-col">
                <p className="item-info text-sm text-amber-500 flex pt-1 pb-2">
                  <IoMdStar size={20} />
                  <IoMdStar size={20} />
                  <IoMdStar size={20} />
                </p>
                <button className="bg-amber-500 p-2 rounded text-sm">
                  Reviews
                </button>
              </div>
            </div>
          </Link>
        </div>
        {/* item 5 */}
        <div className="item-container h-[500px] w-[300px]">
          <Link to={user ? "/games" : "/login"}>
            <div className="img-cont h-[60%] w-full">
              <img
                className="w-full h-full object-cover object-center"
                src={cardImg5}
                alt=""
              />
            </div>
            <div className="item-detail mt-2 p-1 h-[40%] w-[300px] ">
              <p className="text-stone-300 font-bold text-md overflow-hidden text-ellipsis whitespace-nowrap">
                Assassin's Creed Mirage
              </p>
              <div className="flex flex-col">
                <p className="item-info text-sm text-amber-500 flex pt-1 pb-2">
                  <IoMdStar size={20} />
                  <IoMdStar size={20} />
                  <IoMdStar size={20} />
                </p>
                <button className="bg-amber-500 p-2 rounded text-sm">
                  Reviews
                </button>
              </div>
            </div>
          </Link>
        </div>
        {/* item 6 */}
        <div className="item-container h-[500px] w-[300px]">
          <Link to={user ? "/games" : "/login"}>
            <div className="img-cont h-[60%] w-full">
              <img
                className="w-full h-full object-cover object-center"
                src={cardImg6}
                alt=""
              />
            </div>
            <div className="item-detail mt-2 p-1 h-[40%] w-[300px] ">
              <p className="text-stone-300 font-bold text-md overflow-hidden text-ellipsis whitespace-nowrap">
                Grand Theft Auto V
              </p>
              <div className="flex flex-col">
                <p className="item-info text-sm text-amber-500 flex pt-1 pb-2">
                  <IoMdStar size={20} />
                  <IoMdStar size={20} />
                  <IoMdStar size={20} />
                </p>
                <button className="bg-amber-500 p-2 rounded text-sm">
                  Reviews
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
