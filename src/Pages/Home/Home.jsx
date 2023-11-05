import { Helmet } from "react-helmet-async";

import SwiperSlider from "./SwiperSlider";
import AllFoodItem from "../AllFoodItem/AllFoodItem";


const Home = () => {
    return (
        <div>
            <Helmet>
            <title>FoodHero | Home</title>
            </Helmet>
           <SwiperSlider></SwiperSlider>
          
        </div>
    );
};

export default Home;