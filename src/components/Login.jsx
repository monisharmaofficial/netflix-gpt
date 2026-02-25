import Header from "./Header";
import { useState } from "react";

const Login = () => {
    const[isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm);
    }

  return (
    <div className="relative">
      <Header />
      <div>
        <img
          className="h-lvh w-full object-cover"
          src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png"
          alt="background-image"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <form className="w-3/12 bg-black bg-opacity-80 text-white p-8 rounded">
          <h2 className="text-2xl font-bold mb-4">{isSignInForm?"Sign In":"Sign Up"}</h2>
          {!isSignInForm && <input
            className="p-2 w-full mb-4 bg-gray-600 rounded text-sm"
            type="text"
            placeholder="Full Name"
          />}

          <input
            className="p-2 w-full mb-4 bg-gray-600 rounded text-sm"
            type="email"
            placeholder="Email Address"
          />

          <input
            className="p-2 w-full mb-4 bg-gray-600 rounded text-sm"
            type="password"
            placeholder="Password"
          />

          <button className="p-2 w-full bg-red-600 rounded text-sm">{isSignInForm?"Sign In":"Sign Up"}</button>
          <p className="text-sm mt-4">{isSignInForm?"New to Netflix?":"Already have an account?"} <span onClick={toggleSignInForm} className="text-red-600 cursor-pointer">{isSignInForm?"Sign up now":"Sign in now"}</span></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
