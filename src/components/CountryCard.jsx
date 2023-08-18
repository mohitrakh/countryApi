import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <Link to={`/${country?.name?.common}`} className="">
      <div className="w-[24rem] rounded-lg  h-[24rem] bg-[#2B3945] flex flex-col gap-5 ">
        <div>
          <img
            src={country?.flags?.png}
            className="w-full h-52 object-cover rounded-bl-none rounded-br-none rounded-lg"
            alt=""
          />
        </div>
        <div className="px-6 gap-2 bg-[#2B3945]">
          <h1
            className="text-2xl bg-[#2B3945] font-bold text-white mb-5
        "
          >
            {country?.name?.common}
          </h1>
          <div className="mb-4 flex gap-3 bg-[#2B3945] ">
            <span className="font-bold text-white bg-[#2B3945]">
              Population:{" "}
            </span>
            <span className="text-[#828585] bg-[#2B3945]">
              {country?.population}
            </span>{" "}
            <br />
          </div>
          <div className="mb-4 space-x-3 bg-[#2B3945]  ">
            <span className="font-bold text-white pb-6 bg-[#2B3945]">
              Region:
            </span>{" "}
            <span className="text-[#828585] bg-[#2B3945]">
              {country?.region}
            </span>
            <br />
          </div>
          <div className="mb-4 space-x-3 bg-[#2B3945] ">
            <span className="font-bold text-white bg-[#2B3945] pb-6">
              Capital:
            </span>{" "}
            <span className="text-[#828585] bg-[#2B3945] ">
              {country?.capital ? country.capital[0] : "bussfuck"}
            </span>
            <br />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
