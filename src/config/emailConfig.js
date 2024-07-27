import emailjs from "emailjs-com";

export const initEmail = () => {
  emailjs.init("sa6O8swebi9zY7-VU");
};

export const sendEmail = (emailData) => {
  return emailjs.send("service_eduwave", "template_eduwave", emailData);
};

export const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const mimeType = file.type;
      const base64 = `data:${mimeType};base64,${reader.result.split(",")[1]}`;
      resolve(base64);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });

