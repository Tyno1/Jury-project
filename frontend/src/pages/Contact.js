import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function Contact() {
  return (
    <div className="contact pt-28">
      <div className="max-w-screen-2xl w-[80%] mt-4 border-0 min-h-[100vh] mx-auto p-5 mb-10">
        <div className="flex justify-between flex-col">
          <div className="p-10">
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-white">
              Get In <span className="text-amber-500">Touch</span>
            </h3>
            <p className="mt-4 leading-7 text-gray-100 text-justify">
              Feel free to use the contact form to send us a message directly.
              We'll do our best to respond to your inquiry promptly.
            </p>

            <div className="flex items-center mt-5 text-white">
              <IoLocation size={20} style={{ marginRight: "20px" }} />
              <span className="text-sm">Lagos, Nigeria </span>
            </div>
            <div className="flex items-center mt-5 text-white">
              <FaPhoneAlt size={20} style={{ marginRight: "20px" }} />
              <span className="text-sm">+93 749 99 65 50</span>
            </div>
            <div className="flex items-center mt-5 text-white">
              <MdOutlineSupportAgent
                size={25}
                style={{ marginRight: "20px" }}
              />
              <span className="text-sm">24/7 support</span>
            </div>
          </div>
          <form className="md:col-span-8 p-10">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring focus:ring-orange-300 focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                  required
                />
                <p className="text-orange-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-orange-300 "
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-orange-300 "
                  id="grid-email"
                  type="email"
                  placeholder="********@*****.**"
                  required
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Your Message
                </label>
                <textarea
                  required
                  rows="10"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-orange-300 "
                ></textarea>
              </div>
              <div className="flex justify-between w-full px-3">
                <div className="md:flex md:items-center">
                  <label className="block text-gray-500 text-sm font-bold">
                    <input className="mr-2 leading-tight" type="checkbox" />
                    <span className="text-sm">Send me your newsletter!</span>
                  </label>
                </div>
                <button
                  className="hidden items-center border-2 border-orange-300 justify-center rounded-lg bg-amber-500 px-3 py-2 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-orange-300 transition-all duration-150 hover:bg-teal-700 sm:inline-flex"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
