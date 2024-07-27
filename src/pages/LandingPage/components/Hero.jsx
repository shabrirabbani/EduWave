import React from 'react'
import image1 from "../../../assets/images/lp1.svg";

export default function Hero() {
  return (
    <div className="max-w-screen-xl mx-auto pb-10">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="">
            <h1 className="font-montserrat text-center md:text-start text-5xl font-semibold text-primary tracking-wider">
            Edukasi Terbaik <br />
            <span className="text-white">
                dimulai dari sarana <br /> dan prasarana yang <br /> memadai
            </span>
            </h1>
            <form className="mt-10 text-center md:text-start">
            <input
                type="text"
                className="rounded-lg bg-green-800/30 shadow-xl text-white w-96 focus:border-primary focus:ring-primary"
                placeholder="Cari sekolah"
            />
            <button className="bg-primary hover:bg-green-700 py-2 px-8 rounded-lg shadow-lg ms-5 text-white">
                Cari
            </button>
            </form>
        </div>
        <div>
            <img src={image1} alt="" />
        </div>
        </div>
    </div>
  );
}
