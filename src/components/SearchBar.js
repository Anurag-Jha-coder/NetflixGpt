import React from "react";
import { BG_IMG } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const language = useSelector((store) =>store.config.lang);
  console.log(language);
  return ( 
    <>
      <div className="">
        <img
          className=" inset-0 absolute w-full h-full object-cover"
          src={BG_IMG}
          alt="bg-img"
        />

        <div className="flex  justify-center  mt-[8%] text-white">
          <div className=" absolute bg-black flex justify-between w-1/2 rounded-lg">
            <input
              className=" rounded-lg w-10/12 border border-b-2 p-2 m-3"
              type="text"
              placeholder={lang[language].gptSearchPlaceholder}
            />
            <button className=" bg-purple-900 rounded-lg w-2/12 p-2 m-3">
              {lang[language].search}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
