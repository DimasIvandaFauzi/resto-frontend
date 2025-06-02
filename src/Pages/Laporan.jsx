import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { getLaporan } from "../services/API";
import dayjs from "dayjs";

const Laporan = () => {
  const today = dayjs().format("YYYY-MM-DD");
  const [startDate, setStartDate] = useState([]);
  const [endDate, setEndDate] = useState([]);
  const [laporan, setLaporan] = useState();
  const fetchLaporan = async () => {
    try {
      let res = await getLaporan(startDate, endDate);
      setLaporan(res?.data.data || "");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchLaporan();
  }, [startDate, endDate]);
  console.log(laporan);
  return (
    <div className="bg-surface-primary text-white font-dmsans">
      <Navbar />
      <div className="pt-20"></div>
      <h1>Laporan</h1>
      <p>Ini adalah halaman laporan.</p>
      <div className="">
        <label htmlFor="">Dari Tanggal : </label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="bg-surface-primary" />
      </div>
      <div className="">
        <label htmlFor="">Sampai Tanggal : </label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="bg-surface-primary" />
      </div>
      <div className="">
        {Array.isArray(laporan) && laporan.length > 0? (
          laporan.map((laporan, index) => (
            <div key={index}>
              <h1>Laporan : {laporan.REPORT_DATE}</h1>
              <span>Laporan : {laporan.REVENUE}</span>
            </div>
          ))
        ) : (
          <>
            <h1>Belum ada laporan</h1>
          </>
        )}
      </div>
    </div>
  );
};
export default Laporan;
