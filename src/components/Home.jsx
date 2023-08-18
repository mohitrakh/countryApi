import React from "react";
import Header from "./Header";
import { AiOutlineSearch } from "react-icons/ai";
import CountryList from "./CountryList";
import { useCountry } from "../context/Context";
import { useState } from "react";
const Home = () => {
  const { setSelectedRegion, selectedRegion } = useCountry();
  const [query, setQuery] = useState("");
  console.log(selectedRegion);
  const handleSelect = (value) => {
    if (value === "all") {
      setSelectedRegion("all");
    } else {
      setSelectedRegion(`region/${value}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSelectedRegion(`name/${query}`);
  };
  return (
    <div className="">
      <Header />
      <div className="mt-12 flex gap-9 lg:gap-0  flex-col lg:flex-row justify-between px-10 lg:px-24 ">
        <div className="flex w-full px-4 gap-4 items-center lg:w-[30rem] lg:h-12 h-12 rounded-md bg-[#2b3945]">
          <div className="bg-transparent">
            <AiOutlineSearch className="text-2xl text-white bg-transparent" />
          </div>
          <form
            action=""
            className="bg-transparent outline-none"
            onSubmit={handleSubmit}
          >
            <input
              className="bg-transparent outline-none text-white
            "
              placeholder="Search for a country..."
              type="text"
              name=""
              id=""
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>
        <div className="lg:w-48 w-48 h-12 bg-[#2b3945] px-2 lg:h-12 flex items-center justify-center rounded-md">
          <select
            className="bg-[#2b3945] py-2 outline-none text-white w-40"
            name="regioun"
            id="region"
            placeholder="Browse country by region"
            onChange={(e) => handleSelect(e.target.value)}
          >
            <option className="" value="all">
              All
            </option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>

      <div>
        <CountryList />
      </div>
    </div>
  );
};

export default Home;
