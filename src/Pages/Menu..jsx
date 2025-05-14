import MenuList from "../Components/MenuList";
import Navbar from "../Components/Navbar";
const Menu = () => {
  return (
    <div className="bg-surface-primary">
      <Navbar />
      <div className="pt-32 flex flex-col justify-center items-center gap-1 mb-10">
        <span className="text-primary font-jakarta">PREVIEW</span>
        <h1 className="text-4xl font-bold text-white">Dashboard Resto</h1>
      </div>
      <div className="font-dmsans flex flex-col justify-center items-center">
        <MenuList />
      </div>
    </div>
  );
};
export default Menu;
