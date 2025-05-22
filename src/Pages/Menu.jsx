import { useState } from "react";
import MenuList from "../Components/MenuList";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Category from "../Components/Category";
import { FiPlus } from "react-icons/fi";
import PrimaryButton from "../Components/PrimaryButton";
import { Link } from "react-router-dom";
import SubHeading from "../Components/subHeading";

const Menu = () => {
  const [pesanan, setPesanan] = useState([]);
  const [category, setCategory] = useState("Makanan");
  const tambahPesanan = (item) => {
    console.log("data dari app", item);
    setPesanan((prev) => {
      const exist = prev.find((p) => p.ID_MENU === item.ID_MENU);
      if (exist) {
        if (exist.qty < item.STOCK) {
          return prev.map((p) => (p.ID_MENU === item.ID_MENU ? { ...p, qty: p.qty + 1 } : p));
        } else {
          return prev;
        }
      } else {
        return [...prev, { ...item, qty: 1 }];
      }
    });
  };
  const updatePesanan = (id, delta) => {
    setPesanan((prev) => prev.map((item) => (item.ID_MENU === id ? { ...item, qty: item.qty + delta } : item)).filter((item) => item.qty > 0));
  };

  return (
    <div className="bg-surface-primary flex flex-row min-h-screen pb-20">
      <Navbar />
      <div className="  flex justify-center items-center flex-col w-full pt-20 pr-5">
        <div className="font-dmsans text-left flex flex-col ">
          <SubHeading />
          <div className="font-bold  flex items-center justify-between w-full ">
            <h1 className="text-4xl tracking-wide text-white"> Menu. </h1>
            <Link to={"/tambahmenu"} className="text-black rounded text-lg p-1 mr-1 bg-primary hover:bg-primary/0 hover:text-primary hover:outline hover:outline-primary transition-all duration-200 ease-in-out">
              <FiPlus />
            </Link>
          </div>
          <Category Category={setCategory} />
          <MenuList onTambahPesanan={tambahPesanan} category={category} />
        </div>
      </div>
      <div className="w-2/6">daw</div>
      <Sidebar pesanan={pesanan} updatePesanan={updatePesanan} />
    </div>
  );
};
export default Menu;
