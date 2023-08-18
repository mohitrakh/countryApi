import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCountry } from "../context/Context";
import Loader from "./Loader";
import Header from "./Header";
import { BiArrowBack } from "react-icons/bi";
const SingleCountry = () => {
  const { country } = useParams();
  const [countryData, setCountryData] = useState([]);
  const [loadingSingle, setLoadingSingle] = useState(false);
  const [error, setError] = useState(false);
  const fetchSingleCountry = async (name) => {
    try {
      setLoadingSingle(true);
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const data = await res.json();
      if (data) {
        setCountryData(data[0]);

        setLoadingSingle(false);
      }
    } catch (error) {
      setError(true);
      console.log("hello");
    }
  };

  useEffect(() => {
    fetchSingleCountry(country);
  }, [country]);

  console.log(countryData);

  if (loadingSingle) {
    return (
      <>
        <Header />
        <div className="h-[100vh]">
          <Loader />
        </div>
      </>
    );
  }

  console.log(error);

  if (error) {
    return <h1>no data </h1>;
  }

  return (
    <div>
      <Header />
      <div className="mt-16 px-10 lg:px-24  flex flex-col gap-8">
        <Link
          className=" flex gap-2 items-center justify-center btn py-2 max-w-[6rem] w-28 rounded-md text-white bg-[#2B3945] shadow-md "
          to={"/"}
        >
          <BiArrowBack className="bg-transparent" /> Back
        </Link>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-12 lg:items-center">
          <div className="rounded-full">
            <img
              className="w-[34rem] object-contain rounded-lg"
              src={countryData?.flags?.png}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-7">
            <h1 className="text-white text-3xl font-bold">
              {countryData?.name?.common}
            </h1>

            <div className="flex-col flex gap-3">
              <div>
                <span className="font-bold text-[18px] text-white ">
                  Capital:{" "}
                </span>
                <span className="text-[#828585]">
                  {countryData?.capital
                    ? countryData?.capital[0]
                    : countryData?.capital}
                </span>
              </div>

              <div>
                <span className="font-bold text-[18px] text-white ">
                  Population:{" "}
                </span>
                <span className="text-[#828585]">
                  {countryData?.population}
                </span>
              </div>
              <div>
                <span className="font-bold text-[18px] text-white ">
                  Native Name:{" "}
                </span>
                <span className="text-[#828585]">
                  {countryData?.name?.nativeName?.eng?.official}
                </span>
              </div>

              <div>
                <span className="font-bold text-[18px] text-white ">
                  Region:{" "}
                </span>
                <span className="text-[#828585]">{countryData?.region}</span>
              </div>
              <div>
                <span className="font-bold text-[18px] text-white ">
                  Currencies:{" "}
                </span>
                <span className="text-[#828585]">
                  {countryData?.currencies &&
                    Object.values(countryData?.currencies)[0].name}
                </span>
              </div>
              <div className="flex gap-5 items-center">
                <span className="text-white font-bold text-[18px]">
                  Boundries :{" "}
                </span>
                {countryData?.borders != null ? (
                  <div className="flex gap-3">
                    {countryData?.borders.map((border, index) => {
                      return (
                        <Link
                          to={`/${border}`}
                          className="btn py-2 max-w-[6rem] px-6 rounded-md text-white bg-[#2B3945] shadow-md "
                        >
                          {border}
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div>
                    <h1 className="text-red-600 text-2xl">It has no borders</h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
