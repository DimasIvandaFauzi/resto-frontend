import { useEffect, useState } from "react";
import { getMenu } from "../services/API";

const Category = ({Category}) => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const response = await getMenu();
        setCategories(response.data.data);
      } catch (err) {
        console.log("error fetching task", err.response?.data?.message || err.message);
      }
    }
    fetchMenu();
  }, []);
  const handleClick = (category) => {
    if(activeCategory === null){
      setActiveCategory(category)
      Category(category)
    }
    else{
      setActiveCategory(null)
      Category(null)
    }
  };
  const allowedCategories = ["Makanan", "Minuman", "Desert"];
  const filteredCategories = Array.from(
    new Set(
      categories
        .map((item) => item.CATEGORY)
        .filter((cat) => allowedCategories.includes(cat))
    )
  );
  
  return (
    <ul className="flex flex-row gap-4 text-white font-dmsans py-4 text-sm">
      {filteredCategories.map((category, index) => (
        <li
          key={index}
          onClick={()=>handleClick(category)} 
          className={`cursor-pointer w-20 text-center outline outline-primary px-2 rounded-full py-0.5 transition duration-200
            ${
              activeCategory === category
                ? "bg-primary text-black" 
                : "bg-primary/0 text-white "
            }`}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default Category;
