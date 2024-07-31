import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";

const SignoutAccordion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelSingOut = () => {
    dispatch(removeUser());
    navigate("/");
  };

  return (
    <div className="bg-black w-48 h-80 m-2 p-4 mx-14 opacity-80 text-white float-right">
      <div className="h-5/6 w-full border-b-2"></div>
      <div className="m-2 p-2 cursor-pointer">
        <p onClick={handelSingOut} className="text-xs">
          Sing out of Netflix
        </p>
      </div>
    </div>
  );
};

export default SignoutAccordion;
