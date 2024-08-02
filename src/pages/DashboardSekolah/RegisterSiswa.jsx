import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSiswa } from "../../redux/features/siswaSlice";
import { fetchAllGolongan } from "../../redux/features/golonganSlice";
import { useNavigate } from "react-router-dom";

export default function RegisterSiswa() {
  const username = useSelector((state) => state.auth.username);
  const dataGolongan = useSelector((state) => state.golongan.list.data);
  const [form, setForm] = useState({
    nama: "",
    nis: "",
    email: "",
    noHp: "",
    noHpOrtu: "",
    alamat: "",
    golonganId: "",
  });
  const [selectedGolongan, setSelectedGolongan] = useState("");
  const [tagihan, setTagihan] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllGolongan());
  }, [dispatch]);

  const handleGolonganChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedGolongan(selectedValue);

    const selectedGolonganData = dataGolongan.find(
      (golongan) => golongan.golongan === selectedValue
    );
    setTagihan(selectedGolonganData ? selectedGolonganData.spp : "");
    setForm({
      ...form,
      golonganId: selectedGolonganData ? selectedGolonganData.id : "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSiswa(form));
    navigate(`/dashboard/${username}/daftarsiswa`)
  };

  return (
    <div className="ms-5">
      <h1 className="text-2xl font-semibold">Register Siswa</h1>
      <div className="mt-5">
        <form onSubmit={handleSubmit} className=" mx-auto">
          <div className="grid grid-cols-2 gap-6 space-x-6">
            <div className="">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  onChange={handleChange}
                  value={form.nama}
                  type="text"
                  name="nama"
                  id="namasiswa"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="namasiswa"
                  className="peer-focus:font-medium absolute text-sm text-gray-600  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nama Siswa
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  onChange={handleChange}
                  value={form.nis}
                  type="text"
                  name="nis"
                  id="nis"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="nis"
                  className="peer-focus:font-medium absolute text-sm text-gray-600  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nomor Induk Siswa (NIS)
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  onChange={handleChange}
                  value={form.email}
                  type="email"
                  name="email"
                  id="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-600  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email Siswa
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  onChange={handleChange}
                  value={form.noHp}
                  type="text"
                  name="noHp"
                  id="nohpsiswa"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="nohpsiswa"
                  className="peer-focus:font-medium absolute text-sm text-gray-600  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nomor HP Siswa
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  onChange={handleChange}
                  value={form.noHpOrtu}
                  type="text"
                  name="noHpOrtu"
                  id="nohportu"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="nohportu"
                  className="peer-focus:font-medium absolute text-sm text-gray-600  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nomor HP Orang Tua
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  onChange={handleChange}
                  value={form.alamat}
                  type="text"
                  name="alamat"
                  id="alamat"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="alamat"
                  className="peer-focus:font-medium absolute text-sm text-gray-600  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Alamat
                </label>
              </div>
            </div>
            <div className="space-y-6 max-w-md bg-gray-200 border border-green-400 p-5 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">Uang Pembayaran</h3>
              <div className="">
                <label
                  htmlFor="golongan"
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
                  {!dataGolongan
                    ? "null"
                    : dataGolongan.map((golongan) => (
                        <option key={golongan.id} value={golongan.golongan}>
                          {golongan.golongan}
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
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Status Pembayaran
                </label>
                <select
                  id="status_pembayaran"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2 "
                >
                  <option defaultValue="BELUM_LUNAS">Belum Lunas</option>
                  <option value="LUNAS">Lunas</option>
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
