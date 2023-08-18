import react, { createContext, useContext, useEffect, useState } from "react";

const CountryContext = createContext();

export const ContextProvider = ({ children }) => {
  const baseURL = "https://restcountries.com/v3.1";
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allCountries, setAllCountries] = useState([]);

  const fetchCountries = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${baseURL}/${selectedRegion}`);
      const data = await res.json();
      if (data) {
        // console.log(data);
        setCountries(data);
        setLoading(false);
      }
    } catch (error) {
      console.log("hello" + error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, [selectedRegion]);

  return (
    <CountryContext.Provider
      value={{ selectedRegion, baseURL, countries, setSelectedRegion, loading }}
    >
      {children}
    </CountryContext.Provider>
  );
};

const useCountry = () => {
  return useContext(CountryContext);
};

export { CountryContext, useCountry };
