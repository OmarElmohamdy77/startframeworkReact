// import React from 'react'

export default function About() {
    return (
        <div className="container bg-[#1abc9c] text-white  h-lvh flex justify-center items-center flex-col">
            <h1 className="text-4xl font-bold uppercase py-5 ">about component</h1>
            <div className="lines flex justify-center items-center gap-3 pb-5">
                <div className="line1 h-1 w-20 bg-white"></div>
                <i className="fa-solid fa-star"></i>
                <div className="line1 h-1 w-20 bg-white"></div>
            </div>
            <div className="pargraph flex justify-center items-center gap-4">
                <p className="w-1/3">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p className="w-1/3">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
        </div>
    )
}