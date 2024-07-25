import React from 'react'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Template() {
  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>
    </div>
  );
}
