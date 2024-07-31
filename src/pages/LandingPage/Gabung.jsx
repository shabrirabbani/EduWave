import React, {useEffect, useState} from "react";
import FormGabung from "./components/FormGabung";
import {initEmail, sendEmail, uploadFileToCloudinary} from "../../config/emailConfig";
import Swal from "sweetalert2";
import background1 from "../../assets/images/background1.svg";


export default function Gabung() {
  const [formData, setFormData] = useState({
    namaSekolah: "",
    npsn: "",
    email: "",
    kontak: "",
    logoUrl: "",
    certificateUrl: "",
  });

  const [logoFile, setLogoFile] = useState(null);
  const [certificateFile, setCertificateFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    initEmail();
  }, []);

  const handleChange = (e) => {
    const {name, value} = e.target;

    if (name === "npsn" || name === "kontak") {
      if (value === "" || /^\d*$/.test(value)) {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };


  const handleFileChange = async (e) => {
    const {name, files} = e.target;
    if (name === "logo") {
        setLogoFile(files[0]);
    }
    if (name === "certificate") {
        setCertificateFile(files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

     try {
       // Upload files to Cloudinary and get URLs
       const logoUrl = await uploadFileToCloudinary(logoFile);
       const certificateUrl = await uploadFileToCloudinary(certificateFile);

       const emailData = {
         namaSekolah: formData.namaSekolah,
         npsn: formData.npsn,
         email: formData.email,
         kontak: formData.kontak,
         logoUrl,
         certificateUrl,
       };

       await sendEmail(emailData);
        Swal.fire({
            icon: "success",
            title: "Berhasil Mendaftar!",
            html: `Akun anda akan segera kami verifikasi maximal 1x24 jam, silahkan cek email anda untuk mendapatkan <strong> id dan password </strong>. Terima kasih!`,
        });

       // Reset form data
       setFormData({
         namaSekolah: "",
         npsn: "",
         email: "",
         kontak: "",
         logoUrl: "",
         certificateUrl: "",
       });
       setLogoFile(null);
       setCertificateFile(null);
     } catch (error) {
         Swal.fire({
           icon: "error",
           title: "Gagal",
           text: "Gagal mengirim email, coba lagi.",
         });
     } finally {
       setIsLoading(false);
     }
  };

  return (
    <div className="relative bg-white">
      <img
        src={background1}
        alt=""
        className="absolute top-0 opacity-10 left-0 object-cover h-full w-full"
      />
      <div className="relative max-w-screen-xl mx-auto z-10">
        <div className="text-center pt-10">
          <h1 className="text-2xl font-bold pb-4">Bergabung Dengan Kami</h1>
          <p className="underline text-lg">Daftarkan sekolah Anda melalui formulir di bawah ini</p>
        </div>
        <div className=" bg-gray-100 rounded-xl shadow-lg mt-10 max-w-lg mx-auto p-5 border border-green-200">
          <FormGabung
            handleSubmit={handleSubmit}
            formData={formData}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
            isLoading={isLoading}
          />
        </div>
        <br /><br /><br />
      </div>
    </div>
  );
}
