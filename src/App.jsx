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

const route  = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
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
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={route}/>
  );
}

export default App
