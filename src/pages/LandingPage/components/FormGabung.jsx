import React from 'react'

export default function FormGabung({handleSubmit, formData, handleChange, handleFileChange}) {
  return (
    <div>
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900">
            Nama Sekolah
          </label>
          <input
            type="text"
            name='namaSekolah'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
            value={formData.namaSekolah}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900">
            Email Sekolah
          </label>
          <input
            type="email"
            name='email'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
            placeholder="name@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900">
            Nomor Kontak (HP/Telp)
          </label>
          <input
            type="text"
            name='kontak'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
            value={formData.kontak}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900">
            Nomor NPSN
          </label>
          <input
            type="text"
            name="npsn"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
            value={formData.npsn}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900">
            Masukkan Surat Izin Operasional
          </label>
          <input
            type="file"
            name="logo"
            accept="application/pdf"
            onChange={handleFileChange}
            required
            className="rounded-lg border border-gray-500"
          />
        </div>
        <div className="mb-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900">
            Masukkan Logo Sekolah
          </label>
          <input
            type="file"
            name="logo"
            accept="image/png"
            onChange={handleFileChange}
            required
            className="rounded-lg border border-gray-500"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
          Submit
        </button>
      </form>
    </div>
  );
}
