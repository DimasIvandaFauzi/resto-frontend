import { list } from "./MenuList";

const Sidebar = () => {
  return (
    <div className="w-2/6 pt-20 fixed right-0  h-screen bg-surface-secondary  text-white flex flex-col pl-3 pr-4 overflow-scroll overflow-x-hidden">
      <div className="">
        <h1 className="font-jakarta uppercase mb-6 font-semibold text-xl text-primary">Daftar Pesanan</h1>
        <div className="flex flex-col gap-4 text-lg">
          {list.map((list) => (
            <div className="flex rounded-md gap-1 items-center px-1 " key={list.id}>
              <div className="">
                <img src={list.image} alt="" width={50} />
              </div>
              <div className="flex justify-between w-full ">
                <div className="">
                  <h1 className=" ">{list.nama}</h1>
                  <p>{list.harga}</p>
                </div>
                <div className="flex justify-center items-center gap-2 text-primary">
                  <span>-</span>
                  <h1>1</h1>
                  <span>+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
