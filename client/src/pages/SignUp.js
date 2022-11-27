import React, { useState } from 'react'
import { account } from '../services/appwriteConfig'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

export default function SignUp() {

    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const signupUser = async (e) => {
        e.preventDefault()

        const promise = account.create(
            uuidv4(),
            user.email,
            user.password,
            user.name
        );

        promise.then(
            function (response) {
                console.log(response);
                navigate("/home")
            },
            function (error) {
                console.log(error);
            }
        )
    }

    return (
        <div className='grid grid-cols-12'>
            <div className="col-span-4 text-white font-bold bg-black min-h-screen pl-7">
                <div className="grid grid-rows-6 grid-flow-col min-h-screen items-center justify-items-start">
                    <div className="row-span-4 row-start-2 text-4xl">
                        <h2 className="mb-4 text-[2.79rem] self-center font-bold tracking-wider text-white">
                            TheaterMuse
                        </h2>
                        <h2 className="text-[2rem] self-center font-bold tracking-wider text-white">
                            Sign Up
                        </h2>
                        <div className="pt-10 pr-20">
                            <label className="text-sm font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                name="Name"
                                placeholder="Write your Name"
                                className="w-full bg-black py-3 px-3 border hover: border-gray-500 rounded shadow text-base"
                                onChange={(e) => {
                                    setUser({
                                        ...user,
                                        name: e.target.value
                                    })
                                }} />
                        </div>
                        <div className="pt-10 pr-20">
                            <label className="text-sm font-medium">
                                Password
                            </label>
                            <input
                                type="text"
                                name="password"
                                placeholder="Write your password"
                                className="w-full bg-black py-3 px-3 border hover: border-gray-500 rounded shadow text-base"
                                onChange={(e) => {
                                    setUser({
                                        ...user,
                                        password: e.target.value
                                    })
                                }} />
                        </div>
                        <div className="text-sm font-medium w-full pr-20 pt-14">
                            <button
                                type="button"
                                className="text-center w-full py-4 bg-blue-700 hover:bg-blue-400 rounded-md text-white" onClick={signupUser}>
                                SIGN UP
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-end text-white'>
                        Already have an account? <a href="/" className="text-blue-500">Log In</a>
                    </div>
                </div>
            </div>

            <div className="banner-signup col-span-8 text-white font-bold">
            </div>
        </div>
    )
}
