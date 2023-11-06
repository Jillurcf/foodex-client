
import { data } from 'autoprefixer';
import { useEffect, useState } from 'react';


const useAllFood = () => {
    const [allFoodItems, setAllFoodItems] = useState([])
    console.log(allFoodItems);
    useEffect(()=>{
        fetch('http://localhost:5000/api/v1/allFood')
        .then(res=> res.json())
        .then(data=> setAllFoodItems(data))
      
    },[])
    return allFoodItems;
}

export default useAllFood;