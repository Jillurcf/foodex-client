import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";


const SeeDetail = () => {
  const seeDetails = useLoaderData();
  const [quantity, setQuantity] = useState(null)
  const id = seeDetails._id;
  console.log(id);
  console.log(seeDetails);

  const handleQuantity = id =>{
    const presentQuantity = seeDetails.quantity - 1
    setQuantity(presentQuantity)
  }
  return (
    <div>
      <Helmet>
        <title>FoodHero | See Detail</title>
      </Helmet>
 
        {/* { <Purchase seeDetails={seeDetails}></Purchase>} */}
        
            <div className="card  glass">
            <figure>
              <img src={seeDetails.food_image} alt="car!" />
            </figure>
            <div className="flex justify-evenly">
              <div className="card-body">
                <h2 className="card-title">{seeDetails.food_name}</h2>
                <p>{seeDetails.food_category}</p>
                <p>Price: ${seeDetails.price}</p>
              </div>
              <div className="card-body">
                <p> Added By: {seeDetails.added_by}</p>
                <p>Origin: {seeDetails.food_origin_country}</p>
              </div>
            </div>
            <div className="card-body">
              <p className="text-center">{seeDetails.description}</p>
            </div>
            <div className="absolute top-[50%] left-[50%] card-actions justify-center">
              <button className="btn btn-secondary  w-96">
              {
            seeDetails.quantity == 0 ? "no food available"
            :
                <Link to={`/purchasePage/${id}`}>Order now!</Link>
              }
              </button>
            </div>
            <div className="mb-6 card-actions justify-center">
             
                <button onClick={()=>handleQuantity(seeDetails._id)} className="btn btn-secondary">
                {
            seeDetails.quantity == 0 ? "no food available"
            :
                <Link to={`/purchasePage/${id}`}>Order now!</Link>
}
              </button>
    
           
            </div>
          </div>
        
     
    </div>
  );
};

export default SeeDetail;
