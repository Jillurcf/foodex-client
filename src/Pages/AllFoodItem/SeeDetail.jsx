import { Link, useLoaderData } from "react-router-dom";

const SeeDetail = () => {
  const seeDetails = useLoaderData();
  console.log(seeDetails);
  return (
    <div>
     
      <div className="card  glass">
        <figure>
          <img
            src={seeDetails.food_image}
            alt="car!"
          />
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
            <button className="btn btn-secondary  w-96">Order now!</button>
          </div>
        <div className="mb-6 card-actions justify-center">
            <button className="btn btn-secondary"><Link to='/purchasePage'>Order now!</Link></button>
          </div>
         
      </div>
     
    </div>
  );
};

export default SeeDetail;
