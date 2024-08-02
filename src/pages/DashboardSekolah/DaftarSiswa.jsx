import React, { useEffect, useState } from "react";
import TabelDaftarSiswa from "./components/TabelDaftarSiswa";
import FilterDaftarSiswa from "./components/FilterDaftarSiswa";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSiswa } from "../../redux/features/siswaSlice";

export default function DaftarSiswa() {
  const initialdata = useSelector((state) => state.siswa.list);
  const dispatch = useDispatch();

  const [data, setData] = useState(initialdata);
  const [filteredData, setFilteredData] = useState(initialdata);
  const [filterText, setFilterText] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAllSiswa());
  }, [dispatch]);

  // useEffect(() => {
  //   const newFilteredData = data.filter((item) => {
  //     const matchText =
  //       item.nama.toLowerCase().includes(filterText.toLowerCase()) ||
  //       item.nis.toLowerCase().includes(filterText.toLowerCase());
  //     const matchStatus =
  //       filterStatus === "" ||
  //       item.status.toLowerCase() === filterStatus.toLowerCase();
  //     return matchText && matchStatus;
  //   });
  //   setFilteredData(newFilteredData);
  //   setCurrentPage(1);
  // }, [filterText, filterStatus, data]);

  const handleFilter = (search, status) => {
    setFilterText(search);
    setFilterStatus(status);
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-5">
        Daftar Seluruh Siswa
      </h1>
      <FilterDaftarSiswa onFilter={handleFilter} />
      <TabelDaftarSiswa
        data={initialdata}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
