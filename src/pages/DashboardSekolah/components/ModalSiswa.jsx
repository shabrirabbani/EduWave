import React from "react";

export default function ModalSiswa({isOpen, onClose, data}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        <h2 className="text-xl font-bold mb-4 text-center">
          Detail Data Siswa
        </h2>

        <div className="grid grid-cols-3 gap-4 text-sm">
          <p className="font-semibold col-span-1">Nama</p>
          <p className="col-span-2">: {data.nama}</p>

          <p className="font-semibold col-span-1">NIS</p>
          <p className="col-span-2">: {data.NIS}</p>

          <p className="font-semibold col-span-1">Email</p>
          <p className="col-span-2">: {data.email}</p>

          <p className="font-semibold col-span-1">No HP</p>
          <p className="col-span-2">: {data.no_hp}</p>

          <p className="font-semibold col-span-1">No HP Ortu</p>
          <p className="col-span-2">: {data.no_hp_ortu}</p>

          <p className="font-semibold col-span-1">Alamat</p>
          <p className="col-span-2">: {data.alamat}</p>

          <p className="font-semibold col-span-1">Tagihan</p>
          <p className="col-span-2">: {data.tagihan}</p>

          <p className="font-semibold col-span-1">Status</p>
          <p className="col-span-2">
            : {data.is_active ? "Active" : "Non Active"}
          </p>

          <p className="font-semibold col-span-1">Status Pembayaran </p>
          <p className="col-span-2">: {data.status}</p>
        </div>

        <div className="mt-6 text-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
            onClick={onClose}>
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
