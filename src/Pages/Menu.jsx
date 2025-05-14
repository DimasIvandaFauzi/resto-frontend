import MenuList from "../Components/MenuList";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const Menu = () => {
  return (
    
      <div className="bg-surface-primary flex flex-row justify-between ">
        <Navbar />
        <div className="  flex justify-center items-center flex-col w-full pt-28">
          
          
          <div className="font-dmsans text-left flex flex-col ">
            <span className="font-bold text-3xl mb-4 text-white"> Menu.</span>
            <MenuList />
          </div>
        </div>
        <div className="w-2/6">
          dwada
        </div>
        <Sidebar />
      </div>
    
  );
};
export default Menu;
