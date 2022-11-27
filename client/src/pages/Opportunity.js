import React from "react";
import Opportunity1 from "../assets/opportunity1.jpg";
import Opportunity2 from "../assets/opportunity2.jpg";
import Opportunity3 from "../assets/opportunity3.jpg";
import Opportunity4 from "../assets/opportunity4.jpg";

export default function Opportunity() {
  return (
    <div>
      <div className="grid place-items-center py-6">
        <h1 className="text-5xl font-bold text-white">Opportunity💼</h1>
        <div className="h-1 w-72 bg-secondary my-2"></div>
      </div>

      <div className="flex flex-wrap items-center justify-around space-x-4 space-y-4">
        <div className="bg-white w-72 p-6 rounded-lg shadow-lg translate-y-2">
          <img
            src={Opportunity1}
            alt="opportunity1"
            className="w-full h-50 object-cover rounded-lg"
          />
          <h1 className="text-2xl font-bold text-gray-800 py-2">
            Play Date: 26-11-22
          </h1>
          <div className="bg-blue-500 h-1 w-will my-2 rounded-lg"></div>
          <h1 className="text-xl font-bold text-gray-800">Requirements:</h1>
          <h1 className="text-xl font-bold text-gray-800">Makeup Artist(2)</h1>
          <h1 className="text-xl font-bold text-gray-800">Actors(4)</h1>
          <h1 className="text-xl font-bold text-gray-800">Camera Men(6)</h1>
          <a href="mailto:john@example.com" className="mt-10  inline-flex items-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700">
            Send Email
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>

        <div className="bg-white w-72 p-6 rounded-lg shadow-lg">
          <img
            src={Opportunity2}
            alt="opportunity1"
            className="w-full h-52 object-cover rounded-lg"
          />
          <h1 className="text-2xl font-bold text-gray-800 py-2">
            Play Date: 30-11-22
          </h1>
          <div className="bg-blue-500 h-1 w-will my-2 rounded-lg"></div>
          <h1 className="text-xl font-bold text-gray-800">Requirements:</h1>
          <h1 className="text-xl font-bold text-gray-800">Makeup Artist(8)</h1>
          <h1 className="text-xl font-bold text-gray-800">Actors(18)</h1>
          <a href="mailto:john@example.com" className="mt-5 inline-flex items-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
          >
            Send Email
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>

        <div className="bg-white w-72 p-6 rounded-lg shadow-lg">
          <img
            src={Opportunity3}
            alt="opportunity1"
            className="w-full h-52 object-cover rounded-lg"
          />
          <h1 className="text-2xl font-bold text-gray-800 py-2">
            Play Date: 16-12-22
          </h1>
          <div className="bg-blue-500 h-1 w-will my-2 rounded-lg"></div>
          <h1 className="text-xl font-bold text-gray-800">Requirements:</h1>
          <h1 className="text-xl font-bold text-gray-800">Makeup Artist(4)</h1>
          <h1 className="text-xl font-bold text-gray-800">Camera Men(2)</h1>
          <a href="mailto:john@example.com" className="mt-5 inline-flex items-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
          >
            Send Email
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>

        <div className="bg-white w-72 p-6 rounded-lg shadow-lg">
          <img
            src={Opportunity4}
            alt="opportunity1"
            className="w-full h-52 object-cover rounded-lg"
          />
          <h1 className="text-2xl font-bold text-gray-800 py-2">
            Play Date: 22-12-22
          </h1>
          <div className="bg-blue-500 h-1 w-will my-2 rounded-lg"></div>
          <h1 className="text-xl font-bold text-gray-800">Requirements:</h1>
          <h1 className="text-xl font-bold text-gray-800">Actors(6)</h1>
          <h1 className="text-xl font-bold text-gray-800">Camera Men(4)</h1>
          <a href="mailto:john@example.com" className="mt-5 inline-flex items-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
          >
            Send Email
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
