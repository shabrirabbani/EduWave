import React, {useEffect, useState} from "react";
import TabelDaftarSiswa from "./components/TabelDaftarSiswa";
import FilterDaftarSiswa from "./components/FilterDaftarSiswa";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllSiswa} from "../../redux/features/siswaSlice";

export default function DaftarSiswa() {
  const dispatch = useDispatch();
  const initialdata = useSelector((state) => state.siswa.list) || [];
  const [filteredData, setFilteredData] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(30);


  useEffect(() => {
    dispatch(fetchAllSiswa());
  }, [dispatch]);

  useEffect(() => {
    // Filter data based on the current page and filters applied
    const applyFilterAndPagination = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      const filtered = initialdata.filter((item) => {
        const nama = item?.nama || "";
        const nis = item?.nis || "";
        const status = item?.status || "";

        const matchText =
          nama.toLowerCase().includes(filterText.toLowerCase()) ||
          nis.toLowerCase().includes(filterText.toLowerCase());
        const matchStatus =
          filterStatus === "" ||
          status.toLowerCase() === filterStatus.toLowerCase();
        return matchText && matchStatus;
      });

      setFilteredData(filtered.slice(startIndex, endIndex));
    };

    applyFilterAndPagination();
  }, [filterText, filterStatus, initialdata, currentPage, itemsPerPage]);

  const handleFilter = (search, status) => {
    setFilterText(search);
    setFilterStatus(status);
    setCurrentPage(1); // Reset to the first page when filter changes
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-5">Daftar Seluruh Siswa</h1>
      <FilterDaftarSiswa onFilter={handleFilter} />
      <TabelDaftarSiswa
        data={filteredData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className="pagination-controls">
        {/* Implement pagination controls here */}
      </div>
    </div>
  );
}
