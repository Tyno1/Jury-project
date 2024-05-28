import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="">
      <div className="mx-auto w-full px-4 py-16 sm:px-6 lg:px-8 text-stone-400 bg-black">
        <div className="flex flex-col items-center gap-4 rounded-lg bg-amber-500 p-6 shadow-lg sm:flex-row sm:justify-between">
          <strong className="text-xl sm:text-xl text-stone-50">
            Stay Up to date with The Jury
          </strong>

          <Link
            className="inline-flex items-center gap-2 rounded-full border border-white bg-stone-50 px-8 py-2 text-stone-900 hover:bg-transparent hover:text-white focus:outline-none active:bg-white/90 active:text-teal-600"
            to="/contact"
          >
            <span className="text-sm font-medium"> Let's Get Started</span>
            <MdOutlineArrowRightAlt size={35} />
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium">About Us</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link className="transition" to="/">
                  Company History
                </Link>
              </li>

              <li>
                <Link className="transition" to="/">
                  Meet the Team
                </Link>
              </li>

              <li>
                <Link className="transition" to="/">
                  Employee Handbook
                </Link>
              </li>

              <li>
                <Link className="transition" to="/">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium">Our Services</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link className="transition" to="/">
                  Web Development
                </Link>
              </li>

              <li>
                <Link className="transition" to="/">
                  Web Design
                </Link>
              </li>

              <li>
                <Link className="transition" to="/">
                  Marketing
                </Link>
              </li>

              <li>
                <Link className="transition" to="/">
                  Google Ads
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium">Resources</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link className="transition" to="/">
                  Online Guides
                </Link>
              </li>

              <li>
                <Link className="transition" to="/">
                  Conference Notes
                </Link>
              </li>

              <li>
                <Link className="transition" to="/">
                  Forum
                </Link>
              </li>

              <li>
                <Link className="transition" to="/">
                  Downloads
                </Link>
              </li>

              <li>
                <Link className="transition" to="/">
                  Upcoming Events
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium ">Helpful Links</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link className="transition" to="/">
                  FAQs
                </Link>
              </li>

              <li>
                <Link className="transition" to="/">
                  Support
                </Link>
              </li>

              <li>
                <Link
                  className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  to="/"
                >
                  <span className="transition">
                    Live Chat
                  </span>

                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <ul className="flex justify-center gap-6 sm:justify-end">
            <li>
              <Link
                to="/"
                rel="noreferrer"
                target="_blank"
                className="text-teal-700 transition hover:text-teal-700/75"
              >
                <span className="sr-only">Facebook</span>
               
              </Link>
            </li>

            <li>
              <Link
                to="/"
                rel="noreferrer"
                target="_blank"
                className="text-teal-700 transition hover:text-teal-700/75"
              >
                <span className="sr-only">Instagram</span>
              
              </Link>
            </li>

            <li>
              <Link
                to="/"
                rel="noreferrer"
                target="_blank"
                className="text-teal-700 transition hover:text-teal-700/75"
              >
                <span className="sr-only">Twitter</span>
               
              </Link>
            </li>

            <li>
              <Link
                to="/"
                rel="noreferrer"
                target="_blank"
                className="text-teal-700 transition hover:text-teal-700/75"
              >
                <span className="sr-only">GitHub</span>
               
              </Link>
            </li>

            <li>
              <Link
                to="/"
                rel="noreferrer"
                target="_blank"
                className="text-teal-700 transition hover:text-teal-700/75"
              >
                <span className="sr-only">Dribbble</span>
               
              </Link>
            </li>
          </ul>

          <div className="mt-16 sm:flex sm:items-center sm:justify-between">
            <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
              Copyright &copy; Anthony Ukutegbe 2024. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
