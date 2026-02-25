import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleSubmitButton = () => {
    // console.log(email.current.value)
    // console.log(password.current.value)
    const message = checkValidData(email.current.value, password.current.value);

    setErrorMessage(message);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/12 bg-black bg-opacity-80 text-white p-8 rounded"
        >
          <h2 className="text-2xl font-bold mb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          {!isSignInForm && (
            <input
              className="p-2 w-full mb-4 bg-gray-600 rounded text-sm"
              type="text"
              placeholder="Full Name"
            />
          )}

          <input
            ref={email}
            className="p-2 w-full mb-4 bg-gray-600 rounded text-sm"
            type="email"
            placeholder="Email Address"
          />

          <input
            ref={password}
            className="p-2 w-full mb-4 bg-gray-600 rounded text-sm"
            type="password"
            placeholder="Password"
          />
          <p className="text-red-500 text-sm py-2 font-bold">{errorMessage}</p>

          <button
            className="p-2 w-full bg-red-600 rounded text-sm"
            onClick={handleSubmitButton}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-sm mt-4">
            {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
            <span
              onClick={toggleSignInForm}
              className="text-red-600 cursor-pointer"
            >
              {isSignInForm ? "Sign up now" : "Sign in now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
