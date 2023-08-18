import React from "react";
import { BsGithub } from "react-icons/bs";
const Header = () => {
  return (
    <div className="flex justify-between px-10 lg:px-24 py-5 bg-[#2B3945]">
      <div>
        <h1 className="text-white font-bold text-xl bg-[#2B3945] ">
          Where in the World ?
        </h1>
      </div>
      <a
        href="#"
        className=" flex items-center gap-3 font-bold text-white text-xl bg-[#2B3945] "
      >
        <BsGithub /> Give it star
      </a>
    </div>
  );
};

export default Header;
