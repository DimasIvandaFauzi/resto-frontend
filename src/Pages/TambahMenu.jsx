import { FiArchive, FiArrowLeft, FiXCircle } from "react-icons/fi";
import PrimaryButton from "../Components/PrimaryButton";
import { useState } from "react";
import { createMenu } from "../services/API";
import SubHeading from "../Components/subHeading";
import { Link } from "react-router-dom";

const TambahMenu = () => {
  const [formData, setFormData] = useState({
    NAME: "",
    DESCRIPTION: "",
    PRICE: "",
    STOCK: "",
    CATEGORY: "",
  });
  const generateRandomId = () => {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0];
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMenu = {
      ID_MENU: generateRandomId(),
      ...formData,
    };
    console.log(newMenu);
    try {
      let res = await createMenu(newMenu.ID_MENU, newMenu.NAME, newMenu.DESCRIPTION, newMenu.PRICE, newMenu.CATEGORY, newMenu.STOCK);
      console.log(res);
      setFormData({
        NAME: "",
        DESCRIPTION: "",
        PRICE: "",
        STOCK: "",
        CATEGORY: "",
      });
    } catch (err) {
      console.log("error", err.response?.data?.message || err.message);
    }
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  return (
    <div className="bg-surface-primary flex justify-center items-center text-white font-dmsans h-screen">
      <form action="" onSubmit={handleSubmit} className="border-white border rounded px-8 py-4 flex flex-col gap-4 ">
        <div className="">
          <div className="flex justify-between items-center">
            <SubHeading />
            <Link to={"/"}>
              <span className="text-primary text-2xl font-semibold">
                <FiArrowLeft />
              </span>
            </Link>
          </div>
          <h1 className=" capitalize font-bold text-3xl tracking-wide">Tambah menu</h1>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="NAME">Nama Menu</label>
          <input type="text" id="NAME" value={formData.NAME} onChange={handleChange} className="border border-white rounded-md px-2 py-1 bg-white/0 font-semibold" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="DESCRIPTION">Deskripsi</label>
          <textarea type="text" id="DESCRIPTION" value={formData.DESCRIPTION} onChange={handleChange} className="border border-white rounded-md px-2 py-1 bg-white/0 font-semibold" />
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="PRICE">Harga</label>
            <input type="number" id="PRICE" value={formData.PRICE} onChange={handleChange} className="border border-white rounded-md px-2 py-1 bg-white/0 font-semibold" />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="STOCK">Stock</label>
            <input type="number" id="STOCK" value={formData.STOCK} onChange={handleChange} className="border border-white rounded-md px-2 py-1 bg-white/0 font-semibold" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="CATEGORY">Kategori</label>
          <select name="" id="CATEGORY" value={formData.CATEGORY} onChange={handleChange} className="border border-white rounded-md px-2 py-1 bg-white/0  font-semibold">
            <option value="">Pilih Category</option>
            <option value="Makanan">Makanan</option>
            <option value="Minuman">Minuman</option>
            <option value="Desert">Desert</option>
          </select>
        </div>
        <div className="flex ">
          <PrimaryButton className="w-full font-semibold py-1.5">
            <span className="text-lg pr-1">
              <FiArchive />
            </span>
            Tambah Menu
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};
export default TambahMenu;
