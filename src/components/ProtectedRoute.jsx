import React from 'react';
import { useSelector } from "react-redux";
import { selectAuthRole, selectAuthToken } from "../redux/features/auth/authSlice";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({children, allowedRoles}) => {
  const token = useSelector(selectAuthToken);
  const roles = useSelector(selectAuthRole) || [];
  const location = useLocation();

  // Cek apakah token ada dan apakah role termasuk dalam role yang diizinkan
  const hasAccess = token && allowedRoles.some((allowedRole) => roles.includes(allowedRole));

  if (hasAccess) {
    return children;
  }

  // Arahkan ke halaman login atau halaman lain jika tidak memiliki akses
  return <Navigate to="/login" state={{from: location}} />;
};

export default ProtectedRoute;