import React, {useState} from "react";

export default function FilterDaftarSiswa({onFilter}) {
  const [searchNama, setSearchNama] = useState("");
  const [searchNIS, setSearchNIS] = useState("");
  const [status, setStatus] = useState("");

  const handleSearchNamaChange = (e) => {
    const value = e.target.value;
    setSearchNama(value);
    onFilter(value, searchNIS, status);
  };

  const handleSearchNISChange = (e) => {
    const value = e.target.value;
    setSearchNIS(value);
    onFilter(searchNama, value, status);
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    setStatus(value);
    onFilter(searchNama, searchNIS, value);
  };

  return (
    <div className="mb-5">
      <form className="grid grid-cols-4 gap-6 items-end">
        <div className="relative">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Cari Nama
          </label>
          <input
            type="search"
            id="searchNama"
            value={searchNama}
            onChange={handleSearchNamaChange}
            className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Masukkan nama"
          />
        </div>
        <div className="relative">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Cari NIS
          </label>
          <input
            type="search"
            id="searchNIS"
            value={searchNIS}
            onChange={handleSearchNISChange}
            className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Masukkan NIS"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Status Pembayaran
          </label>
          <select
            id="statusPembayaran"
            value={status}
            onChange={handleStatusChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option value="">Semua</option>
            <option value="LUNAS">Lunas</option>
            <option value="BELUM_LUNAS">Belum Lunas</option>
          </select>
        </div>
      </form>
    </div>
  );
}
