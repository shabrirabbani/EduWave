import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

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

export default function EditSiswa() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [editedData, setEditedData] = useState(null);


 useEffect(() => {
   const siswa = initialdata.find((s) => s.id === parseInt(id));
   if (siswa) {
     setEditedData(siswa);
   } else {
     navigate("/dashboard/daftarsiswa");
   }
 }, [id, navigate]);

  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setEditedData({...editedData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data disimpan:", editedData);
    navigate("/dashboard/daftarsiswa");
  };

  if (!editedData) return <div>Loading...</div>;


  return (
    <div className="ms-5">
      <h1 className="text-2xl font-semibold">Edit Siswa</h1>
      <div className="mt-5">
        <form className="mx-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6 space-x-6">
            <div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="nama"
                  id="nama"
                  value={editedData.nama}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="nama"
                  className="peer-focus:font-medium absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Nama Siswa
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="nis"
                  id="nis"
                  value={editedData.nis}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="nis"
                  className="peer-focus:font-medium absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Nomor Induk Siswa (NIS)
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={editedData.email}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Email Siswa
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="nohpsiswa"
                  id="nohpsiswa"
                  value={editedData.nohpsiswa}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="nohpsiswa"
                  className="peer-focus:font-medium absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Nomor HP Siswa
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="nohportu"
                  id="nohportu"
                  value={editedData.noHpOrtu}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="nohportu"
                  className="peer-focus:font-medium absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Nomor HP Orang Tua
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="alamat"
                  id="alamat"
                  value={editedData.alamat}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="alamat"
                  className="peer-focus:font-medium absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Alamat
                </label>
              </div>
            </div>
            <div className="space-y-6 max-w-md bg-gray-200 border border-green-400 p-5 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">Uang Pembayaran</h3>
              <div>
                <label
                  htmlFor="golongan"
                  className="block mb-2 text-sm font-medium text-gray-90">
                  Pilih Golongan
                </label>
                <select
                  id="golongan"
                  name="golongan"
                  value={editedData.golongan}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2">
                  <option value="">Pilih Golongan</option>
                  <option value="1">Golongan 1</option>
                  <option value="2">Golongan 2</option>
                  <option value="3">Golongan 3</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="tagihan"
                  className="block mb-2 text-sm font-medium text-gray-900">
                  Tagihan
                </label>
                <input
                  type="text"
                  id="tagihan"
                  value={editedData.tagihan}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
                  disabled
                />
              </div>
              <div>
                <label
                  htmlFor="status_pembayaran"
                  className="block mb-2 text-sm font-medium text-gray-900">
                  Status Pembayaran
                </label>
                <select
                  id="status_pembayaran"
                  name="status_pembayaran"
                  value={editedData.status}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2">
                  <option value="Belum Bayar">Belum Bayar</option>
                  <option value="Lunas">Lunas</option>
                </select>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-primary hover:bg-green-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center me-5">
            Simpan
          </button>
          <button
            type="button"
            onClick={() => navigate("/dashboard/daftarsiswa")}
            className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            Batal
          </button>
        </form>
      </div>
    </div>
  );
}
