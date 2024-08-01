import React from "react";

export default function ModalSiswa({ isOpen, onClose, data }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-1/2">
        <h2 className="text-lg font-bold mb-4">Detail Data</h2>
        <p>
          <strong>Nama:</strong> {data.nama}
        </p>
        <p>
          <strong>NIS:</strong> {data.NIS}
        </p>
        <p>
          <strong>Email :</strong> {data.email}
        </p>
        <p>
          <strong>No HP :</strong> {data.no_hp}
        </p>
        <p>
          <strong>No HP Ortu:</strong> {data.no_hp_ortu}
        </p>
        <p>
          <strong>Alamat :</strong> {data.alamat}
        </p>
        <p>
          <strong>Tagihan :</strong> {data.tagihan}
        </p>
        <p>
          <strong>Status :</strong> {data.is_active ? "Active" : "Non Active"}
        </p>

        <p>
          <strong>Status Pembayaran:</strong> {data.status}
        </p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={onClose}
        >
          Tutup
        </button>
      </div>
    </div>
  );
}
