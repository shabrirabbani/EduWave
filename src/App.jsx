import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import DashboardAdmin from './pages/DashboardAdmin/DashboardAdmin';
import Template from './Template';
import LandingPage from './pages/LandingPage/LandingPage';
import RegisterAccount from './pages/DashboardAdmin/RegisterAccount';
import ListUserAdmin from './pages/DashboardAdmin/ListUserAdmin';
import TemplateSekolah from './TemplateSekolah';
import DashboardSekolah from './pages/DashboardSekolah/DashboardSekolah';
import DaftarSiswa from './pages/DashboardSekolah/DaftarSiswa';
import RegisterSiswa from './pages/DashboardSekolah/RegisterSiswa';
import Golongan from './pages/DashboardSekolah/Golongan';
import TemplateLP from './TemplateLP';
import Pembayaran from './pages/LandingPage/Pembayaran';
import Login from './pages/Login/Login';
import Gabung from './pages/LandingPage/Gabung';
import AboutUs from './pages/LandingPage/AboutUs';
import EditSiswa from './pages/DashboardSekolah/EditSiswa';

const route  = createBrowserRouter([
  {
    path: '/',
    element: <TemplateLP />,
    children: [
      {
        path: '/',
        element: <LandingPage/>
      },
      {
        path: 'pembayaran',
        element: <Pembayaran/>
      },
      {
        path: 'gabung',
        element: <Gabung/>
      },
      {
        path: 'aboutus',
        element: <AboutUs/>
      }
    ]
  },
  {
    path: '/dashboardadmin',
    element: <Template />,
    children: [
      {
        path: '/dashboardadmin',
        element: <DashboardAdmin />
      },
      {
        path: 'register',
        element: <RegisterAccount/>
      },
      {
        path: 'listusers',
        element: <ListUserAdmin/>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <TemplateSekolah/>,
    children: [
      {
        path:'/dashboard',
        element: <DashboardSekolah/>
      },
      {
        path: 'daftarsiswa',
        element: <DaftarSiswa/>
      },
      {
        path: 'register',
        element: <RegisterSiswa/>
      },
      {
        path: 'golongan',
        element: <Golongan/>
      },
      {
        path: 'edit/:id',
        element: <EditSiswa/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  }
])

function App() {
  return (
    <RouterProvider router={route}/>
  );
}

export default App
