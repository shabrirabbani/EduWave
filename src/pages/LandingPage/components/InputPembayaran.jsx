import React, {useState, useEffect} from "react";
import {IconSearch} from "@tabler/icons-react";
import {useDispatch, useSelector} from "react-redux";
import {
  fetchAllSekolahList,
  fetchSiswaForTrx,
  createTransaction,
} from "../../../redux/features/transactionSlice";
import ModalInfoSiswa from "./ModalInfoSiswa";
import { useNavigate } from "react-router-dom";

export default function InputPembayaran() {
  const dispatch = useDispatch();
  const schools = useSelector((state) => state.transaction.list) || [];
  const siswa = useSelector((state) => state.transaction.siswa) || null;
  const payment = useSelector((state) => state.transaction.payment.pembayaran) || null;
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [nis, setNis] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [jumlahBayar, setJumlahBayar] = useState("");
  const [transactionCreated, setTransactionCreated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllSekolahList());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (nis) {
      dispatch(fetchSiswaForTrx(nis)).then(() => {
        setShowModal(true);
      });
    }
  };

  const filteredSchools = Array.isArray(schools)
    ? schools.filter((school) =>
        school.sekolah.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
    
const handleCreateTransaction = async () => {
  if (selectedSchool && nis && jumlahBayar) {
    const transactionData = {
      sekolahId: selectedSchool.id,
      nis: nis,
      jumlahBayar: Number(jumlahBayar),
    };
      await dispatch(createTransaction(transactionData));
      console.log("Transaction created successfully");
      setTransactionCreated(true);
  } 
};

useEffect(() => {
  if (transactionCreated && payment?.token) {
    window.snap.pay(payment.token, {
      onSuccess: function (result) {
        console.log("success", result);
        navigate("/pembayaran");
      },
      onPending: function (result) {
        console.log("pending", result);
        navigate("/pembayaran");
      },
      onError: function (result) {
        console.log("error", result);
        navigate("/pembayaran");
      },
      onClose: function () {
        console.log("modal closed");
      },
    });
  }
}, [transactionCreated, payment?.token, navigate]);


  return (
    <div className="pb-10">
      <form
        className="grid grid-cols-1 md:grid-cols-2 p-10 md:p-0 gap-5"
        onSubmit={handleSearch}>
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
                    key={school.id}
                    onClick={() => {
                      setSelectedSchool(school);
                      setSearchTerm(school.sekolah);
                      setShowDropdown(false);
                    }}
                    className="p-2 hover:bg-gray-200 cursor-pointer">
                    {school.sekolah}
                  </li>
                ))
              ) : (
                <li className="p-2 text-gray-500 text-center">
                  Tidak ditemukan
                </li>
              )}
            </ul>
          )}
        </div>
        <div>
          <label
            htmlFor="nis-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only">
            Nomor Induk Siswa (NIS)
          </label>
          <div className="relative">
            <input
              type="search"
              id="nis-search"
              value={nis}
              onChange={(e) => setNis(e.target.value)}
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
      {showModal && siswa && (
        <ModalInfoSiswa
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          data={siswa}
          jumlahBayar={jumlahBayar}
          setJumlahBayar={setJumlahBayar}
          createTransaction={handleCreateTransaction}
        />
      )}
    </div>
  );
}
