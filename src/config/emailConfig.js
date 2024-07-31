import emailjs from "emailjs-com";
import axios from "axios";

export const initEmail = () => {
  emailjs.init("sa6O8swebi9zY7-VU");
};

export const sendEmail = (formData) => {
  const templateParams = {
    namaSekolah: formData.namaSekolah,
    npsn: formData.npsn,
    email: formData.email,
    kontak: formData.kontak,
    logoUrl: formData.logoUrl,
    certificateUrl: formData.certificateUrl,
  };

  return emailjs.send("service_eduwave", "template_eduwave", templateParams);
};

export const uploadFileToCloudinary = async (file) => {
  const cloudName = "dz0mb347n";
   const uploadPreset = "upload_eduwae";
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  const response = await axios.post(
    `https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`,
    formData
  );
  return response.data.secure_url;
};
