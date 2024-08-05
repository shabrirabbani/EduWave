import React, {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {SekolahContext} from "../../context/AdminContext";
import Swal from "sweetalert2";

export default function RegisterAccount() {
  const {createSekolah, status, error} = useContext(SekolahContext);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    sekolah: "",
    noHp: "",
    npsn: "",
    email: "",
    password: "",
    logo: null,
  });
  const [errors, setErrors] = useState({
    noHp: "",
    npsn: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value, type, files} = e.target;
    if (type === "file") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      if (name === "noHp" || name === "npsn") {
        if (!/^\d*$/.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "Please enter a valid number",
          }));
          return; // Don't update formData if value is not a number
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
          }));
        }
      }
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };


 const handleSubmit = async (e) => {
   e.preventDefault();
   setIsLoading(true)

   // Buat FormData
   const formDataToSend = new FormData();

   // Tambahkan data JSON ke FormData
   formDataToSend.append(
     "sekolah_request",
     JSON.stringify({
       sekolah: formData.sekolah,
       npsn: formData.npsn,
       email: formData.email,
       noHp: formData.noHp,
       password: formData.password,
     })
   );

   // Tambahkan file gambar ke FormData
   if (formData.logo) {
     formDataToSend.append("logo", formData.logo);
   }

   try {
     await createSekolah(formDataToSend);
     if (status === "succeeded") {
      Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      }).fire({
        icon: "success",
        title: "Sekolah berhasil didaftarkan",
      });
      navigate("/dashboardadmin/listusers");
     }
   } catch (err) {
      Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      }).fire({
        icon: "error",
        title: "Gagal mendaftarkan sekolah",
      });
     console.error("Error creating sekolah:", err);
   } finally {
      setIsLoading(false);
    }
 };

  return (
    <div>
      <h1 className="text-lg font-semibold">Register Akun</h1>
      <div className="mt-5">
        <form className="max-w-xl" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Nama Sekolah
            </label>
            <input
              type="text"
              name="sekolah"
              value={formData.sekolah}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Nomor NPSN
            </label>
            <input
              type="text"
              name="npsn"
              value={formData.npsn}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2"
              required
            />
            {errors.npsn && <p style={{color: "red"}}>{errors.npsn}</p>}
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Email Sekolah
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Nomor HP
            </label>
            <input
              type="text"
              name="noHp"
              value={formData.noHp}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2"
              required
            />
            {errors.noHp && <p style={{color: "red"}}>{errors.noHp}</p>}
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Masukkan Logo Sekolah
            </label>
            <input
              type="file"
              name="logo"
              accept="image/*"
              onChange={handleChange}
              className="rounded-lg border border-gray-500 w-full mb-5"
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center flex">
            {isLoading && <div className="loader mr-2"></div>}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
