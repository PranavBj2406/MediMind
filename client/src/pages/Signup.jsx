// src/pages/SignUp.jsx
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo1.png"; // Placeholder for the MediMind logo
import Illustration from "../assets/illustration.png"; // Placeholder for the illustration

export default function SignUp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-pink-300 flex flex-col">
      {/* Header */}
     
      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center mt-[50px]">
        {/* Left: Logo and Illustration */}
        <div className="flex flex-col items-center mr-12">
          <img
            src={Logo}
            alt="MediMind"
            className="w-48 md:w-64 lg:w-80 mb-6"
          />
          <img
            src={Illustration}
            alt="Doctors Illustration"
            className="w-full max-w-md"
          />
        </div>

        {/* Right: Sign-Up Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-[1000px] max-w-md">
          <h1 className="text-2xl font-montserrat font-bold mb-6">Register</h1>
          <h2 className="text-gray-600 font-montserrat font-semibold text-lg mb-4">
            User Details
          </h2>
          <form>
            {/* Box 1: Personal Details */}
            <div className="mb-6 p-4 border border-gray-200 rounded-md shadow-sm">
              <div className="mb-4">
                <label className="block text-gray-600 font-montserrat text-sm mb-2">
                  Enter the Employee Name:
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full p-3 rounded-md bg-pink-50 border-none focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-montserrat text-sm mb-2">
                  Enter the Employee Email:
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full p-3 rounded-md bg-pink-50 border-none focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-montserrat text-sm mb-2">
                  Enter the Employee Phone number
                </label>
                <input
                  type="tel"
                  placeholder="Phno."
                  className="w-full p-3 rounded-md bg-pink-50 border-none focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>
            </div>

            {/* Box 2: Address */}
            <div className="mb-6 p-4 border border-gray-200 rounded-md shadow-sm">
              <div className="mb-4">
                <label className="block text-gray-600 font-montserrat text-sm mb-2">
                  Address
                </label>
                <textarea
                  placeholder="address details"
                  className="w-full p-3 rounded-md bg-pink-50 border-none focus:outline-none focus:ring-2 focus:ring-pink-300"
                  rows="3"
                />
              </div>
            </div>

            {/* Box 3: Specialization and Password */}
            <div className="mb-6 p-4 border border-gray-200 rounded-md shadow-sm">
              <div className="mb-4">
                <label className="block text-gray-600 font-montserrat text-sm mb-2">
                  Specialization field:
                </label>
                <input
                  type="text"
                  placeholder="DOC / front desk"
                  className="w-full p-3 rounded-md bg-pink-50 border-none focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-montserrat text-sm mb-2">
                  Create strong Password:
                </label>
                <input
                  type="password"
                  placeholder="••••••••••••••••"
                  className="w-full p-3 rounded-md bg-pink-50 border-none focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white font-montserrat font-semibold py-3 rounded-md hover:bg-pink-600 transition"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-gray-500 font-montserrat text-sm mt-4">
            I already have an account{" "}
            <Link to="/signin" className="text-pink-500 hover:text-pink-600">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}