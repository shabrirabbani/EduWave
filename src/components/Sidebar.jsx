import { IconLayoutDashboard, IconLogout, IconUser, IconUserPlus } from '@tabler/icons-react';
import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo.svg';
import Swal from 'sweetalert2';

export default function Sidebar() {

   const handleLogout = () => {
     Swal.fire({
       title: "Logout",
       text: "Are you sure you want to logout?",
       icon: "warning",
       showCancelButton: true,
       confirmButtonColor: "#3085d6",
       cancelButtonColor: "#d33",
       confirmButtonText: "Yes",
       cancelButtonText: "No",
     }).then((result) => {
       if (result.isConfirmed) {
         localStorage.clear();
         window.location.href = "/";
       }
     });
   };

  return (
    <div>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <div className="h-full flex flex-col px-3 py-4 overflow-y-auto bg-gray-800 text-white">
          <a href="" className="flex items-center ps-2.5 mb-5">
            <img src={logo} className="h-6 me-3 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              EduWave
            </span>
          </a>
          <ul className="space-y-2 font-medium flex-1">
            <li>
              <Link
                to={"/dashboardadmin"}
                className="flex items-center p-2 text-white rounded-lg  hover:bg-gray-100 hover:text-black  group">
                <IconLayoutDashboard size={22} />
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to={"listusers"}
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 hover:text-black  group">
                <IconUser size={22} />
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
              </Link>
            </li>
            <li>
              <Link
                to={"register"}
                className="flex items-center p-2 text-white rounded-lg  hover:bg-gray-100 hover:text-black  group">
                <IconUserPlus size={22} />
                <span className="flex-1 ms-3 whitespace-nowrap">Register</span>
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center p-2 text-white rounded-lg  hover:bg-gray-100 hover:text-black  group">
                <IconLogout size={22} />
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">
        <h1 className="text-2xl font-bold">Selamat Datang ...</h1>
      </div>
    </div>
  );
}
