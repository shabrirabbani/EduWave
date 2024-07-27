import React, { useState } from 'react'
import SidebarSekolah from './components/SidebarSekolah'
import { Outlet } from 'react-router-dom'

export default function TemplateSekolah() {
    const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarMinimized(!isSidebarMinimized);
    };

    const toggleSidebarOpen = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <>
      <SidebarSekolah
        isMinimized={isSidebarMinimized}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        toggleSidebarOpen={toggleSidebarOpen}
      />
      <div className={`content flex-1 p-5 transition-all duration-300 ${isSidebarMinimized ? 'ml-16' : 'ml-0 sm:ml-60'} ${isSidebarOpen ? 'ml-0' : ''}`}>
        <Outlet />
      </div>
    </>
  );
}
