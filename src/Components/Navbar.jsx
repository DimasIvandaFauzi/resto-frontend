import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 font-jakarta text-white w-auto ">
      <div className="bg-surface-primary flex justify-between items-center p-4">
        <Link to={"/"}>
        <div className="text-2xl font-bold hover:bg-primary px-1 hover:text-black ">Lebron.</div>
        </Link>
        <div className="flex space-x-4">
          <Link to={"/laporan"}>
            <span>Laporan</span>
          </Link>
          <Link to={"/pesanan"}>
            <span>Pesanan</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
