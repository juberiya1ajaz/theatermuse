import React from "react";
import HeroImg from "../assets/hero.svg";
import FeatImg from "../assets/feat.svg";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="md:mx-28 mx-4 text-white py-4">
      <div className="md:grid md:grid-cols-2 items-center">
        <div className="bg-yellow-300 p-14 border-2 border-r-8 border-t-8 rounded-xl border-white ">
          <h1 className="text-3xl  text-black md:text-4xl font-black ">
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString("Welcome to APP NAME")

                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Shop Theater Essentials")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Peer Script Review")
                  .start();
              }}
            />
          </h1>
          <p className="text-lg  text-black md:text-lg py-4 tracking-wider text-justify">
            About the web app
          </p>

          <Link to="/scripts">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Read Scripts
            </button>
          </Link>
        </div>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">

          <iframe
            className="w-[40rem] h-[40rem] "
            src="https://embed.lottiefiles.com/animation/30331"
          ></iframe>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 pt-12 items-center">
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <iframe
            className="w-[30rem] h-[40rem] "
            src="https://embed.lottiefiles.com/animation/76069"
          ></iframe>
        </div>
        <div className="bg-red-600 p-10 border-2 border-r-8 border-t-8 rounded-xl border-white ">
          <h1 className="text-5xl text-black font-black  ">
            What else do we have
          </h1>
          <p className="text-2xl md:text-2xl py-4 tracking-wider font-bold text-black ">
            APP NAME is a web app where you can:
          </p>
          <ul className="text-2xl text-black">
            <li className="list-disc">Shop for your theater needs.</li>
            <li className="list-disc">
              Users can search for all nearby theaters.
            </li>
            <li className="list-disc">
              Opportunity to get a role in the theater industry.
            </li>
            <li className="list-disc">
              User can upload their play script and get reviews from others.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
