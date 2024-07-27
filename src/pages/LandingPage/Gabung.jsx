import React, { useEffect, useState } from 'react'
import FormGabung from './components/FormGabung'
import { initEmail, sendEmail, fileToBase64 } from '../../config/emailConfig';

export default function Gabung() {
    const [formData, setFormData] = useState({
      namaSekolah: "",
      npsn: "",
      email: "",
      kontak: "",
      logoBase64: "",
      certificateBase64: "",
    });

    const [logoFile, setLogoFile] = useState(null);
    const [certificateFile, setCertificateFile] = useState(null);

    // Inisialisasi EmailJS
    useEffect(() => {
      initEmail();
    }, []);

    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleFileChange = async (e) => {
      const {name, files} = e.target;
      if (name === "logo") {
        const base64 = await fileToBase64(files[0]);
        setLogoFile(base64);
        setFormData({...formData, logoBase64: base64});
      }
      if (name === "certificate") {
        const base64 = await fileToBase64(files[0]);
        setCertificateFile(base64);
        setFormData({...formData, certificateBase64: base64});
      }
    };


    const handleSubmit = async (e) => {
      e.preventDefault();

      const emailData = {
        namaSekolah: formData.namaSekolah,
        npsn: formData.npsn,
        email: formData.email,
        kontak: formData.kontak,
        logoBase64: formData.logoBase64,
        certificateBase64: formData.certificateBase64,
      };

      sendEmail(emailData)
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
        })
        .catch((error) => {
          console.error("FAILED...", error);
        });
    };


    
  return (
    <div className='bg-white'>
        <div className='max-w-screen-xl mx-auto'>
            <div className='text-center'>
                <h1 className='text-xl'>Bergabung Dengan Kami</h1>
                <p className=''>daftarkan sekolah anda melalui form dibawah ini</p>
            </div>
            <FormGabung 
                handleSubmit={handleSubmit} 
                formData={formData}
                handleChange={handleChange}
                handleFileChange={handleFileChange}
                />
        </div>
    </div>
  )
}
