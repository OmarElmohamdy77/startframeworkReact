
export default function Footer() {
    return (
        <>
        <footer className=" text-white  relative overflow-hidden bg-[#2c3e50]  ">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-3 md:grid-cols-3 gap-10">
                    <div className="text-center md:text-left">
                        <h3 className=" text-white  text-center m-4 mb-7  text-4xl  font-bold">LOCATION</h3>
                        <p className="text-center">2215 John Daniel Drive</p>
                        <br />
                        <p className="text-center">Clark, MO 65243</p>
                    </div>
                    <div className="text-center">
                        <h4 className=" text-white text-center m-4 mb-4 text-4xl font-bold  ">AROUND THE WEB</h4>
                        <div className="space-x-2">
                            <a href="#" className="rounded-full border-4 p-1 "><i className="fab fa-facebook-f mx-1 icon" /></a>
                            <a href="#" className="rounded-full border-4 p-1 "><i className="fab fa-twitter mx-1 icon" /></a>
                            <a href="#" className="rounded-full border-4 p-1 "><i className="fab fa-linkedin mx-1 icon" /></a>
                            <a href="#" className="rounded-full border-4 p-1 "><i className="fa-solid fa-globe mx-1 icon" /></a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h4 className=" text-white  text-center m-4 mb-4 text-4xl  font-bold ">ABOUT FREELANCER</h4>
                        <p className="text-center justify-center h-1 ">Freelance is a free to use, licensed Bootstrap theme created by Route</p>                    </div>
                </div>
            </div>
        </footer>
            <div className=" p-4 bg-[#1a252f] text-white   text-center w-full">
                <p className="text-center">Copyright © Your Website 2021.</p>
            </div>
        </>
    );
}