import Image from "next/image";
import React from "react";
import { FaPencilAlt, FaSearch } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { TbBellRinging2Filled } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="bg-[#1B1C1E]">
      <div className="navbar container mx-auto h-[80px]">
        <div className="navbar flex-row-reverse">
          <div className="dropdown">
          <div className="avatar lg:hidden">
            <div className="ring-primary ring-offset-base-100 rounded-full">
              <Image src="/image/profile.png" width={40} height={40} alt="avatar" />
            </div>
          </div>
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu space-y-4 flex justify-center items-center menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow"
            >
            <div className="w-10 h-10 bg-[#2B2B2B] rounded-full flex justify-center items-center">
            <FaSearch className="text-white w-6 h-6" />
          </div>
          <div className="w-10 h-10 bg-[#2B2B2B] rounded-full flex justify-center items-center">
            <FaPencilAlt className="text-white w-6 h-6" />
          </div>
          <div className="w-10 h-10 bg-[#2B2B2B] rounded-full flex justify-center items-center">
            <CgMail className="text-white w-6 h-6" />
          </div>
          <div className="w-10 h-10 bg-[#2B2B2B] rounded-full flex justify-center items-center">
            <TbBellRinging2Filled className="text-white w-6 h-6 -rotate-45" />
          </div>
          <div className="w-10 h-10 bg-[#2B2B2B] rounded-full flex justify-center items-center">
            <BsThreeDots className="text-white w-6 h-6" />
          </div>
            </ul>
          </div>
          <Image src="/image/logo.png" alt="logo" className="mr-auto" width={120} height={120} />
        </div>
        <div className="navbar-end hidden lg:flex items-center space-x-4">
          <div className="w-10 h-10 bg-[#2B2B2B] rounded-full flex justify-center items-center">
            <FaSearch className="text-white w-6 h-6" />
          </div>
          <div className="w-10 h-10 bg-[#2B2B2B] rounded-full flex justify-center items-center">
            <FaPencilAlt className="text-white w-6 h-6" />
          </div>
          <div className="w-10 h-10 bg-[#2B2B2B] rounded-full flex justify-center items-center">
            <CgMail className="text-white w-6 h-6" />
          </div>
          <div className="w-10 h-10 bg-[#2B2B2B] rounded-full flex justify-center items-center">
            <TbBellRinging2Filled className="text-white w-6 h-6 -rotate-45" />
          </div>
          <div className="w-10 h-10 bg-[#2B2B2B] rounded-full flex justify-center items-center">
            <BsThreeDots className="text-white w-6 h-6" />
          </div>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 rounded-full">
              <Image src="/image/profile.png" width={40} height={40} alt="avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
