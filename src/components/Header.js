import React, { useEffect, useState } from "react";
import SignoutAccordion from "./SignoutAccordion";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { DOWN_ARROW, USER_AVATAR, LOGO, SUPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [display, setDisplay] = useState(false);
  const loginuser = useSelector((store) => store.user);

  const toggleSearch = () => {
     dispatch(toggleGptSearch());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unSubscribe();
  }, []);

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div
        className={`flex justify-between fixed top-0 left-0 right-0 px-10 py-2 bg-gradient-to-b from-black z-50  ${
          isScrolled ? "bg-black" : ""
        }`}
      >
        <div className="mx-8">
          <img className=" w-32 " src={LOGO} alt="logo" />
        </div>

        {loginuser && (
          <div className="flex ">

            <select onChange={handleLanguageChange} className="h-9 p-1 bg-gray-500 text-white m-3">
              {SUPORTED_LANGUAGES.map((lang) =>(
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              ))}
            </select>
            <div className="bg-purple-900 text-white h-9 p-1 mt-3 rounded-lg">
              <button onClick={toggleSearch}>GptSearch</button>
            </div>
            <div
              onClick={toggleDisplay}
              className="mx-4 my-2 p-2 flex  relative"
            >
              <img className="mx-1" src={USER_AVATAR} alt="user-icon" />

              <img className="w-4 h-4 m-1" src={DOWN_ARROW} alt="dr" />
            </div>
          </div>
        )}
      </div>
      <div className="relative">{display && <SignoutAccordion />}</div>
    </>
  );
};

export default Header;
