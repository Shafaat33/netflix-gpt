import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img alt="backgroundimg" src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/bf6f5dab-8a85-48af-be22-de3a0cfd4ea7/PK-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <form className="p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black absolute opacity-90">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            className="p-4 my-4 w-full bg-gray-700"
            placeholder="Full Name"
          />
        )}
        <input
          type="text"
          className="p-4 my-4 w-full bg-gray-700"
          placeholder="Email Address"
        />
        <input
          type="password"
          className="p-4 my-4 w-full bg-gray-700"
          placeholder="password" 
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
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
