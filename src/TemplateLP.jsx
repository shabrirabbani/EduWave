import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

export default function TemplateLP() {
  return (
    <div className="bg-gradient-to-br from-dark-green via-dark-green to-primary">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
