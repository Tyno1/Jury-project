import React from "react";
import { IoMdSettings } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Features() {
  return (
    <div class="flex flex-wrap justify-center mt-5 gap-8 items-center bg-black text-amber-500">
      {/* <!-- card 1 --> */}
      <div class="max-w-sm h-72 flex w-60 p-6 flex-col justify-between text-stone-200">
        <div>
          <IoMdSettings className="dark:text-orange-300" size="25" />
          <h3 className="title text-sm py-2 font-bold">Large Catalogue</h3>
          <p className="text-sm">
            We have coalated a large database of games on several platforms
          </p>
        </div>
        <div>
          <Link
            to="/about"
            className="text-sm cursor flex gap-4 justify-between dark:text-orange-300 "
          >
            <button>Read more...</button>
            <FaArrowRight />
          </Link>
        </div>
      </div>
      {/* <!-- card 2 --> */}
      <div class="max-w-sm h-72 flex w-60 p-6 flex-col justify-between text-stone-200">
        <div>
          <IoMdSettings className="text-orange-300"  size="25" />
          <h3 className="title text-sm py-2 font-bold">Honnest Reviews</h3>
          <p className="text-sm">
            All reviews are fully organic and contain no bot comments/entries
          </p>
        </div>
        <div>
          <Link
            to="/about"
            className="text-sm cursor flex gap-4 justify-between dark:text-orange-300"
          >
            <button>Read more...</button>
            <FaArrowRight />
          </Link>
        </div>
      </div>

      {/* <!-- card 3 --> */}
      <div class="max-w-sm h-72 flex w-60  p-6 flex-col justify-between text-stone-200">
        <div>
          <IoMdSettings className="text-orange-300"  size="25" />
          <h3 className="title text-sm py-2 font-bold">24/7 Support</h3>
          <p className="text-sm">
            The support team are always online and ready to offer support and guidance
          </p>
        </div>
        <div>
          <Link
            to="/about"
            className="text-sm cursor flex gap-4 justify-between dark:text-orange-300"
          >
            <button>Read more...</button>
            <FaArrowRight />
          </Link>
        </div>
      </div>

      {/* <!-- card 4 --> */}
      <div class="max-w-sm h-72 flex w-60  p-6 flex-col justify-between text-stone-200">
        <div>
          <IoMdSettings className="text-orange-300"  size="25" />
          <h3 className="title text-sm py-2 font-bold">Globally Certified</h3>
          <p className="text-sm text-stone-">
            We are globally certified to collect and display reviews for videogames 
          </p>
        </div>
        <div>
          <Link
            to="/about"
            className="text-sm cursor flex gap-4 justify-between dark:text-orange-300"
          >
            <button>Read more...</button>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
