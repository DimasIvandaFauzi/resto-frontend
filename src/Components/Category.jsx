import { useEffect, useState } from "react";
import { getMenu } from "../services/API";

const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchMenu() {
      try {
        const response = await getMenu();
        console.log("response", response.data.data);
        setCategories(response.data.data);
      } catch (err) {
        console.log("error fetching task", err.response?.data?.message || err.message);
      }
    }
    fetchMenu();
  }, []);
  const allowedCategories = ["Makanan", "Minuman", "Desert"];
  const filteredCategories = Array.from(new Set(categories.map((item) => item.CATEGORY).filter((cat) => allowedCategories.includes(cat))));
  console.log(filteredCategories);

  return (
    <ul className="flex flex-row gap-4 text-white font-dmsans py-4 text-sm">
      {filteredCategories.map((category, index) => (
        <li className="bg-primary/0 w-20 text-center outline outline-primary px-2 rounded-full py-0.5 hover:bg-primary hover:text-black active:bg-primary active:text-black" key={index}>
          {category}
        </li>
      ))}
    </ul>
  );
};
export default Category;
