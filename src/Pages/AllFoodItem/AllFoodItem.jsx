import { Helmet } from "react-helmet-async";
import useAllFood from "../../Hooks/useAllFood";
import AllFoodCard from "./AllFoodCard";

const AllFoodItem = () => {
  const allFood = useAllFood();
  console.log(allFood);
  return (
    <div className="">
      <Helmet>
        <title>FoodHero | All Fodd</title>
      </Helmet>
      
      <div className="bg-blue-900 h-[300px] w-full">
        <h1 className="text-center md:text-6xl text-2xl font-bold text-white pt-36 ">All Food Items
        </h1>
       <p className="text-center text-white py-2"> Good food is more than just sustenance; it is a source of pleasure, nourishment, <br /> and culture. It goes beyond mere sustenance to evoke emotions and connect people.</p>
      </div>
     
     <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
     {
        allFood.map(food=> <AllFoodCard key={food._id} food={food}></AllFoodCard>)
      }
     </div>
    
    </div>
  );
};

export default AllFoodItem;
