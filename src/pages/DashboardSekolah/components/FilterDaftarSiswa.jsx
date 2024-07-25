import { IconSearch } from '@tabler/icons-react';
import React, { useState } from 'react'

export default function FilterDaftarSiswa({onFilter}) {
    const [search, setSearch] = useState('')
    const [status, setStatus] = useState('')

    const handleSearchChange = (e) => {
        const value = e.target.value
        setSearch(value)
        onFilter(value, status)
    }

    const handleStatusChange = (e) => {
        const value = e.target.value
        setStatus(value)
        onFilter(search, value)
    }

  return (
    <div className="mb-5">
      <form className=" grid grid-cols-4 gap-6">
        <div className="relative">
          <input
            type="search"
            id="search"
            value={search}
            onChange={handleSearchChange}
            className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Cari NIS / NAMA"
            required
          />
        </div>
        <div>
        <select
          id="statuspembayaran"
          value={status}
          onChange={handleStatusChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
          <option selected>Status Pembayaran</option>
          <option value="">Semua</option>
          <option value="lunas">Lunas</option>
          <option value="belum lunas">Belum Lunas</option>
        </select>
        </div>
      </form>
    </div>
  );
}
