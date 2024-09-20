// import React from 'react'
import { useState } from 'react'
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'
export default function Portfolio() {
    let [showCard1, setShowCard1] = useState(false)
    let [showCard2, setShowCard2] = useState(false)
    let [showCard3, setShowCard3] = useState(false)
    let [showCard4, setShowCard4] = useState(false)
    let [showCard5, setShowCard5] = useState(false)
    let [showCard6, setShowCard6] = useState(false)
    return (
        <div className="container w-full h-full flex justify-center items-center flex-col relative  ">
            <h1 className="text-4xl font-bold uppercase mt-24 py-5 text-[#2c3e50] ">portfolio component</h1>
                <div className="lines flex justify-center items-center gap-3 pb-5 mb-5">
                    <div className="line1 h-1 w-20 bg-[#2c3e50]"></div>
                    <i className="fa-solid fa-star"></i>
                    <div className="line1 h-1 w-20 bg-[#2c3e50]"></div>
                </div>
            <div className="flex flex-wrap justify-center relative ">
                {/* card 1 */}
                <div onMouseEnter={() => setShowCard1(true)} className="p-4 max-w-sm mt-5 relative ">
                    <img src={img1} alt="" className='rounded' />
                    {showCard1 && <div onMouseLeave={() => setShowCard1(false)} className="max-w-sm h-64 w-[354px] acity-5 flex justify-center items-center absolute top-4 bg-[#1abc9c9f]">
                        <i className='fa-solid fa-plus text-white font-bold text-7xl'></i>
                    </div>}
                </div>
                {/* card 2 */}
                <div onMouseEnter={() => setShowCard2(true)} className="p-4 max-w-sm mt-5 relative">
                    <img src={img2} alt="" />
                    {showCard2 && <div onMouseLeave={() => setShowCard2(false)} className="max-w-sm h-64 w-[354px] acity-5 flex justify-center items-center absolute top-4 bg-[#1abc9c9f]">
                        <i className='fa-solid fa-plus text-white font-bold text-7xl'></i>
                    </div>}
                </div>
                {/* card 3 */}
                <div onMouseEnter={() => setShowCard3(true)} className="p-4 max-w-sm mt-5 relative">
                    <img src={img3} alt="" />
                    {showCard3 && <div onMouseLeave={() => setShowCard3(false)} className="max-w-sm h-64 w-[354px] acity-5 flex justify-center items-center absolute top-4 bg-[#1abc9c9f]">
                        <i className='fa-solid fa-plus text-white font-bold text-7xl'></i>
                    </div>}
                </div>
                {/* card 4 */}
                <div onMouseEnter={() => setShowCard4(true)} className="p-4 max-w-sm mt-5 relative ">
                    <img src={img1} alt="" className='rounded' />
                    {showCard4 && <div onMouseLeave={() => setShowCard4(false)} className="max-w-sm h-64 w-[354px] acity-5 flex justify-center items-center absolute top-4 bg-[#1abc9c9f]">
                        <i className='fa-solid fa-plus text-white font-bold text-7xl'></i>
                    </div>}
                </div>
                {/* card 5 */}
                <div onMouseEnter={() => setShowCard5(true)} className="p-4 max-w-sm mt-5 relative">
                    <img src={img2} alt="" />
                    {showCard5 && <div onMouseLeave={() => setShowCard5(false)} className="max-w-sm h-64 w-[354px] acity-5 flex justify-center items-center absolute top-4 bg-[#1abc9c9f]">
                        <i className='fa-solid fa-plus text-white font-bold text-7xl'></i>
                    </div>}
                </div>
                {/* card 6 */}
                <div onMouseEnter={() => setShowCard6(true)} className="p-4 max-w-sm mt-5 relative">
                    <img src={img3} alt="" />
                    {showCard6 && <div onMouseLeave={() => setShowCard6(false)} className="max-w-sm h-64 w-[354px] acity-5 flex justify-center items-center absolute top-4 bg-[#1abc9c9f]">
                        <i className='fa-solid fa-plus text-white font-bold text-7xl'></i>
                    </div>}
                </div>
            </div>
        </div>
    )
}