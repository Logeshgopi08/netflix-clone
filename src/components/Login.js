import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [issignin, setIsSignIn] = useState(false);

  const togglesignin = () => {
    setIsSignIn(!issignin);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_medium.jpg"
          alt=" netflix-bg-logo"
        />
      </div>

      <form className="absolute w-4/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="text-2xl font-bold">{issignin ? "SignUp" :"SignIn"}</h1>
        <input
          className="w-full p-2 m-4 bg-gray-700 rounded-lg"
          type="email"
          placeholder="Email 0r PhoneNumber"
        />

        <input
          className="w-full p-2 m-4 bg-gray-700 rounded-lg"
          type="password"
          placeholder="Password"
        />

        {issignin && <input
          className="w-full p-2 m-4 bg-gray-700 rounded-lg"
          type="password"
          placeholder="Confirm Password"
        />}

        <button className="bg-red-600 p-2 m-4 w-full rounded-lg " type="submit">
          {issignin ? "SignUp" : "Sign In"}
        </button>
        <p onClick={togglesignin} className="cursor-pointer text-lg">
          {issignin
            ? "Already have a Account? SignIn Now"
            : "New User? SignUp"}
        </p>
      </form>
    </div>
  );
};
export default Login;
