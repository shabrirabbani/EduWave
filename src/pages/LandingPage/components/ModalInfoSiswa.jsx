import React, { useState } from "react";
import numberFormatter from "../../../utils/numberFormatter";
import { IconX } from "@tabler/icons-react";
import { useSelector } from "react-redux";

export default function ModalInfoSiswa({ onClose, data, createTransaction, jumlahBayar, setJumlahBayar}) {
  const [error, setError] = useState("")
    const errorPayment = useSelector((state) => state.transaction.transactionError) || null;

  const handleChange = (e) => {
   const value = e.target.value;
   if (/^\d*\.?\d*$/.test(value)) {
     setJumlahBayar(value);
     setError("");
   } else {
     setError("Harap masukkan angka yang valid");
   }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTransaction();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        <div className="flex justify-end">
          <button onClick={onClose}>
            <IconX />
          </button>
        </div>
        <h2 className="text-xl font-bold mb-4 text-center">
          Detail Data Siswa
        </h2>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <p className="font-semibold col-span-1">Nama</p>
          <p className="col-span-2">
            : <span className="ms-3">{data.nama}</span>
          </p>

          <p className="font-semibold col-span-1">NIS</p>
          <p className="col-span-2">
            : <span className="ms-3">{data.NIS}</span>
          </p>

          <p className="font-semibold col-span-1">Tagihan</p>
          <p className="col-span-2">
            :{" "}
            <span className="ms-3 font-bold">
              {numberFormatter.format(data.tagihan)}
            </span>
          </p>

          <p className="font-semibold col-span-1">Sekolah</p>
          <p className="col-span-2">
            : <span className="ms-3">{data.sekolah}</span>
          </p>

          <p className="font-semibold col-span-1">Status Pembayaran</p>
          <div className="col-span-2">
            :
            <span className="ms-4">
              {data.status === "LUNAS" ? (
                <span className="bg-green-500 text-white text-xs font-medium me-2 p-2 rounded-lg">
                  {data.status}
                </span>
              ) : (
                <span className="bg-red-500 text-white text-xs font-medium me-2 p-2 rounded-lg">
                  {data.status}
                </span>
              )}
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-10">
          <label htmlFor="jumlahBayar" className="block text-sm font-bold">
            Masukkan Jumlah Bayar
          </label>
          <div className="flex flex-col">
            <input
              id="jumlahBayar"
              type="text"
              value={jumlahBayar}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
              placeholder="Jumlah Bayar"
              required
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            {errorPayment && (
              <p className="text-red-500 text-sm mt-1">Pilih sekolah sesuai dengan sekolah anda!</p>
            )}
            <button
              type="submit"
              className="mt-8 bg-primary hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg transition duration-300">
              BAYAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
