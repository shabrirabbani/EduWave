import { IconQuote } from '@tabler/icons-react';
import React from 'react'

export default function Comments() {
  return (
    <div className="max-w-screen-lg mx-auto py-20">
      <div className="bg-secondary rounded-2xl shadow-green-600 shadow-lg">
        <IconQuote size={100} stroke={2.5} className='-translate-y-12 translate-x-5 -mb-3 text-primary'/>
        <h1 className="text-center text-3xl font-montserrat font-semibold -translate-y-10">
          Apa kata mereka ?
        </h1>
        <div
          id="default-carousel"
          className="relative w-full"
          data-carousel="slide">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-80 -mt-10">
            <div className="hidden duration-1000 ease-in-out" data-carousel-item>
              <div className="absolute flex justify-center w-fit -translate-x-1/2 -translate-y-20 top-1/2 left-1/2">
                <p className="font-normal text-lg text-center text-gray-700 ">
                  "Dengan aplikasi pembayaran uang SPP online ini, proses
                  pembayaran menjadi lebih mudah dan cepat. Tidak perlu lagi
                  antre di sekolah, semua bisa dilakukan dari rumah. Sangat
                  membantu!"
                </p>
              </div>
            </div>
            <div className="hidden duration-1000 ease-in-out" data-carousel-item>
              <div className="absolute flex justify-center w-fit -translate-x-1/2 -translate-y-20 top-1/2 left-1/2">
                <p className="font-normal text-lg text-center text-gray-700 ">
                  "Aplikasi ini sangat memudahkan orang tua dalam membayar uang
                  SPP. Transaksi aman, cepat, dan langsung terverifikasi. Sangat
                  puas dengan layanannya!"
                </p>
              </div>
            </div>
            <div className="hidden duration-1000 ease-in-out" data-carousel-item>
              <div className="absolute flex justify-center w-fit -translate-x-1/2 -translate-y-20 top-1/2 left-1/2">
                <p className="font-normal text-lg text-center text-gray-700 ">
                  "Sekarang pembayaran SPP anak saya lebih praktis. Aplikasi ini
                  sangat user-friendly dan membantu kami menghemat waktu.
                  Recomended banget!"
                </p>
              </div>
            </div>
            <div className="hidden duration-1000 ease-in-out" data-carousel-item>
              <div className="absolute flex justify-center w-fit -translate-x-1/2 -translate-y-20 top-1/2 left-1/2">
                <p className="font-normal text-lg text-center text-gray-700 ">
                  "Dengan aplikasi ini, saya tidak perlu khawatir tentang lupa
                  membayar uang SPP. Notifikasi pengingatnya sangat berguna.
                  Terima kasih!"
                </p>
              </div>
            </div>
          </div>
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 bg-primary p-1 rounded-full">
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"></button>
          </div>
          <button
            type="button"
            className="absolute -top-10 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-dark-green">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute -top-10 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-dark-green">
              <svg
                className="w-4 h-4 text-white "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
