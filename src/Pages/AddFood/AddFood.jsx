import axios from "axios";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const AddFood = () => {
  const { user } = UseAuth();
  const [addedFood, setaddedFood] = useState([]);
  
  console.log(user);
  const allFodd = useLoaderData([])
  const [allFodds, setAllFoods] = useState(allFodd)
  console.log(allFodds);
  //   const addedFood = useLoaderData()
  // console.log(addedFood);
  // const {email }= useParams()

  useEffect(() => {
    if (user) {
      // console.log(email);
      fetch(
        `https://assignment11-server-side-chi.vercel.app/api/v1/allFood/food/${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => setaddedFood(data));
    }
  }, [user]);

  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const food_name = form.foodName.value;
    const food_image = form.image.value;
    const food_category = form.category.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const userName = form.userName.value;
    const email = form.userEmail.value;
    const origin = form.origin.value;
    const description = form.description.value;

    const addFood = {
      food_name,
      food_image,
      food_category,
      quantity,
      price,
      userName,
      email,
      origin,
      description,
    };
    console.log(addFood);

    axios.post(
      "https://assignment11-server-side-chi.vercel.app/api/v1/allFood",
      addFood,
      { withCredentials: true }
    );
    Swal.fire("Food Added");
    window.reload()
  };


  const handleDelete = id =>{
   Swal.fire('are you sure you want to delete?')
    // Swal.fire('are you sure you want to delete?')
    // if(proceed){
       
    fetch(`https://assignment11-server-side-chi.vercel.app/api/v1/allFood/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                Swal.fire('successfull')
                const remaining = allFodds.filter(food => food._id !== id)
                setAllFoods(remaining)
            }
        })
    // }
}




  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/ZBNJ6fB/addFood.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="hero min-h-screen ">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                  <h1>Food Added By: {user?.displayName}</h1>

                  {/* add food */}
                  {addedFood.map((adFood) => (
                    <div key={adFood._Id} className="overflow-x-auto">
                      <table className="table">
                        {/* head */}
                        <thead>
                          <tr>
                            <th>
                              <label>
                                <input type="checkbox" className="checkbox" />
                              </label>
                            </th>
                            <th>Food Image</th>
                            <th>Food Name & Origin</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* row 1 */}
                          <tr>
                            <th>
                              <label>
                                <input type="checkbox" className="checkbox" />
                              </label>
                            </th>
                            <td>
                              <div className="flex items-center space-x-3">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-12 h-12">
                                    <img
                                      src={adFood.food_image}
                                      alt="Avatar Tailwind CSS Component"
                                    />
                                  </div>
                                </div>
                                <div></div>
                              </div>
                            </td>
                            <td>
                              {adFood.food_name} <br />
                              Origin: {adFood.origin}
                            </td>
                            <td>Price: ${adFood.price}</td>
                            <td>
                              <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
                                <button  className="btn btn-active">
                                <Link to="/updateFood"> Update</Link>
                                </button>
                                <button onClick={()=> handleDelete(adFood._id)} className="btn">X</button>
                               
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                  <form onSubmit={handleAddFood} className=" mt-36 card-body">
                    <h1 className="text-2xl font-bold">Please add Food</h1>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Food Name</span>
                      </label>
                      <input
                        type="text"
                        name="foodName"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Food Image</span>
                      </label>
                      <input
                        type="text"
                        name="image"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Food Category</span>
                      </label>
                      <input
                        type="text"
                        name="category"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Quantity</span>
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Price</span>
                      </label>
                      <input
                        type="number"
                        name="price"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Added By</span>
                      </label>
                      <input
                        type="text"
                        name="userName"
                        defaultValue={user?.displayName}
                        className="input input-bordered"
                        required
                      />
                      <input
                        type="text"
                        name="userEmail"
                        defaultValue={user?.email}
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Food Origin</span>
                      </label>
                      <input
                        type="text"
                        name="origin"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Short Description</span>
                      </label>
                      <input
                        type="text"
                        name="description"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Add Food</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
