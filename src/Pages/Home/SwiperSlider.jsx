import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
// import './styles.css';
import BreadLemon from '../../assets/images/sliderImage/BreadLemon.jpg'
// import BreadMilk from '../../assets/images/sliderImage/Bread-with-milk.jpg'
import pizza from '../../assets/images/sliderImage/pizza.jpg'
import steak from '../../assets/images/sliderImage/Steak-Dinner.jpg'
import salmonMeal from '../../assets/images/sliderImage/meal-with-salmon.jpg'
import meatBall from '../../assets/images/sliderImage/meatBall.jpg'
import soup from '../../assets/images/sliderImage/cabbage-soup.jpg'
import pudding from '../../assets/images/sliderImage/Carrot-Pudding.jpg'
const SwiperSlider = () => {
    return (
        <div>
         <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className=''>
          <img className='' src={BreadLemon} />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
          <div className="text-white font-bold lg:space-y-8 w-full pl-12 space-y-8  ">
            <h1 className="lg:text-5xl text-4xl">Bread Lemon 
          </h1>
            <h1 className="lg:text-5xl">  <span className='text-secondary'>Affordable</span> Price
          </h1>
            
            <div>
              <button className="btn bg-blue-600 border-none text-white lg:mr-5 mr-1">Order Now!!</button>
              <button className="btn btn-outline btn-secondary mr-1 lg:mr-5">
              See Details
              </button>
              <button className="btn btn-outline btn-success">
              All Food
              </button>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={pudding} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pizza} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={steak} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={salmonMeal} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={meatBall} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={soup} />
        </SwiperSlide>
        
      </Swiper>   
        </div>
    );
};

export default SwiperSlider;