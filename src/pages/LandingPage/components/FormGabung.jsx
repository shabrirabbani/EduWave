import React from "react";

export default function FormGabung({
  handleSubmit,
  formData,
  handleChange,
  handleFileChange,
  isLoading
}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Nama Sekolah
          </label>
          <input
            type="text"
            name="namaSekolah"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2"
            value={formData.namaSekolah || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Email Sekolah
          </label>
          <input
            type="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2"
            placeholder="name@gmail.com"
            value={formData.email || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Nomor Kontak (HP/Telp)
          </label>
          <input
            type="text"
            name="kontak"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2"
            value={formData.kontak || ""}
            onChange={handleChange}
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2"
            value={formData.npsn || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-5">
          <label className=" mb-2 text-sm font-medium text-gray-900 flex">
            Masukkan Surat Izin Operasional
            <span className="ms-2 relative group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>
              <div className="absolute w-52 border border-gray-300 shadow-lg hidden group-hover:block bg-gray-800 text-xs  text-white rounded-lg py-2 px-3 bottom-full mb-2 left-1/2 transform -translate-x-1/2">
                Ini diperlukan agar kami dapat memvalidasi data sekolah anda
              </div>
            </span>
          </label>
          <input
            type="file"
            name="certificate"
            accept="image/*.pdf"
            onChange={handleFileChange}
            className="rounded-lg border border-gray-500 w-full"
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
            onChange={handleFileChange}
            className="rounded-lg border border-gray-500 w-full mb-5"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-white bg-primary hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center flex">
            {isLoading && <div className="loader mr-2"></div>}
            Gabung Sekarang
          </button>
        </div>
      </form>
    </div>
  );
}
