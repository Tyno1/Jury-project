import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../images/593333.jpg";
import { FiChevronsRight } from "react-icons/fi";

export default function Hero() {
  const bgImgStyle = {
    backgroundImage: `url(${heroImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className="hero w-full h-[100vh] overflow-hidden pt-6 md:pt-20 mb-20 flex items-center justify-between"
      style={bgImgStyle}
    >
      <div className="hero-text bottom-40 w-[70%] text-center flex flex-col items-center mx-auto mt-80">
        <p
          className="text-stone-200 tracking-wide text-3xl md:text-6xl"
          style={{ fontFamily: "Zen Dots" }}
        >
          We Are The Judge and Jury For Video Games
        </p>
        <p className="text-white  tracking-wide mt-4 text-sm md:text-sm w-[80%]">
          We are a community of passionate gamers giving our opinions and
          honnest reviews about Video Games because we know how it feels to
          waste hours playing an overhyped game. Check The Rating & Reviews
          before you begin that journey
        </p>
        <button className="mt-4 bg-amber-500 py-2 px-8 rounded-lg text-sm ">
          <Link to="/games" className="flex items-center gap-2">
            <p>Check out Reviews</p> <FiChevronsRight size={25} />
          </Link>
        </button>
      </div>
    </div>
  );
}
