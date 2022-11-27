import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { databases } from '../services/appwriteConfig'

export default function AddScripts() {
    const [title, setTitle] = useState("")
    const [writtenBy, setWrittenBy] = useState("")
    const [script, setScript] = useState("")

    const db_id = `{process.env.APPWRITE_DB}`
    const handleSubmit = (e) => {
        e.preventDefault()
        const promise = databases.createDocument(db_id, uuidv4(), {
            script, title, writtenBy
        })
        console.log(promise);
        promise.then(
            function (response) {
                console.log(response);

            },
            function (error) {
                console.log(error);
            }
        );
        e.target.reset();
    }

    return (
        <div>
            <div className="pl-16 py-6">
                <h1 className="text-3xl font-bold text-white">Write your script 📝</h1>
                <div className="h-1 w-56 bg-secondary my-2 ml-4"></div>
            </div>

            <form className='ml-16 mb-8' onSubmit={handleSubmit}>
                <div className="bg-white w-[36rem] p-6 rounded-lg shadow-lg translate-y-2">
                    <h1 className="text-2xl font-bold text-gray-800 py-2">
                        Add your script:
                    </h1>
                    <div className="bg-blue-500 h-1 w-will my-2 rounded-lg"></div>
                    <input type="text" className="w-full h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 px-2" placeholder="Script name" onChange={(e) => { setTitle(e.target.value) }} />
                    <input type="text" className="w-full h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 px-2 mt-4" placeholder="Script written by" onChange={(e) => { setWrittenBy(e.target.value) }} />
                    <textarea className="w-full h-40 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 my-4" placeholder="Script description" onChange={(e) => { setScript(e.target.value) }}></textarea>
                    <button className="bg-blue-500 text-white w-full h-10 rounded-lg focus:outline-none hover:bg-blue-600">Add script</button>
                </div>
            </form>
        </div>
    )
}
