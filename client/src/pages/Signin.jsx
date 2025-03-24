// src/pages/SignIn.jsx
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo1.png"; // Placeholder for the MediMind logo
import Illustration from "../assets/illustration.png"; // Placeholder for the illustration
import GoogleIcon from "../assets/google-icon.svg"; // Placeholder for the Google icon

export default function SignIn() {
  return (
<div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-pink-300 flex flex-col">
      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center">
        {/* Left: Sign-In Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-[550px]  mr-12 relative right-[200px] h-[600px]">
          <h2 className="text-pink-500 font-montserrat font-semibold text-xl">
            Welcome to Medi Mind
          </h2>
          <h1 className="text-2xl mt-[30px] font-montserrat font-bold mb-6">Sign In</h1>
          <form>
            <div className="mb-4">
              <label className="block text-gray-600 font-montserrat font-semibold text-sm mb-2">
                Enter your Username/Hospital ID
              </label>
              <input
                type="text"
                placeholder="Username / UserID"
                className="w-full p-3 rounded-md bg-pink-50 border-none focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-montserrat text-sm mb-2 font-semibold">
                Enter the Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full p-3 rounded-md bg-pink-50 border-none focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <a
                href="#"
                className="text-gray-500 text-sm font-montserrat hover:text-pink-500 mt-2 inline-block"
              >
                Forget Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white font-montserrat font-semibold py-3 rounded-md hover:bg-pink-600 transition"
            >
              Sign In
            </button>
          </form>
          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-2 text-gray-500 font-montserrat">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>
          <button className="w-full flex items-center justify-center bg-pink-50 text-gray-700 font-montserrat font-semibold py-3 rounded-md hover:bg-pink-100 transition">
            <img src={GoogleIcon} alt="Google" className="w-5 h-5 mr-2" />
            Login with Google
          </button>
          <div className="mt-4">
            <span className="text-gray-600 font-montserrat">
              Don't have an account?{" "}
              <Link to="/signup" className="text-pink-500 font-semibold">
                Sign Up
              </Link>
            </span>
          </div>

        </div>

        {/* Right: Logo and Illustration */}
        <div className="flex flex-col items-center">
          <img
            src={Logo}
            alt="MediMind"
            className="w-48 md:w-64 lg:w-80 mb-6"
          />
         <spam className="text-5xl md:text-6xl  font-bold text-pink-500">MEDI MIND</spam>
         <div className=""></div>
          <img
            src={Illustration}
            alt="Doctors Illustration"
            className="w-full h-full"
          />
        </div>
        <div ></div>
      </div>
    </div>
  );
}