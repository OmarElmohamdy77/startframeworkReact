// import React from 'react'
import vector from '../../assets/avataaars.svg'
export default function Home() {
    return (
    <div className="container-flued text-center w-full h-screen   flex justify-center items-center flex-col bg-[#1abc9c] text-white">
        <div className="img">
        <img className='w-72' src={vector} alt="#"/>
        </div>
        <h1 className="text-4xl font-bold uppercase py-5 ">START FRAMEWORK</h1>
        <div className="lines flex justify-center items-center gap-3 pb-5">
            <div className="line1 h-1 w-20 bg-white"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line1 h-1 w-20 bg-white"></div>
        </div>
        <div className="">
            <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
    )
}