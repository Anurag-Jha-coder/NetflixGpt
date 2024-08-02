import React, { useEffect, useState } from "react";
import SignoutAccordion from "./SignoutAccordion";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { DOWN_ARROW, USER_AVATAR, LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [display, setDisplay] = useState(false);
  const loginuser = useSelector((store) => store.user);

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
      <div className={`flex justify-between fixed top-0 left-0 right-0 px-10 py-2 bg-gradient-to-b from-black z-50  ${isScrolled?"bg-black":''}`}>
        <div className="mx-8">
          <img
            className=" w-32 "
            src={LOGO}
            alt="logo"
          />
        </div>

        {loginuser && (
          <div
            onClick={toggleDisplay}
            className="mx-4 my-2 p-2 flex  relative"
          >
            <img
              className="mx-1"
              src={USER_AVATAR}
              alt="user-icon"
            />

            <img
              className="w-4 h-4 m-1"
              src={DOWN_ARROW}
              alt="dr"
            />
          </div>
        )}
      </div>
      <div className="relative">
      {display && <SignoutAccordion />}
      </div>

      
    </>
  );
};

export default Header;
