import {jwtDecode} from "jwt-decode";

export const decodeToken = (token) => {
  try {
    return jwtDecode(token);
  } catch (e) {
    console.error("Invalid token:", e);
    return null;
  }
};

export const getRoleFromToken = (token) => {
  const decodedToken = decodeToken(token);
  if (decodedToken && decodedToken.roles) {
    return decodedToken.roles;
  }
  return [];
};


