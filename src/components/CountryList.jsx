import React from "react";
import { useCountry } from "../context/Context";
import CountryCard from "./CountryCard";
import Loader from "./Loader";

const CountryList = () => {
  const { countries, loading } = useCountry();
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="mt-12 px-10 lg:px-24 flex flex-wrap gap-9">
      {countries?.map((country, index) => {
        return <CountryCard key={index} index={index} country={country} />;
      })}
    </div>
  );
};

export default CountryList;
