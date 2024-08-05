import React, {createContext, useState} from "react";
import axiosInstance from "../api/axiosinstance";

// Buat Context
export const SekolahContext = createContext();

// Buat Provider
export const SekolahProvider = ({children}) => {
  const [sekolah, setSekolah] = useState(null);
  const [email, setEmail] = useState("");
  const [noHp, setNoHp] = useState("");
  const [npsn, setNpsn] = useState("");
  const [password, setPassword] = useState("");
  const [urlLogo, setUrlLogo] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [sekolahList, setSekolahList] = useState({});

  // Fungsi untuk membuat sekolah
  const createSekolah = async (sekolahData) => {
    setStatus("loading");
    try {
      const response = await axiosInstance.post("/sekolah", sekolahData);
      setSekolah(response.data);
      setStatus("succeeded");
    } catch (err) {
      // Memeriksa apakah ada respons dari server
      setError(err.response ? err.response.data.message : err.message);
      setStatus("failed");
    }
  };

   const getAllSekolah = async () => {
     setStatus("loading");
     try {
       const response = await axiosInstance.get("/sekolah");
       setSekolahList(response.data.data);
       setStatus("succeeded");
     } catch (err) {
       setError(err.message);
       setStatus("failed");
     }
   };

   const updateSekolah = async (formData) => {
     setStatus("loading");
     try {
       const form = new FormData();

       // Tambahkan JSON sebagai string di dalam form-data
       const sekolahRequest = JSON.stringify({
         id: formData.id,
         sekolah: formData.sekolah,
         npsn: formData.npsn,
         email: formData.email,
         noHp: formData.noHp,
       });
       form.append("sekolah_request", sekolahRequest);

       // Tambahkan file logo
       if (formData.logo) {
         form.append("logo", formData.logo);
       }

       // Kirim data
       const response = await axiosInstance.put("/sekolah", form, {
         headers: {
           "Content-Type": "multipart/form-data",
         },
       });
       setSekolah(response.data);
       setStatus("succeeded");
     } catch (err) {
       setError(err.message);
       setStatus("failed");
     }
   };



     const deleteSekolah = async (id) => {
       setStatus("loading");
       try {
         await axiosInstance.delete(`/sekolah/${id}`);
         setSekolahList((prevList) =>
           prevList.filter((sekolah) => sekolah.id !== id)
         );
         setStatus("succeeded");
       } catch (err) {
         setError(err.message);
         setStatus("failed");
       }
     };

  // Context value
  const value = {
    sekolah,
    email,
    noHp,
    npsn,
    password,
    urlLogo,
    status,
    error,
    sekolahList,
    createSekolah,
    setSekolah,
    setEmail,
    setNoHp,
    setNpsn,
    setPassword,
    setUrlLogo,
    getAllSekolah,
    updateSekolah,
    deleteSekolah,
  };

  return (
    <SekolahContext.Provider value={value}>{children}</SekolahContext.Provider>
  );
};
