import { useState } from "react";
import { deleteMenu, updateMenu } from "../services/API";
import SubHeading from "../Components/subHeading";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiEdit, FiTrash, FiTrash2, FiX } from "react-icons/fi";
import PrimaryButton from "../Components/PrimaryButton";
import SecondaryButton from "../Components/SecondaryButton";

const UpdateMenu = ({ menu, handleCloseModal }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    NAME: menu.NAME || "",
    DESCRIPTION: menu.DESCRIPTION || "",
    PRICE: menu.PRICE || "",
    STOCK: menu.STOCK || "",
    CATEGORY: menu.CATEGORY || "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await updateMenu(menu.ID_MENU, formData.NAME, formData.DESCRIPTION, formData.PRICE, formData.CATEGORY, formData.STOCK);
      console.log(res);
      handleCloseModal();
      navigate(0)
    } catch (err) {
      console.log("error", err.response?.data?.message || err.message);
    }
  };
  console.log(menu);
  const handleDelete = async (e) => {
    try {
      let res = await deleteMenu(menu.ID_MENU);
      console.log(res);
      navigate(0)
    } catch (err) {
      console.log("error", err.response?.data?.message || err.message);
    }
  };

  return (
    <>
      <div className="fixed z-50 w-screen h-screen bg-black/15 backdrop-blur-sm top-0 left-0 flex justify-center items-center">
        <form action="" onSubmit={handleSubmit} className="border-white border rounded px-8 py-4 flex flex-col gap-4 bg-surface-primary ">
          <div className="">
            <div className="flex justify-between items-center">
              <SubHeading />
              <button onClick={handleCloseModal} className="text-primary text-2xl font-semibold">
                <FiX />
              </button>
            </div>
            <h1 className=" capitalize font-bold text-3xl tracking-wide">Edit menu</h1>
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
              <label htmlFor="STOCK">Stock</label>
              <input type="number" id="STOCK" value={formData.STOCK} onChange={handleChange} className="border border-white rounded-md px-2 py-1 bg-white/0 font-semibold " />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="PRICE">Harga</label>
              <input type="number" id="PRICE" value={formData.PRICE} onChange={handleChange} className="border border-white rounded-md px-2 py-1 bg-white/0 font-semibold " disabled />
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
          <div className="flex gap-4">
            <PrimaryButton className="w-[65%] font-semibold py-1.5" type="submit">
              <span className="text-lg pr-1">
                <FiEdit />
              </span>
              Edit Menu
            </PrimaryButton>
            <SecondaryButton className="w-[35%] " onClick={handleDelete}>
              <span className="text-lg pr-2">
                <FiTrash2 />
              </span>
              Hapus
            </SecondaryButton>
          </div>
        </form>
      </div>
    </>
  );
};
export default UpdateMenu;
