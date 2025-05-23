import { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { FiCheck, FiX } from "react-icons/fi";

const DangerModal = ({ totalHarga, handleClose }) => {
  const [isCash, setIsCash] = useState(true);
  const [uang, setUang] = useState(0);
  const handleChange = (e) => {
    const { value } = e.target;
    setUang(value);
  };
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };
  return (
    <>
      <div className="fixed w-screen h-screen bg-black/15 backdrop-blur-sm top-0 left-0 flex justify-center items-center ">
        <div className="bg-surface-primary justify-center flex flex-col px-4 py-4 text-center outline rounded-lg">
          <FiX /> 
          <h1 className="font-bold font-jakarta uppercase tracking-tighter text-primary">Summary Pesanan</h1>
          <span className="font-bold text-2xl">Pilih Pembayaran</span>
          <div className="flex flex-col text-center gap-2 mt-4">
            <div className="flex justify-around">
              <span onClick={() => setIsCash(true)} className={`${isCash ? "font-bold " : "font-semibold"} cursor-pointer`}>
                Cash
              </span>
              <span onClick={() => setIsCash(false)} className={`${isCash ? "font-semibold" : "font-bold "} cursor-pointer`}>
                Debit
              </span>
            </div>
            <div className="px-6 py-6 border-t border-gray-500">
              {isCash ? (
                <div className="flex flex-col gap-2">
                  <h1>Masukan Uang</h1>
                  <input type="number" onChange={handleChange} className="bg-surface-primary px-2 py-2 outline rounded-md active:outline" />
                  <label htmlFor="">Kembalian</label>
                  <input type="text" value={formatPrice(uang - totalHarga)} className="bg-surface-primary px-2 py-2 outline rounded-md active:outline" disabled />
                </div>
              ) : (
                <div> Silahkan TF ke </div>
              )}
            </div>
            <PrimaryButton>
              <span className="text-lg pr-1"><FiCheck /></span> Selesai
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
};
export default DangerModal;
