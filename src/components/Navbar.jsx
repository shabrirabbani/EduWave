import React from 'react'
import logo from '../assets/images/Logo.svg'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="bg-transparent">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Eduwave Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Eduwave
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:items-center">
              <li>
                <a
                  href='/'
                  className="block py-2 px-3 text-white hover:bg-primary md:hover:bg-transparent rounded md:bg-transparent md:p-0 md:hover:text-primary "
                  aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <Link
                  to={'pembayaran'}
                  className="block py-2 px-3 text-white rounded hover:bg-primary md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">
                  Pembayaran
                </Link>
              </li>
              <li>
                <Link
                  to={'gabung'}
                  className="block py-2 px-3 text-white rounded hover:bg-primary md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">
                  Gabung
                </Link>
              </li>
              <li>
                <Link
                  to={'aboutus'}
                  className="block py-2 px-3 text-white rounded hover:bg-primary md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">
                  Tentang Kami
                </Link>
              </li>
              <div>
                <Link to={'/login'}>
                  <button className='bg-primary hover:bg-green-600 px-5 py-2 rounded-lg text-white'>Login</button>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
