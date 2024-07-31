import React from 'react'
import animasi1 from '../../../assets/animation/animasi1.json'
import Lottie from 'lottie-react';

export default function HeroAbout() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto pb-10">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div>
            <Lottie animationData={animasi1} />
          </div>
          <div className="">
            <h1 className="font-montserrat text-center md:text-start text-5xl font-semibold text-primary tracking-wider">
              Eduwave
            </h1>
            <p className='max-w-lg pt-10 text-justify'>
              "Aplikasi kami dirancang untuk mempermudah proses pembayaran SPP
              sekolah secara online. Dengan fitur keamanan yang canggih dan
              antarmuka yang ramah pengguna, aplikasi ini membantu sekolah
              mengelola administrasi keuangan dengan lebih efisien dan
              transparan, serta memberikan kenyamanan bagi orang tua dalam
              melakukan pembayaran tanpa harus datang langsung ke sekolah."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
