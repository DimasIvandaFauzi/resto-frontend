import { useEffect, useState } from "react";
import { getMenu } from "../services/API";
import PrimaryButton from "./PrimaryButton";
import { FiPlus } from "react-icons/fi";



const MenuList = ({ onTambahPesanan }) => {
  const [menus, setMenus] = useState([])
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };
  useEffect(() => {
    async function fetchMenu () {
      try {
        const response = await getMenu();
        console.log("response", response.data.data);
        setMenus(response.data.data)
      } catch (err) {
        console.log("error fetching task", err.response?.data?.message || err.message);
      }
    }
    fetchMenu();
  },[]);
  return (
    <div className="flex flex-col text-white">
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-8">
        {menus.map((menu, index) => (
          <div className="bg-surface-secondary  rounded-lg pb-3  w-52 hover:scale-105 transition ease-in-out delay-150" key={index}>
            <div className="relative pb-[80%] overflow-hidden rounded-lg mx-2 my-2 w-">
              <img src="https://s2.bukalapak.com/uploads/content_attachment/caccf51cb257f2fd3d9d3db5/original/resep_puding_cokelat_pondan_1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            <div className="flex flex-col flex-grow px-3 gap-1 mt-2  ">
              <h1 className="text-md text-primary font-jakarta ">{menu.NAME}</h1>
              <p className="font-bold  text-2xl">{formatPrice(menu.PRICE)}</p>
              <span className="text-sm text-[#8b8b8b]">{menu.CATEGORY}</span>
            </div>
            <div className="pl-3 mt-4 pr-3">
              <PrimaryButton className="text-sm" onClick={() => onTambahPesanan(menu)}>
                <FiPlus className="text-md " /> <span>Pilih</span>
              </PrimaryButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MenuList;
