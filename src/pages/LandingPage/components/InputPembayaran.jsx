import React, { useState } from "react";
import {IconSearch} from "@tabler/icons-react";

const schools = [
  {value: "sma26", label: "SMA NEGERI 26 JAKARTA"},
    {value: "sma27", label: "SMA NEGERI 27 JAKARTA"},
    {value: "sma28", label: "SMA NEGERI 28 JAKARTA"},
    {value: "sma29", label: "SMA NEGERI 29 JAKARTA"},
    {value: "sma30", label: "SMA NEGERI 30 JAKARTA"},
  // Tambahkan lebih banyak opsi di sini
];


export default function InputPembayaran() {
    const [searchTerm, setSearchTerm] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedSchool, setSelectedSchool] = useState(null);

    const filteredSchools = schools.filter((school) =>
      school.label.toLowerCase().includes(searchTerm.toLowerCase())
    );


  return (
    <div className="pb-10">
      <form className="grid grid-cols-1 md:grid-cols-2 p-10 md:p-0 gap-5">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Pilih Sekolah"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
            className="bg-gray-50 shadow-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-3"
          />
          {showDropdown && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-lg shadow-md max-h-60 overflow-y-auto">
              {filteredSchools.length > 0 ? (
                filteredSchools.map((school) => (
                  <li
                    key={school.value}
                    onClick={() => {
                      setSelectedSchool(school);
                      setSearchTerm(school.label);
                      setShowDropdown(false);
                    }}
                    className="p-2 hover:bg-gray-200 cursor-pointer">
                    {school.label}
                  </li>
                ))
              ) : (
                <li className="p-2 text-gray-500 text-center">Tidak ditemukan</li>
              )}
            </ul>
          )}
        </div>
        <div>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only">
            Search
          </label>
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 shadow-md focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Masukkan Nomor Induk Siswa (NIS)"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-1 bg-primary hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2">
              <IconSearch size={20} stroke={3} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
