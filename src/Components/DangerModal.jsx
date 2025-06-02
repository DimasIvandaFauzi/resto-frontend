import { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { FiCheck, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { createPesanan } from "../services/API";

const DangerModal = ({ totalHarga, handleClose, pesanan }) => {
  const [isCash, setIsCash] = useState(true);
  const [uang, setUang] = useState(0);
  const handleChange = (e) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, "");
    const numericValue = parseInt(rawValue || "0", 10);
    setUang(numericValue);
  };
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };
  const handlePesanan = async (uang, pesanan) => {
    const items = pesanan.map(item => ({
    id_menu: item.ID_MENU,
    quantity: item.qty 
  }));
    const payment_method = isCash ? "CASH" : "CARD";
    const uangs = isCash ? Number(uang) : totalHarga;
    const cashier = "admin";
    try {
      let res = await createPesanan(uangs, payment_method, items, cashier);
      console.log(res);
      alert("Pesanan Berhasil Dibuat");
      handleClose()
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };
  console.log("data dari modal", pesanan);
  console.log("data dari modal", uang);
  return (
    <div className="fixed w-screen h-screen bg-black/15 backdrop-blur-sm top-0 left-0 flex justify-center items-center z-">
      <div className="bg-surface-primary justify-center flex flex-col px-4 py-4 text-center outline rounded-lg relative">
        <span className="text-xl absolute top-4 right-4 cursor-pointer" onClick={handleClose}>
          <FiX />
        </span>
        <h1 className="font-bold font-jakarta uppercase tracking-tighter text-primary">Summary Pesanan</h1>
        <span className="font-bold text-2xl">Pilih Pembayaran</span>
        <div className="flex flex-col text-center gap-2 mt-4">
          <div className="flex justify-around">
            <span onClick={() => setIsCash(true)} className={`${isCash ? "font-bold " : ""} cursor-pointer`}>
              Cash
            </span>
            <span onClick={() => setIsCash(false)} className={`${isCash ? "" : "font-bold "} cursor-pointer`}>
              Debit
            </span>
          </div>
          <div className="px-6 py-6 border-t border-gray-500">
            {isCash ? (
              <div className="flex flex-col gap-2">
                <h1>Masukan Uang</h1>
                <input type="text" onChange={handleChange} value={formatPrice(uang)} className="bg-surface-primary px-2 py-2 outline rounded-md active:outline" />
                <label htmlFor="">Kembalian</label>
                <input type="text" value={formatPrice(uang - totalHarga)} className="bg-surface-primary px-2 py-2 outline rounded-md active:outline" disabled />
              </div>
            ) : (
              <div> Silahkan TF ke </div>
            )}
          </div>
          <Link>
            <PrimaryButton className="w-full" onClick={() => handlePesanan(uang, pesanan)} >
              <span className="text-lg pr-1">
                <FiCheck />
              </span>{" "}
              Selesai
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DangerModal;
