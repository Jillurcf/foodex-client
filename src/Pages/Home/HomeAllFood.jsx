import { useState } from "react";
import useAllFood from "../../Hooks/useAllFood";
import HomeAllFoodCard from "./HomeAllFoodCard";
import UseAuth from "../../Hooks/UseAuth";

const HomeAllFood = () => {
  const allFood = useAllFood();
 
  const [isShow, setIsShow] = useState(false);
  const {isLoading} = UseAuth();
  if(isLoading){
    return <progress className="progress w-56"></progress>
  }
  return (
    <div>
      {/* <h1 className='text-6xl font-bold text-blue-600 text-center'>All Food</h1> */}
      <div className="bg-blue-900 h-[300px] w-full">
        <h1 className="text-center md:text-6xl text-2xl font-bold text-white pt-36 ">
         Top Food Section
        </h1>
        <p className="text-center text-white py-2">
          Good food is more than just sustenance; it is a source of pleasure,
          nourishment, <br /> and culture. It goes beyond mere sustenance to
          evoke emotions and connect people.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {isShow
          ? allFood.map((food) => (
              <HomeAllFoodCard key={food._id} food={food}></HomeAllFoodCard>
            ))
          : allFood
              .slice(0, 6)
              .map((food) => (
                <HomeAllFoodCard key={food._id} food={food}></HomeAllFoodCard>
              ))}
      </div>
      {
        allFood.length > 6 && <button  onClick={()=>setIsShow(!isShow)} className=" bg-[#009444] text-white btn mx-auto flex justify-center m-4">
          {isShow ? "See Less" : "See All Food"}
        </button>
      }
      
    </div>
  );
};

export default HomeAllFood;
