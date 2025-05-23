import { Link, Navigate, useNavigate } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import { SlBasket } from "react-icons/sl";
import DangerModal from "./DangerModal";
import { useState } from "react";



const Sidebar = ({ pesanan, updatePesanan }) => {
  const [showDangerModal, setShowDangerModal] = useState(false)
  const navigate = useNavigate();
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };
  const totalHarga = pesanan.reduce((total, item) => {
    return total + item.PRICE * item.qty;
  }, 0);
  const handlePesanan = () =>{
    setShowDangerModal(true)
  }
  const handleClose = ()=>{
    setShowDangerModal(false)
  }
  return (
    <div className="w-2/6 pt-20  right-0  h-full bg-surface-secondary  text-white flex flex-col  pl-3 pr-4 pb-3 fixed overflow-x-hidden">
      {showDangerModal && (<DangerModal totalHarga={totalHarga} handleClose={handleClose}/>)}
      <div className="h-full  flex-col flex gap-2">
        <h1 className="font-jakarta uppercase  font-semibold text-xl text-primary">Daftar Pesanan</h1>
        <div className="flex flex-col gap-4 text-lg flex-grow overflow-y-auto ">
          {pesanan.map((pesanan) => (
            <div className="flex rounded-md gap-1 items-center px-1  " key={pesanan.ID_MENU}>
              <div className="">
                <img src="https://s2.bukalapak.com/uploads/content_attachment/caccf51cb257f2fd3d9d3db5/original/resep_puding_cokelat_pondan_1.jpg" alt="" width={50} />
              </div>
              <div className="flex justify-between w-full">
                <div className="">
                  <h1 className=" font-jakarta">{pesanan.NAME}</h1>
                  <p>{formatPrice(pesanan.PRICE * pesanan.qty)}</p>
                </div>
                <div className="flex justify-center items-center gap-2 text-primary">
                  <button onClick={() => updatePesanan(pesanan.ID_MENU, -1)}>-</button>
                  <h1>{pesanan.qty}</h1>
                  <button onClick={() => updatePesanan(pesanan.ID_MENU, 1)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" text-right">
          Total Harga: <span className="font-semibold">{formatPrice(totalHarga)}</span>
        </div>
        <div className="">
          <PrimaryButton className="w-full" onClick={handlePesanan} disabled={pesanan.length === 0}>
            <span className="text-lg mr-1">
              <SlBasket />
            </span>
            Pesan
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
