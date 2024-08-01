import React, {useEffect, useState} from "react";
import logo from "../../assets/images/Logo.svg";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
  selectAuthRole,
  selectAuthToken,
  selectCurrentUser,
  setLoginData,
} from "../../redux/features/auth/authSlice";
import {login} from "../../redux/features/auth/authActions";
import {getRoleFromToken} from "../../utils/tokenDecode";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);
  const roles = useSelector(selectAuthRole);
  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({username, password}));
  };

  useEffect(() => {
    if (token) {
      const userRoles = getRoleFromToken(token);
      dispatch(setLoginData({roles: userRoles}));
      const storedUsername = localStorage.getItem("username");

      if (userRoles.includes("ROLE_ADMIN")) {
        navigate("/dashboardadmin");
      } else if (userRoles.includes("ROLE_SEKOLAH") && storedUsername) {
        navigate(`/dashboard/${storedUsername}`);
      } else {
        console.error("Username is not available");
      }
    }
  }, [token, dispatch, navigate]);

  return (
    <div className="bg-dark-green">
      <div className="flex items-center justify-center h-screen space-x-10 divide-x-2">
        <div className="flex flex-col justify-center">
          <img src={logo} className="h-14 mb-3" alt="Logo" />
          <h1 className="text-gray-300 text-4xl font-montserrat font-semibold mb-3">
            Welcome to{" "}
            <a href="/" className="text-primary hover:text-green-700">
              Eduwave
            </a>
          </h1>
          <p className="text-gray-300 text-center text-sm">
            Jika belum ada akun
          </p>
          <Link
            to="/gabung"
            className="text-primary text-center underline hover:text-green-700">
            Daftar disini
          </Link>
        </div>
        <div className="text-white ps-10 max-w-xs">
          <h1 className="text-3xl font-semibold text-center">Login</h1>
          <form className="mt-5" onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 ${
                  error ? "border-red-500" : "border-white"
                } appearance-none focus:outline-none focus:ring-0 focus:border-primary peer`}
                placeholder=" "
                required
              />
              <label
                htmlFor="username"
                className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Username
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 ${
                  error ? "border-red-500" : "border-white"
                } appearance-none focus:outline-none focus:ring-0 focus:border-primary peer`}
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Password
              </label>
            </div>
            {error && (
              <p className="text-red-500 text-xs mt-1 max-w-xs">
                Username atau Password salah
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-green-700 text-white p-2 rounded-md mt-5">
              Login
            </button>
            {status === "loading" && <p>Loading...</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
