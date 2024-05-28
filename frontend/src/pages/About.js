import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full min-h-[100vh] bg-black pt-6 md:pt-20 flex flex-col">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8 text-amber-500">About Jury</h1>
        <p className="text-lg leading-relaxed mb-8 text-white">
          Jury is a leading game review company dedicated to providing gamers
          with honest and comprehensive reviews of the latest video games. Our
          team of experienced gamers and industry experts carefully evaluate
          each game across various platforms, including PC, console, and mobile,
          to deliver insightful and unbiased reviews.
        </p>
        <p className="text-lg leading-relaxed mb-8 text-white">
          At Jury, we understand the importance of transparent and trustworthy
          reviews in helping gamers make informed decisions about which games to
          play. That's why we adhere to strict ethical standards and never
          accept compensation or incentives from game developers or publishers
          to influence our reviews.
        </p>
        <p className="text-lg leading-relaxed mb-8 text-white">
          Our mission is to empower gamers with the knowledge they need to
          discover and enjoy the best games available. Whether you're looking
          for in-depth analysis, gameplay impressions, or recommendations, Jury
          is your go-to source for reliable game reviews.
        </p>
        <div className="flex justify-center">
          <Link
            to="/contact"
            className="bg-amber-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
