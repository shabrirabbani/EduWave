import React, { useState } from 'react'
import TabelDaftarSiswa from './components/TabelDaftarSiswa';
import FilterDaftarSiswa from './components/FilterDaftarSiswa';

const data = [
  {
    id: 1,
    nama: "Ahmad Ilham Ramadhan",
    nis: "1234567890",
    noHpOrtu: "081353241122",
    tglpembayaran: "12-12-2021",
    status: "Lunas",
  },
  {
    id: 2,
    nama: "Budi Santoso",
    nis: "0987654321",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Belum Lunas",
  },
];


export default function DaftarSiswa() {
  const [filterText, setFilterText] = useState("")
  const [filterStatus, setFilterStatus] = useState("")

  
  const handleFilter = (search, status) => {
    setFilterText(search);
    setFilterStatus(status);
  }

  const filteredData = data.filter((item) => {
    const matchText = item.nama.toLowerCase().includes(filterText.toLowerCase()) || item.nis.toLowerCase().includes(filterText.toLowerCase());
    const matchStatus = filterStatus === "" || item.status.toLowerCase() === filterStatus.toLowerCase();
    return matchText && matchStatus;
  });

  return (
    <div>
        <h1 className="text-lg font-semibold mx-2 mb-5">Daftar Siswa</h1>
        <FilterDaftarSiswa onFilter={handleFilter}/>
        <TabelDaftarSiswa data={filteredData}/>
    </div>
  );
}
