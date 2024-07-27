import React from 'react'
import logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="bg-dark-green">
      <div className="flex items-center justify-center h-screen space-x-10 divide-x-2">
        <div className="flex flex-col justify-center">
          <img src={logo} className="h-14 mb-3" />
          <h1 className="text-gray-300 text-4xl font-montserrat font-semibold mb-3">
            Welcome to <a href='/' className='text-primary hover:text-green-700'>Eduwave</a>
          </h1>
          <p className="text-gray-300 text-center text-sm">
            Jika belum ada akun
          </p>
          <Link className='text-primary text-center underline hover:text-green-700'>Daftar disini</Link>
        </div>
        <div className="text-white ps-10">
          <h1 className="text-3xl font-semibold text-center">Login</h1>
          <form className="mt-5">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="npsn"
                id="npsn"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="npsn"
                className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                NPSN
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                id="password"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Password
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-green-700 text-white p-2 rounded-md mt-5">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
