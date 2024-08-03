import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAllSiswa, fetchSiswaById, updateSiswa } from "../../redux/features/siswaSlice";
import { fetchAllGolongan } from "../../redux/features/golonganSlice";
import Swal from "sweetalert2";

export default function EditSiswa() {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.username);
  const student = useSelector((state) => state.siswa.list);
  const dataGolongan = useSelector((state) => state.golongan.list.data);
  const [selectedGolongan, setSelectedGolongan] = useState("");
  const [tagihan, setTagihan] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    nama: "",
    nis: "",
    email: "",
    noHp: "",
    noHpOrtu: "",
    alamat: "",
    golonganId: "",
  });

  useEffect(() => {
    dispatch(fetchAllGolongan());
  }, [dispatch]);

 useEffect(() => {
   if (id) {
     dispatch(fetchSiswaById(id));
   }
 }, [dispatch, id]);

 useEffect(() => {
  if (student) {
    setFormData({
      id: student.id || "",
      nama: student.nama || "",
      nis: student.NIS || "",
      email: student.email || "",
      noHp: student.no_hp || "",
      noHpOrtu: student.no_hp_ortu || "",
      alamat: student.alamat || "",
      golonganId: student.golongan_id || "",
    });
  }
}, [student]);

 const handleGolonganChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedGolongan(selectedValue);

    const selectedGolonganData = dataGolongan.find(
      (golongan) => golongan.golongan === selectedValue
    );
    setTagihan(selectedGolonganData ? selectedGolonganData.spp : "")
    setFormData({
      ...formData,
      golonganId: selectedGolonganData ? selectedGolonganData.id : "",
    })
  };
  
  const handleChange = (e) => {
    const {name, value, type} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? +value : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await Swal.fire({
        title: "Apakah Anda yakin?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
      });

      if (result.isConfirmed) {
        await dispatch(updateSiswa(formData));

        Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        }).fire({
          icon: "success",
          title: "Data siswa berhasil diubah",
        });

        navigate(`/dashboard/${username}/daftarsiswa`);
      }
    } catch (error) {
      console.error("Failed to update siswa:", error);
      Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      }).fire({
        icon: "error",
        title: "Gagal mengubah data siswa",
      });
    }
  };


  const handleCancel = async () => {
    await dispatch(fetchAllSiswa());
    navigate(`/dashboard/${username}/daftarsiswa`);
  }

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
                  value={formData.nama}
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
                  value={formData.nis}
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
                  value={formData.email}
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
                  value={formData.noHp}
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
                  value={formData.noHpOrtu}
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
                  value={formData.alamat}
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
                  value={formData.golonganId || ""}
                  onChange={handleGolonganChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2 ">
                  <option value="" disabled>
                    Pilih Golongan
                  </option>
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
                  className="block mb-2 text-sm font-medium text-gray-900">
                  Tagihan
                </label>
                <input
                  type="text"
                  id="tagihan"
                  value={student.tagihan}
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
                  value={student.status || ""}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2">
                  <option value="BELUM_LUNAS">Belum Bayar</option>
                  <option value="LUNAS">Lunas</option>
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
            onClick={handleCancel}
            className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            Batal
          </button>
        </form>
      </div>
    </div>
  );
}
