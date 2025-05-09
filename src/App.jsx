import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const menus = [
  {
    id: 1,
    nama: 'Penyetan Tempe',
    harga: '10000',
    kategori: 'Makanan Utama',
    image: 'https://cdn.idntimes.com/content-images/community/2023/04/img-20230406-025849-737626b59c05da53aee8c34c22415407.jpg'
  },
  {
    id: 2,
    nama: 'Penyetan Tahu',
    harga: '10000',
    kategori: 'Makanan Utama',
    image: 'https://th.bing.com/th/id/OIP.kCUMzuE-5GMRwIxgEhEkMAHaHa?rs=1&pid=ImgDetMain'
  },
  {
    id: 3,
    nama: 'Es Teh',
    harga: '5000',
    kategori: 'Minuman',
    image: 'https://i.pinimg.com/originals/5d/31/ef/5d31ef90cd6c389e07bc48a08e583122.jpg'
  },
  {
    id: 4,
    nama: 'Puding Coklat Pak Lebron',
    harga: '5000',
    kategori: 'Side Dish',
    image:'https://s2.bukalapak.com/uploads/content_attachment/caccf51cb257f2fd3d9d3db5/original/resep_puding_cokelat_pondan_1.jpg'
  },
]
function App() {
  const [count, setCount] = useState(0)
  console.log(menus)
  return (
    <>
      <div className="flex flex-col py-2">
        <h1 className='text-center font-bold text-2xl'>Selamat Datang di POS Restoran Lebron</h1>
        <div className="px-4 gap-2 flex flex-col">
          {menus.map((menu) => (
            <div className="py-3 flex gap-2 outline-1 w-full px-2" key={menu.id}>
              <input type="radio" />
              <div className="">
                <h2 className='font-bold text-xl'>{menu.nama}</h2>
                <p className='font-semibold'>Rp.{menu.harga}</p>
                <p>{menu.kategori}</p>
              </div>
                <img src={menu.image} alt="" width={80} />
            </div>
          ))}
        </div>
        <div className=" justify-center items-center flex mt-2">

        <button
          className={`bg-black text-white font-semibold py-2 px-4   cursor-pointer`}>
          Pesan
        </button>
            </div>
      </div>
    </>
  )
}

export default App
