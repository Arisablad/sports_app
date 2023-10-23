import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="flex flex-wrap place-items-center fixed z-30">
      <section className="relative mx-auto ">
        <nav className="flex justify-between bg-gray-900 text-white w-screen  backdrop-blur-xl backdrop-filter bg-opacity-90 border-b border-gray-700">
          <div className="py-6 flex w-full items-center">
            <Link className="text-3xl font-bold font-heading px-8" to="/">
              ArisabladScore
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
            </Link>

            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li>
                <Link className="hover:text-gray-200" to="/">
                  Home
                </Link>
              </li>
            </ul>

            {/*<div className="hidden xl:flex items-center space-x-5 items-center">*/}
            {/*    <a className="flex items-center hover:text-gray-200" href="#">*/}
            {/*        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
            {/*            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />*/}
            {/*        </svg>*/}
            {/*    </a>*/}

            {/*</div>*/}
          </div>

          {/*<a className="xl:hidden flex mr-6 items-center" href="#">*/}
          {/*  <svg*/}
          {/*    xmlns="http://www.w3.org/2000/svg"*/}
          {/*    className="h-6 w-6 hover:text-gray-200"*/}
          {/*    fill="none"*/}
          {/*    viewBox="0 0 24 24"*/}
          {/*    stroke="currentColor"*/}
          {/*  >*/}
          {/*    <path*/}
          {/*      stroke-linecap="round"*/}
          {/*      stroke-linejoin="round"*/}
          {/*      stroke-width="2"*/}
          {/*      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"*/}
          {/*    />*/}
          {/*  </svg>*/}
          {/*  <span className="flex absolute -mt-5 ml-4">*/}
          {/*    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>*/}
          {/*    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>*/}
          {/*  </span>*/}
          {/*</a>*/}

          {/*Hamburger Menu*/}

          <span
            className="navbar-burger self-center mr-12 md:hidden"
            onClick={() => setShowMobileMenu((prevState) => !prevState)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
        </nav>
      </section>

      {/*Mobile Menu*/}

      {showMobileMenu && (
        <div
          className={
            "flex flex-col gap-4 bg-[#111111] h-screen w-screen md:hidden p-4 z-30"
          }
        >
          <Link
            className={
              "hover:text-gray-200 text-white w-full text-center p-8 bg-[#333333] rounded-md transition duration-300 text-xl font-semibold"
            }
            to="#"
            onClick={() => setShowMobileMenu(false)}
          >
            Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navigation;
