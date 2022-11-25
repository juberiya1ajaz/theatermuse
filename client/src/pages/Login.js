import React, { useState } from 'react'
import { account } from '../services/appwriteConfig'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const loginUser = async (e) => {
        e.preventDefault()
        try {
            await account.createEmailSession(user.email, user.password)
            navigate("/home")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='grid grid-cols-12'>
            <div className="col-span-4 text-white font-bold bg-black min-h-screen pl-7">
                <div className="grid grid-rows-6 grid-flow-col min-h-screen items-center justify-items-start">
                    <div className="row-span-4 row-start-2 text-4xl">
                        <h2 className="mb-4 text-[2.79rem] self-center font-bold tracking-wider text-white">
                            APP NAME
                        </h2>
                        <h2 className="text-[2rem] self-center font-bold tracking-wider text-white">
                            Log In
                        </h2>
                        <div className="pt-10 pr-20">
                            <label className="text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="text"
                                name="Email"
                                placeholder="Write your Email"
                                className="w-full bg-black py-3 px-3 border hover: border-gray-500 rounded shadow text-base"
                                onChange={(e) => {
                                    setUser({
                                        ...user,
                                        email: e.target.value
                                    })
                                }} />
                        </div>
                        <div className="pt-2 pr-20">
                            <label className="text-sm font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Write your password"
                                className=" w-full bg-black py-3 px-3 border hover: border-gray-500 rounded shadow text-base"
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
                                className="text-center w-full py-4 bg-blue-700 hover:bg-blue-400 rounded-md text-white" onClick={loginUser}>
                                SIGN IN
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-end text-white'>
                        Don't have an account? <a href="/signup" className="text-blue-500">Register</a>
                    </div>
                </div>
            </div>

            <div className="banner-login col-span-8 text-white font-bold">
            </div>
        </div>
    )
}
