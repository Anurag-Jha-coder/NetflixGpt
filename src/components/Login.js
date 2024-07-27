import React from "react";
import Header from "./Header.js";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleOnclick = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg"
          alt="bg-img"
        />
      </div>

      <div>
        <form
          className="absolute w-3/12 bg-black p-12 text-white my-24 mx-auto right-0 left-0 opacity-80"
          action=""
        >
          <h1 className="text-3xl py-4s"><b>{isSignIn ? "Sing In" : "Sign UP"}</b></h1>
          {isSignIn && (
            <input
              className="p-2 my-4 bg-gray-800 rounded-lg"
              type="text"
              placeholder="Full Name"
            />
          )}

          <input
            className="p-2 my-4 bg-gray-800 rounded-lg"
            type="text"
            placeholder="Email or phone number"
          />
          <input
            className="p-2 my-4 bg-gray-800 rounded-lg"
            type="password"
            placeholder="Password"
          />
          <button className="my-4 p-2 w-full  bg-red-600 rounded-lg">
            {isSignIn ? "Sing In" : "Sign UP"}
          </button>
          <p className="text-xs mx-12  py-2 cursor-pointer">Forgot password?</p>
          <p className="text-xs my-2 cursor-pointer" onClick={handleOnclick}>
            {isSignIn
              ? "New to Netflix? Sign up now"
              : "Already a user? Sing In now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
