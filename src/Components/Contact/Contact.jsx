// import React from 'react'

import { useState } from "react"

export default function Contact() {

    let [focusName, setFocusName] = useState(false);
    let [focusAge, setFocusAge] = useState(false);
    let [focuspasswoed, setFocuspasswoed] = useState(false);
    let [focusEmail, setFocusEmail] = useState(false);
    return (
        <div className="container w-full h-screen flex justify-center items-center flex-col">
                <h1 className="text-4xl font-bold uppercase mt-12 py-5 text-[#2c3e50] ">CONTACT section</h1>
                <div className="lines flex justify-center items-center gap-3 pb-5 mb-5">
                    <div className="line1 h-1 w-20 bg-[#2c3e50]"></div>
                    <i className="fa-solid fa-star"></i>
                    <div className="line1 h-1 w-20 bg-[#2c3e50]"></div>
                </div>
            <form className="max-w-md mx-auto p-4 w-full flex flex-col justify-center items-center bg-white">
                <div className="mb-4">
                    {focusName &&  <label htmlFor="name" className="block mb-1 text-[#1abc9c]">user Name</label> }
                    <input type="text" id="name" onKeyUp={() => setFocusName(true)} placeholder="userName" className="w-[600px] py-4 px-4 rounded border-b-2 border-gray-300 focus:outline-none " />
                </div>
                <div className="mb-4">
                    {focusAge && <label htmlFor="age" className="block mb-1 text-[#1abc9c]">user Age</label>}
                    <input type="number" id="age" onKeyUp={() => setFocusAge(true)} placeholder="userAge" className="w-[600px] py-4 px-4 rounded border-b-2 border-gray-300 focus:outline-none " />
                </div>
                <div className="mb-4">
                    {focusEmail && <label htmlFor="email" className="block mb-1 text-[#1abc9c]">user Email</label>}
                    <input type="email" id="email" onKeyUp={() => setFocusEmail(true)} placeholder="userEmail" className="w-[600px] py-4 px-4 rounded border-b-2 border-gray-300 focus:outline-none " />
                </div>
                <div className="mb-4">
                    {focuspasswoed && <label htmlFor="password" className="block mb-1 text-[#1abc9c]">user Password</label>}
                    <input type="password" id="password" onKeyUp={() => setFocuspasswoed(true)} placeholder="userPassword" className="w-[600px] py-2 px-4 rounded border-b-2 border-gray-300 focus:outline-none " />
                </div>
                
                
                <button type="submit" className="py-4 px-4 text-white rounded bg-[#1abc9c]">send Message</button>
            </form>

        </div>
    )
}