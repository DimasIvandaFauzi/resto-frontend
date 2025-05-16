import { useState } from "react";
import MenuList from "../Components/MenuList";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
useState

const Menu = () => {
  const [pesanan, setPesanan] = useState([]);
  const tambahPesanan = (item)=>{
    setPesanan((prev) => {
      const exist = prev.find((p) => p.id === item.id);
      if (exist) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      } else {
        return [...prev, { ...item, qty: 1 }];
      }
    });
  }
  const updatePesanan = (id, delta) => {
     setPesanan((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty:  item.qty + delta }
            : item
        )
         .filter((item) => item.qty > 0)
    );
  }
  console.log('data dari menu',pesanan)
  return (
    
      <div className="bg-surface-primary flex flex-row ">
        <Navbar />
        <div className="  flex justify-center items-center flex-col w-full pt-24 pr-5">        
          <div className="font-dmsans text-left flex flex-col ">
            <span className="font-bold text-3xl mb-4 text-white"> Menu.</span>
            <MenuList onTambahPesanan={tambahPesanan}/>
          </div>
        </div>
        <div className="w-2/6">daw</div>
        <Sidebar pesanan={pesanan} updatePesanan={updatePesanan}/>
      </div>
    
  );
};
export default Menu;
