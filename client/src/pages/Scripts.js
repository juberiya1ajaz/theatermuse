import React, { useState, useEffect } from "react";
import { databases } from "../services/appwriteConfig";
import AddScripts from "../components/AddScripts";

export default function Scripts() {

  const [scripts, setScripts] = useState()

  const db_id = `{process.env.APPWRITE_DB}`

  useEffect(() => {
    const getScripts = databases.listDocuments(db_id)

    getScripts.then(
      function (response) {
        setScripts(response.documents)
      },
      function (error) {
        console.log(error);
      }
    )
  }, [])

  return (
    <div>
      <div className="grid place-items-center py-6">
        <h1 className="text-5xl font-bold text-white">Scripts 📜</h1>
        <div className="h-1 w-48 bg-secondary my-2"></div>
      </div>

      <div className="flex flex-wrap items-center justify-around space-x-4 space-y-4 p-8">
        {scripts && scripts.map(item => (
          <div key={item.$id} >
            <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
              <div>
                <div className="bg-amber-100 w-[28rem] h-[28rem] my-4 p-6 rounded-lg shadow-lg translate-y-2">
                  <h1 className="text-2xl font-bold text-gray-800 py-2">
                    {item.title}
                  </h1>
                  <div className="bg-blue-500 h-1 w-will my-2 rounded-lg"></div>
                  <h1 className="text-xl font-bold text-gray-800">
                    {item.writtenBy}
                  </h1>
                  <p className="text-lg py-2 font-bold text-gray-500 text-justify">
                    {item.script}{" "}
                  </p>
                </div>
              </div>

            </div>
          </div>
        ))}


      </div>
      <div className="flex flex-row justify-center">

        <AddScripts className="" />
      </div>
    </div>
  );
}
