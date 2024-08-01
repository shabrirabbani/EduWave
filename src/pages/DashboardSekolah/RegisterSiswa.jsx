import React, { useEffect, useState } from "react";

const dataGolongan = [
  { id: 1, nama: "Golongan 1", jumlah: "Rp.1.500.000" },
  { id: 2, nama: "Golongan 2", jumlah: "Rp.2.000.000" },
  { id: 3, nama: "Golongan 3", jumlah: "Rp.2.500.000" },
  { id: 4, nama: "Golongan 4", jumlah: "Rp.3.000.000" },
];

export default function RegisterSiswa() {
  const [selectedGolongan, setSelectedGolongan] = useState("");
  const [tagihan, setTagihan] = useState("");

  const handleGolonganChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedGolongan(selectedValue);

    const selectedGolonganData = dataGolongan.find(
      (golongan) => golongan.nama === selectedValue
    );
    setTagihan(selectedGolonganData ? selectedGolonganData.jumlah : "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data disimpan");
  };

  return (
    <div className="ms-5">
      <h1 className="text-2xl font-semibold">Register Siswa</h1>
      <div className="mt-5">
        <form onSubmit={handleSubmit} class=" mx-auto">
          <div className="grid grid-cols-2 gap-6 space-x-6">
            <div className="">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="namasiswa"
                  id="namasiswa"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  for="namasiswa"
                  class="peer-focus:font-medium absolute text-sm text-gray-600  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nama Siswa
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="nis"
                  id="nis"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  for="nis"
                  class="peer-focus:font-medium absolute text-sm text-gray-600  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nomor Induk Siswa (NIS)
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  for="email"
                  class="peer-focus:font-medium absolute text-sm text-gray-600  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email Siswa
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="nohpsiswa"
                  id="nohpsiswa"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  for="nohpsiswa"
                  class="peer-focus:font-medium absolute text-sm text-gray-600  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nomor HP Siswa
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="nohportu"
                  id="nohportu"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  for="nohportu"
                  class="peer-focus:font-medium absolute text-sm text-gray-600  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nomor HP Orang Tua
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="alamat"
                  id="alamat"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  for="alamat"
                  class="peer-focus:font-medium absolute text-sm text-gray-600  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Alamat
                </label>
              </div>
            </div>
            <div className="space-y-6 max-w-md bg-gray-200 border border-green-400 p-5 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">Uang Pembayaran</h3>
              <div className="">
                <label
                  for="golongan"
                  className="block mb-2 text-sm font-medium text-gray-90"
                >
                  Pilih Golongan
                </label>
                <select
                  id="golongan"
                  value={selectedGolongan}
                  onChange={handleGolonganChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2 "
                >
                  <option value="">Pilih Golongan</option>
                  {dataGolongan.map((golongan) => (
                    <option key={golongan.id} value={golongan.nama}>
                      {golongan.nama}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="tagihan"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Tagihan
                </label>
                <input
                  type="text"
                  id="tagihan"
                  value={tagihan}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 "
                  disabled
                />
              </div>
              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Status Pembayaran
                </label>
                <select
                  id="status_pembayaran"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2 "
                >
                  <option selected>Belum Bayar</option>
                  <option value="Lunas">Lunas</option>
                </select>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-primary hover:bg-green-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
