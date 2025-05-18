
import { Link } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import { SlBasket } from "react-icons/sl";

const Sidebar = ({pesanan, updatePesanan}) => {
  console.log('data dari sidebar',pesanan);
  return (
    <div className="w-2/6 pt-20  right-0  h-full bg-surface-secondary  text-white flex flex-col  pl-3 pr-4 pb-3 fixed overflow-x-hidden">
      <div className="h-full  flex-col flex gap-2">
        <h1 className="font-jakarta uppercase  font-semibold text-xl text-primary">Daftar Pesanan</h1>
        <div className="flex flex-col gap-4 text-lg flex-grow overflow-y-auto ">
          {pesanan.map((pesanan) => (
            <div className="flex rounded-md gap-1 items-center px-1  " key={pesanan.id}>
              <div className="">
                <img src={pesanan.image} alt="" width={50} />
              </div>
              <div className="flex justify-between w-full">
                <div className="">
                  <h1 className=" font-jakarta">{pesanan.nama}</h1>
                  <p>{pesanan.harga}</p>
                </div>
                <div className="flex justify-center items-center gap-2 text-primary">
                  <button onClick={()=> updatePesanan(pesanan.id, -1)}>-</button>
                  <h1>{pesanan.qty}</h1>
                  <button onClick={()=> updatePesanan(pesanan.id, 1)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <Link to='/pembayaran'>
          <PrimaryButton className="w-full"><span className="text-lg mr-1" ><SlBasket/></span>Pesan</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
