import { updateMenu } from "../services/API";

const UpdateMenu = ({ menu }) => {
  console.log(menu);
  return (
    <>
      <div className="fixed z-50 w-screen h-screen bg-black/15 backdrop-blur-sm top-0 left-0 flex justify-center items-center">
        <div className="">
          <h1>Edit Menu</h1>
        </div>
      </div>
    </>
  );
};
export default UpdateMenu;
