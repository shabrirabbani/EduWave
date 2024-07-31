import React, { useEffect, useState } from 'react'
import TabelDaftarSiswa from './components/TabelDaftarSiswa';
import FilterDaftarSiswa from './components/FilterDaftarSiswa';

const initialdata = [
  {
    id: 1,
    nama: "Ahmad Ilham Ramadhan ahmad sbunaj jajdodn ahahahahahah hhhhh",
    nis: "1234567890",
    noHpOrtu: "081353241122",
    tglpembayaran: "12-12-2021",
    status: "Lunas",
    golongan: "golongan 1",
  },
  {
    id: 2,
    nama: "Budi Santoso",
    nis: "0987654321",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Belum Lunas",
    golongan: "golongan 2",
  },
  {
    id: 3,
    nama: "Cici Wijaya",
    nis: "1231231230",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Belum Lunas",
    golongan: "golongan 3",
  },
  {
    id: 4,
    nama: "Dodi Susanto",
    nis: "1231231230",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Belum Lunas",
    golongan: "golongan 4",
  },
  {
    id: 5,
    nama: "Euis Siti",
    nis: "1231231230",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Belum Lunas",
    golongan: "golongan 5",
  },
  {
    id: 6,
    nama: "Fauzi Rahman",
    nis: "1231231230",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Belum Lunas",
    golongan: "golongan 6",
  },
  {
    id: 7,
    nama: "Gita Wijaya",
    nis: "1231231230",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Belum Lunas",
    golongan: "golongan 7",
  },
  {
    id: 8,
    nama: "Harianto",
    nis: "1231231230",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Belum Lunas",
    golongan: "golongan 8",
  },
  {
    id: 9,
    nama: "Irfan Surya",
    nis: "1231231230",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Belum Lunas",
    golongan: "golongan 9",
  },
  {
    id: 10,
    nama: "Joko Susilo",
    nis: "1231231230",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Belum Lunas",
    golongan: "golongan 10",
  },
  {
    id: 11,
    nama: "Kiki Suryanto",
    nis: "1231231230",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Belum Lunas",
    golongan: "golongan 11",
  },
  {
    id: 12,
    nama: "Lina Sari",
    nis: "1231231230",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Belum Lunas",
    golongan: "golongan 12",
  },
  {
    id: 13,
    nama: "Maman Sulaeman",
    nis: "1231231230",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Belum Lunas",
    golongan: "golongan 13",
  },
  {
    id: 14,
    nama: "Nana Susanti",
    nis: "1231231230",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Belum Lunas",
    golongan: "golongan 14",
  },
  {
    id: 15,
    nama: "Oki Surya Wijaya",
    nis: "1231231230",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Belum Lunas",
    golongan: "golongan 15",
  },
  {
    id: 16,
    nama: "Paijo Susilo",
    nis: "1231231230",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Belum Lunas",
    golongan: "golongan 16",
  },
  {
    id: 17,
    nama: "Qonita Sari Wijaya",
    nis: "1231231230",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Belum Lunas",
  },
  {
    id: 18,
    nama: "Rudi Surya Wijaya",
    nis: "1231231230",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Lunas",
  },
  {
    id: 19,
    nama: "Siti Sari Wijaya",
    nis: "1231231230",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Lunas",
  },
  {
    id: 20,
    nama: "Tono Susilo",
    nis: "1231231230",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Lunas",
  },
  {
    id: 21,
    nama: "Ujang Surya Wijaya",
    nis: "1231231230",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Lunas",
  },
  {
    id: 22,
    nama: "Vina Sari Wijaya",
    nis: "1231231230",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Lunas",
  },
  {
    id: 23,
    nama: "Wawan Susilo",
    nis: "1231231230",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Lunas",
  },
  {
    id: 24,
    nama: "Xena Surya Wijaya",
    nis: "1231231230",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Lunas",
  },
  {
    id: 25,
    nama: "Yudi Susilo",
    nis: "1231231230",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Lunas",
  },
  {
    id: 26,
    nama: "Zainal Surya Wijaya",
    nis: "1231231230",
    noHpOrtu: "081234567890",
    tglpembayaran: "01-01-2022",
    status: "Lunas",
  },
];

export default function DaftarSiswa() {
  const [data, setData] = useState(initialdata) 
  const [filteredData, setFilteredData] = useState(initialdata);
  const [filterText, setFilterText] = useState("")
  const [filterStatus, setFilterStatus] = useState("")
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const newFilteredData = data.filter((item) => {
      const matchText =
        item.nama.toLowerCase().includes(filterText.toLowerCase()) ||
        item.nis.toLowerCase().includes(filterText.toLowerCase());
      const matchStatus =
        filterStatus === "" ||
        item.status.toLowerCase() === filterStatus.toLowerCase();
      return matchText && matchStatus;
    });
    setFilteredData(newFilteredData);
    setCurrentPage(1);
  }, [filterText, filterStatus, data]);

  
  const handleFilter = (search, status) => {
    setFilterText(search);
    setFilterStatus(status);
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-5">Daftar Seluruh Siswa</h1>
      <FilterDaftarSiswa onFilter={handleFilter} />
      <TabelDaftarSiswa
        data={filteredData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
