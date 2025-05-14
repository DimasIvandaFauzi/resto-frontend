import PrimaryButton from "./PrimaryButton";
import { FiPlus } from "react-icons/fi";
import SecondaryButton from "./SecondaryButton";

export const list = [
  {
    id: 1,
    nama: "Penyetan Tempe",
    harga: "10000",
    kategori: "Makanan Utama",
    image: "https://cdn.idntimes.com/content-images/community/2023/04/img-20230406-025849-737626b59c05da53aee8c34c22415407.jpg",
  },
  {
    id: 2,
    nama: "Penyetan Tahu",
    harga: "10000",
    kategori: "Makanan Utama",
    image: "https://th.bing.com/th/id/OIP.kCUMzuE-5GMRwIxgEhEkMAHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 3,
    nama: "Es Teh",
    harga: "5000",
    kategori: "Minuman",
    image: "https://i.pinimg.com/originals/5d/31/ef/5d31ef90cd6c389e07bc48a08e583122.jpg",
  },
  {
    id: 4,
    nama: "Puding Coklat",
    harga: "5000",
    kategori: "Side Dish",
    image: "https://s2.bukalapak.com/uploads/content_attachment/caccf51cb257f2fd3d9d3db5/original/resep_puding_cokelat_pondan_1.jpg",
  },
  {
    id: 4,
    nama: "Puding Coklat Pak Lebron",
    harga: "5000",
    kategori: "Side Dish",
    image: "https://s2.bukalapak.com/uploads/content_attachment/caccf51cb257f2fd3d9d3db5/original/resep_puding_cokelat_pondan_1.jpg",
  },
  {
    id: 4,
    nama: "Puding Coklat Pak Lebron",
    harga: "5000",
    kategori: "Side Dish",
    image: "https://s2.bukalapak.com/uploads/content_attachment/caccf51cb257f2fd3d9d3db5/original/resep_puding_cokelat_pondan_1.jpg",
  },
  
];
const MenuList = () => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };
  return (
    <div className="flex flex-col text-white">
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-8">
        {list.map((list) => (
          <div className="bg-surface-secondary  rounded-lg pb-3  w-52 hover:scale-105 transition ease-in-out delay-150" key={list.id}>
            <div className="relative pb-[90%] overflow-hidden rounded-lg mx-2 my-2 w-">
              <img src={list.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            <div className="flex flex-col flex-grow px-3 gap-1 mt-2  ">
              <h1 className="text-md text-primary font-jakarta ">{list.nama}</h1>
              <p className="font-bold  text-2xl">{formatPrice(list.harga)}</p>
              <span className="text-sm text-[#8b8b8b]">{list.kategori}</span>
            </div>
            <div className="pl-3 mt-4 pr-3">
              <PrimaryButton className="text-sm">
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
