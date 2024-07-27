import {
    IconChevronLeft,
    IconChevronRight,
  IconLayoutDashboard,
  IconLogout,
  IconMenu2,
  IconSubtask,
  IconUser,
  IconUserPlus,
} from "@tabler/icons-react";
import React from "react";
import {Link, NavLink} from "react-router-dom";
import logo from "../assets/images/Logo.svg";
import logo2 from "../assets/react.svg";

export default function SidebarSekolah({
  isMinimized,
  isOpen,
  toggleSidebar,
  toggleSidebarOpen,
}) {
  return (
    <div>
      {/* Mobile hamburger menu button */}
      <button
        onClick={toggleSidebarOpen}
        className="p-4 md:hidden focus:outline-none fixed z-50">
        <IconMenu2 size={24} />
      </button>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 h-screen  transition-all duration-300 sm:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${isMinimized ? "w-16" : "w-60"} bg-dark-green`}
        aria-label="Sidebar">
        <div
          className={`h-full flex flex-col px-3 py-4 overflow-y-auto text-white transition-all duration-300`}>
          <div className="flex items-center ps-2.5 mb-5">
            {!isMinimized && (
              <>
                <img
                  src={logo}
                  className="h-6 me-3 sm:h-9"
                  alt="Eduwave Logo"
                />
                <span className="self-center text-xl font-semibold whitespace-nowrap">
                  EduWave
                </span>
              </>
            )}
            {isMinimized ? (
              <button onClick={toggleSidebar}>
                <IconChevronRight size={24} />
              </button>
            ) : (
              <button onClick={toggleSidebar} className="ms-10">
                <IconChevronLeft size={24} />
              </button>
            )}
          </div>
          <ul className="space-y-2 font-medium flex-1 text-white">
            <li>
              <NavLink
                to={"/dashboard"}
                className="flex items-center p-2 rounded-lg hover:text-primary group transition-all duration-300 ease-in-out">
                <IconLayoutDashboard size={22} />
                {!isMinimized && <span className="ms-3">Dashboard</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"daftarsiswa"}
                className={({isActive}) =>
                  isActive
                    ? "flex items-center p-2 bg-secondary text-gray-800 rounded-full transition-all duration-300 ease-in-out transform"
                    : "flex items-center p-2 rounded-lg hover:text-primary group transition-all duration-300 ease-in-out"
                }>
                <IconUser size={22} />
                {!isMinimized && <span className="ms-3">Siswa</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"golongan"}
                className={({isActive}) =>
                  isActive
                    ? "flex items-center p-2 bg-secondary text-gray-800 rounded-full transition-all duration-300 ease-in-out transform"
                    : "flex items-center p-2 rounded-lg hover:text-primary group transition-all duration-300 ease-in-out"
                }>
                <IconSubtask size={22} />
                {!isMinimized && <span className="ms-3">Golongan</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"register"}
                className={({isActive}) =>
                  isActive
                    ? "flex items-center p-2 bg-secondary text-gray-800 rounded-full transition-all duration-300 ease-in-out transform"
                    : "flex items-center p-2 rounded-lg hover:text-primary group transition-all duration-300 ease-in-out"
                }>
                <IconUserPlus size={22} />
                {!isMinimized && <span className="ms-3">Register</span>}
              </NavLink>
            </li>
            <li>
              <Link
                to={"/"}
                className="flex items-center p-2 rounded-lg hover:text-primary group transition-all duration-300 ease-in-out">
                <IconLogout size={22} />
                {!isMinimized && <span className="ms-3">Logout</span>}
              </Link>
            </li>
          </ul>
          <div className="mt-auto">
            <div className="flex flex-col justify-center items-center">
              <img src={logo2} alt="logo" className="h-7" />
              {!isMinimized && (
                <h1 className="font-semibold text-center">
                  SMA NEGERI 26 JAKARTA
                </h1>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for closing sidebar on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebarOpen}></div>
      )}
    </div>
  );
}
