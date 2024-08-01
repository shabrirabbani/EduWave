import React, {useEffect, useState, useContext} from "react";
import {SekolahContext} from "../../../context/AdminContext";

export default function ModalEdit({isOpen, onClose, selectedItem}) {
  if (!isOpen) return null;

  const {updateSekolah} = useContext(SekolahContext);

  const [formData, setFormData] = useState({
    id: "",
    sekolah: "",
    npsn: "",
    email: "",
    no_hp: "",
    logo: null, // Change to null or File object
  });
  const [logoPreview, setLogoPreview] = useState("");

  useEffect(() => {
    if (selectedItem) {
      setFormData({
        id: selectedItem.id || "",
        sekolah: selectedItem.sekolah || "",
        npsn: selectedItem.npsn || "",
        email: selectedItem.email || "",
        no_hp: selectedItem.no_hp || "",
        logo: selectedItem.logo || null, // Set to null if no logo
      });
      setLogoPreview(selectedItem.logo || ""); // Set preview URL if exists
    }
  }, [selectedItem]);

  useEffect(() => {
    // Clean up the object URL when the component unmounts
    return () => {
      if (logoPreview && logoPreview.startsWith("blob:")) {
        URL.revokeObjectURL(logoPreview);
      }
    };
  }, [logoPreview]);

 const handleChange = (e) => {
   const {name, value, type, files} = e.target;

   if (type === "file") {
     if (files && files[0]) {
       setFormData((prev) => ({
         ...prev,
         [name]: files[0],
       }));
       setLogoPreview(URL.createObjectURL(files[0]));
     }
   } else {
     setFormData((prev) => ({
       ...prev,
       [name]: value,
     }));
   }
 };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("FormData state sebelum dikirim:", formData); 

    const formDataToSend = new FormData();

    formDataToSend.append(
      "sekolah_request",
      JSON.stringify({
        id: formData.id,
        sekolah: formData.sekolah,
        npsn: formData.npsn,
        email: formData.email,
        no_hp: formData.no_hp,
      })
    );
    if (formData.logo) {
      formDataToSend.append("logo", formData.logo);
    }

    for (let pair of formDataToSend.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`); // Log FormData entries
    }

    try {
      await updateSekolah(formDataToSend);
    } catch (err) {
        console.error("Gagal mengirim data:", err.message);
    }
    onClose(); // close modal after update
  };

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white p-5 rounded-lg shadow-lg w-1/2">
          <h2 className="text-lg font-bold mb-4">Edit Sekolah</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="sekolah"
                className="block mb-2 text-sm font-medium text-gray-900">
                Nama Sekolah
              </label>
              <input
                id="sekolah"
                name="sekolah"
                type="text"
                value={formData.sekolah}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2 mb-5"
              />
            </div>
            <div>
              <label
                htmlFor="npsn"
                className="block mb-2 text-sm font-medium text-gray-900">
                NPSN
              </label>
              <input
                id="npsn"
                name="npsn"
                type="text"
                value={formData.npsn}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2 mb-5"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2 mb-5"
              />
            </div>
            <div>
              <label
                htmlFor="no_hp"
                className="block mb-2 text-sm font-medium text-gray-900">
                Kontak Sekolah
              </label>
              <input
                id="no_hp"
                name="no_hp"
                type="text"
                value={formData.no_hp}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2 mb-5"
              />
            </div>
            <div>
              <label
                htmlFor="logo"
                className="block mb-2 text-sm font-medium text-gray-900">
                Logo
              </label>
              {logoPreview && (
                <img
                  src={logoPreview}
                  alt="Logo Preview"
                  className="w-32 h-32 object-cover mb-2"
                />
              )}
              <input
                id="logo"
                name="logo"
                type="file"
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full mb-5"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-primary hover:bg-green-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4">
              Simpan
            </button>
            <button
              type="button"
              className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4 ms-4"
              onClick={onClose}>
              Batal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
