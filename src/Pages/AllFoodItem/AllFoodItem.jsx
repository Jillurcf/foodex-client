import { Helmet } from "react-helmet-async";

import AllFoodCard from "./AllFoodCard";
import { useEffect, useState } from "react";
import './AllFood.css'
import UseAuth from "../../Hooks/UseAuth";

const AllFoodItem = () => {
  // const allFood = useAllFood();
 
  const [allFood, setAllFood] = useState([])
    console.log(allFood);
  const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [count, setCount] = useState(0)
    const {loading} = UseAuth()
   
    console.log(count);
   
    const numberOfPages = Math.ceil(count / itemsPerPage);

    // instead of forEach
    const pages = [...Array(numberOfPages).keys()]

   
    console.log(pages);

   
    useEffect(()=>{
        fetch('https://assignment11-server-side-chi.vercel.app/api/v1/allFoodCount')
        .then(res => res.json())
        .then(data => setCount(data.count))
    },[])

    useEffect(() => {
        fetch(`https://assignment11-server-side-chi.vercel.app/api/v1/allFood?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setAllFood(data))
    }, [currentPage, itemsPerPage]);



    const handleItemsPerPage = e =>{
      
      const val = parseInt(e.target.value)
      setItemsPerPage(val)
      console.log(val);
      setCurrentPage(0);
  }

  const handlePreviousPage = ()=>{
      if(currentPage > 0){
          setCurrentPage(currentPage - 1);
      }
  }

  const handleNextPage = ()=>{
      if(currentPage < pages.length -1){
          setCurrentPage(currentPage + 1)
      }
  }

  if(loading){
    return <progress className="progress w-56"></progress>
   }
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
     <div className="pagination">
        <p>Current page: {currentPage}</p>
        <button onClick={handlePreviousPage}>Prev</button>
        {pages.map((page) => (
          <button
            className={currentPage === page ? "selected" : undefined}
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNextPage}>Next</button>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPage}
          name=""
          id=""
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};

export default AllFoodItem;
