import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateLoginCreds } from "./utils/validate.util";
import { auth } from "./utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userReducer";
import { USER_AVATAR } from "./utils/constants";

const Login = () => {

  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validationErrorMessage, setValidationErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const submitForm = (e) => {
    e.preventDefault();
    const errorMessage = validateLoginCreds(email.current.value, password.current.value);
    if (!errorMessage) {
      if (!isSignInForm) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: name.current.value,
              photoURL: USER_AVATAR
            }).then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              }))
            }).catch((error) => {
              setValidationErrorMessage(error.message);
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      } else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            dispatch(addUser({
              uid: user.uid,
              email: user.email,
              displayName: name.current.value,
              photoURL: USER_AVATAR,
            }))
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setValidationErrorMessage(errorMessage);
          });
      }
    } else {
      setValidationErrorMessage(errorMessage);
    }
  }

  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img
          className="h-screen w-full"
          alt="backgroundimg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/bf6f5dab-8a85-48af-be22-de3a0cfd4ea7/PK-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <form onSubmit={submitForm} className="p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black absolute opacity-90">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            className="p-4 my-4 w-full bg-gray-700"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          type="text"
          className="p-4 my-4 w-full bg-gray-700"
          placeholder="Email Address"
        />
        <input
          ref={password}
          type="password"
          className="p-4 my-4 w-full bg-gray-700"
          placeholder="password" 
        />
        {validationErrorMessage && <p className="text-red-500 font-bold py-2">{validationErrorMessage}</p>}
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={submitForm}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={() => toggleSignInForm()}>
          {isSignInForm ? "New to netflix? sign Up now" : "Already registered? sign In now"}
        </p>
      </form>
    </div>
  )
}

export default Login;
