import React, {useEffect, useState} from "react";
import TabelDaftarSiswa from "./components/TabelDaftarSiswa";
import FilterDaftarSiswa from "./components/FilterDaftarSiswa";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllSiswa} from "../../redux/features/siswaSlice";
import Pagination from "./components/Pagination";

export default function DaftarSiswa() {
  const dispatch = useDispatch();
  const {list: initialdata, totalPages} = useSelector((state) => state.siswa)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [nama, setNama] = useState("");
  const [nis, setNis] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    dispatch(
      fetchAllSiswa({
        page: currentPage,
        size: itemsPerPage,
        nama,
        nis,
        status,
      })
    );
  }, [dispatch, currentPage, itemsPerPage, nama, nis, status]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

   const handleFilterChange = (nama, nis, status) => {
     setNama(nama);
     setNis(nis);
     setStatus(status);
   };

  return (
    <div>
      <h1 className="text-xl font-bold mb-5">Daftar Seluruh Siswa</h1>
      <FilterDaftarSiswa onFilter={handleFilterChange} />
      <div className="bg-gray-200 rounded-lg p-2">
        <TabelDaftarSiswa
          data={initialdata}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
        />
        <Pagination 
          currentPage={currentPage} 
          goToPage={handlePageChange} 
          totalPages={totalPages}
          />
      </div>
    </div>
  );
}
