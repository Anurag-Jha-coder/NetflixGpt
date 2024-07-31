import React from "react";
import Header from "./Header.js";
import { useState, useRef } from "react";
import checkvalidation from "../utils/validate.js";
import { auth } from "../utils/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleOnclick = () => {
    setIsSignIn(!isSignIn);
  };

  const handleValidations = () => {
    const err = checkvalidation(
      name?.current?.value,
      email.current.value,
      password.current.value
    );
    setErrMessage(err);

    if (err != null) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              //profile updated
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              console.log(error.message);
            });
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorMessage);
        });
    }

    // Sign in

    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const { uid, email, displayName, photoURL } = userCredential.user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMessage(errorMessage);
      });
  };

  return (
    <div className="min-h-screen, flex flex-col">
      <Header />

      <div className="realative flex-grow flex items-center justify-center">
        <img
          className=" inset-0 absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg"
          alt="bg-img"
        />

        <div className="relative bg-black bg-opacity-80 p-6 sm:p-12 rounded-lg max-w-sm w-full mx-4 sm:mx-auto">
          <form
            className="flex flex-col space-y-4 text-white"
            onSubmit={(e) => e.preventDefault()}
            action=""
          >
            <h1 className="text-3xl py-4s" onClick={handleValidations}>
              <b>{isSignIn ? "Sing In" : "Sign UP"}</b>
            </h1>
            {!isSignIn && (
              <input
                ref={name}
                className="p-2 my-4 bg-gray-800 rounded-lg"
                type="text"
                placeholder="Full Name"
              />
            )}

            <input
              ref={email}
              className="p-2 my-4 bg-gray-800 rounded-lg"
              type="text"
              placeholder="Email or phone number"
            />
            <input
              ref={password}
              className="p-2 my-4 bg-gray-800 rounded-lg"
              type="password"
              placeholder="Password"
            />
            <p className="text-xs text-red-500 "> {errMessage}</p>
            <button
              onClick={handleValidations}
              className="my-4 p-2 w-full  bg-red-600 rounded-lg"
            >
              {isSignIn ? "Sing In" : "Sign UP"}
            </button>
            <div className="flex justify-center">
              <p className="text-xs mx-12  py-2 cursor-pointer">
                Forgot password?
              </p>
            </div>

            <p className="text-xs cursor-pointer" onClick={handleOnclick}>
              {isSignIn ? (
                <>
                  New to Netflix? <span className="font-bold">Sign Up</span> now
                </>
              ) : (
                <>
                  Already a user? <span className="font-bold">Sign In</span> now
                </>
              )}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
