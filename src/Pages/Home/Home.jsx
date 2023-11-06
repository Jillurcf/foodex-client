import { Helmet } from "react-helmet-async";

import SwiperSlider from "./SwiperSlider";
import AllFoodItem from "../AllFoodItem/AllFoodItem";
import UseAuth from "../../Hooks/UseAuth";
import useAllFood from "../../Hooks/useAllFood";
import HomeAllFood from "./HomeAllFood";
import BookATable from "./BookATable";
import SeasonalMenu from "./SeasonalMenu";

const Home = () => {
    const allFood = useAllFood();
    const {loading} = UseAuth();
        if(loading){
        return <progress className="progress w-56"></progress>
    //   return  <span className="loading loading-spinner loading-lg"></span>
    }
    return (
        
        <div>
            
            <Helmet>
            <title>FoodHero | Home</title>
            </Helmet>
           
           <SwiperSlider allFood={allFood}></SwiperSlider>
           <HomeAllFood ></HomeAllFood>
           <SeasonalMenu></SeasonalMenu>
           <BookATable></BookATable>
          
        </div>
    );
};

export default Home;