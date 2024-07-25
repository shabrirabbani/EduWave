import {
  IconLayoutDashboard,
  IconLogout,
  IconMenu,
  IconUser,
  IconUserPlus,
} from "@tabler/icons-react";
import React from "react";
import {Link} from "react-router-dom";
import logo from "../assets/images/Logo.svg";

export default function SidebarSekolah() {
  return (
    <div>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
        <span className="sr-only">Open sidebar</span>
        <IconMenu size={22} />
      </button>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <div className="h-full flex flex-col px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center ps-2.5 mb-5">
            <img src={logo} className="h-6 me-3 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              EduWave
            </span>
          </div>
          <ul className="space-y-2 font-medium flex-1">
            <li>
              <Link
                to={"/dashboard"}
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                <IconLayoutDashboard size={22} />
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to={'daftarsiswa'}
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                <IconUser size={22} />
                <span className="flex-1 ms-3 whitespace-nowrap">Siswa</span>
              </Link>
            </li>
            <li>
              <Link
                to={""}
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                <IconUser size={22} />
                <span className="flex-1 ms-3 whitespace-nowrap">Golongan</span>
              </Link>
            </li>
            <li>
              <Link
                to={""}
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                <IconUserPlus size={22} />
                <span className="flex-1 ms-3 whitespace-nowrap">Register</span>
              </Link>
            </li>
          </ul>
          <div className="mt-auto">
            <Link
              to={"/"}
              className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
              <IconLogout size={22} />
              <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
            </Link>
          </div>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">
        <h1 className="text-2xl font-bold">Selamat Datang ...</h1>
      </div>
    </div>
  );
}
