import React from 'react'
import SidebarSekolah from './components/SidebarSekolah'
import { Outlet } from 'react-router-dom'

export default function TemplateSekolah() {
  return (
    <>
        <SidebarSekolah />
        <div className="p-4 sm:ml-64">
            <Outlet />
        </div>
    </>
  )
}
