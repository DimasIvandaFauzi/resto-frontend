import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { getTransaksi } from "../services/API";
import PrimaryButton from "../Components/PrimaryButton";


const Pesanan = () => {
  function formatDateTime(dateString) {
    if (!dateString) return "-";

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Jakarta",
    };

    const date = new Date(dateString);
    return date.toLocaleString("id-ID", options) + " WIB";
  }

  const [transaksi, setTransaksi] = useState([]);

  useEffect(() => {
    async function fetchTransaksi() {
      try {
        const response = await getTransaksi();
        setTransaksi(response?.data?.data || []);
      } catch (err) {
        console.log("Error fetching task:", err.response?.data?.message || err.message);
      }
    }
    fetchTransaksi();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <h1 className="font-bold text-lg pb-3 ">Total Transaksi</h1>
        <table className="min-w-full border border-gray-300 text-left">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Subtotal</th>
              <th className="border px-4 py-2">Uang</th>
              <th className="border px-4 py-2">Kembalian</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Tanggal</th>
              <th className="border px-4 py-2">Detail</th>
            </tr>
          </thead>
          <tbody>
            {transaksi.length > 0 ? (
              transaksi.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{item.ID_TRANSACTION}</td>
                  <td className="border px-4 py-2">{item.SUBTOTAL}</td>
                  <td className="border px-4 py-2">{item.MONEY}</td>
                  <td className="border px-4 py-2">{item.REFUND}</td>
                  <td className="border px-4 py-2">{item.STATUS}</td>
                  <td className="border px-4 py-2">{formatDateTime(item.DATETIME)}</td>
                  <td className="border px-4 py-2">
                    <PrimaryButton>Detail</PrimaryButton>
                  </td>
                  <td></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  Belum ada transaksi
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pesanan;
