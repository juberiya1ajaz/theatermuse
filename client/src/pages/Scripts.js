import React, { useState, useEffect } from "react";
import { databases } from "../services/appwriteConfig";
import AddScripts from "../components/AddScripts";

export default function Scripts() {
  return (
    <div>
      <div className="grid place-items-center py-6">
        <h1 className="text-5xl font-bold text-white">Scripts 📜</h1>
        <div className="h-1 w-48 bg-secondary my-2"></div>
      </div>

      <div className="flex flex-wrap items-center justify-around space-x-4 space-y-4 p-8">
        <div className="bg-amber-100  w-[28rem] h-[28rem] my-4 p-6 rounded-lg shadow-lg translate-y-4">
          <h1 className="text-2xl font-bold text-gray-800 py-2">Hamlet</h1>
          <div className="bg-blue-500 h-1 w-will my-2 rounded-lg"></div>
          <h1 className="text-xl font-bold text-gray-800">
            Written By: William Shakespeare
          </h1>
          <p className="text-lg py-2 font-bold text-gray-500 text-justify">
            The Tragedy of Hamlet, Prince of Denmark, often shortened to Hamlet,
            is a tragedy written by William Shakespeare sometime between 1599
            and 1601. It is Shakespeare's longest play, with 29,551 words. Set
            in Denmark, the play depicts Prince Hamlet and his revenge against
            his uncle, Claudius, who has murdered Hamlet's father in order to
            seize his throne and marry Hamlet's mother.
          </p>
        </div>

        <div className="bg-amber-100 w-[28rem] h-[28rem] my-4 p-6 rounded-lg shadow-lg translate-y-2">
          <h1 className="text-2xl font-bold text-gray-800 py-2">
            Long Day's Journey into Night
          </h1>
          <div className="bg-blue-500 h-1 w-will my-2 rounded-lg"></div>
          <h1 className="text-xl font-bold text-gray-800">
            Written By: Eugene O'Neill
          </h1>
          <p className="text-lg py-2 font-bold text-gray-500 text-justify">
            Long Day's Journey into Night is a play in four acts written by
            American playwright Eugene O'Neill in 1939–41, first published
            posthumously in 1956. The play is widely considered to be his magnum
            opus and one of the finest American plays of the 20th century. It
            premiered in Sweden in February 1956 and then opened on Broadway in
            November 1956, winning the Tony Award for Best Play.
          </p>
        </div>

        <div className="bg-amber-100 w-[28rem] h-[28rem] my-4 p-6 rounded-lg shadow-lg translate-y-2">
          <h1 className="text-2xl font-bold text-gray-800 py-2">
            The Crucible
          </h1>
          <div className="bg-blue-500 h-1 w-will my-2 rounded-lg"></div>
          <h1 className="text-xl font-bold text-gray-800">
            Written By: Arthur Miller
          </h1>
          <p className="text-lg py-2 font-bold text-gray-500 text-justify">
            The Crucible is a 1953 play by American playwright Arthur Miller. It
            is a dramatized and partially fictionalized story of the Salem witch
            trials that took place in the Massachusetts Bay Colony during
            1692–93. Miller wrote the play as an allegory for McCarthyism, when
            the United States government persecuted people accused of being
            communists.
          </p>
        </div>

        <div className="bg-amber-100 w-[28rem] h-[28rem] my-4 p-6 rounded-lg shadow-lg translate-y-2">
          <h1 className="text-2xl font-bold text-gray-800 py-2">
            Waiting for Godot
          </h1>
          <div className="bg-blue-500 h-1 w-will my-2 rounded-lg"></div>
          <h1 className="text-xl font-bold text-gray-800">
            Written By: Samuel Beckett
          </h1>
          <p className="text-lg py-2 font-bold text-gray-500 text-justify">
            Waiting for Godot is a play by Samuel Beckett in which two
            characters, Vladimir (Didi) and Estragon (Gogo), engage in a variety
            of discussions and encounters while awaiting the titular Godot, who
            never arrives. Waiting for Godot is Beckett's translation of his own
            original French-language play, En attendant Godot, and is subtitled.
          </p>
        </div>

        <div className="bg-amber-100 w-[28rem] h-[28rem] my-4 p-6 rounded-lg shadow-lg translate-y-2">
          <h1 className="text-2xl font-bold text-gray-800 py-2">
            Antigone (Sophocles play)
          </h1>
          <div className="bg-blue-500 h-1 w-will my-2 rounded-lg"></div>
          <h1 className="text-xl font-bold text-gray-800">
            Written By: Sophocles
          </h1>
          <p className="text-lg py-2 font-bold text-gray-500 text-justify">
            Antigone (/ænˈtɪɡəni/ ann-TIG-ə-nee; Ancient Greek: Ἀντιγόνη) is an
            Athenian tragedy written by Sophocles in (or before) 441 BC and it
            was first performed at the Festival of Dionysus of the same year. It
            is thought to be the second oldest surviving play of Sophocles,
            preceded by Ajax, which was written around the same period.{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        
        <AddScripts className="" />
      </div>
    </div>
  );
}
