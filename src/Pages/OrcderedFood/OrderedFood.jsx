import { useState } from "react";
import { useEffect } from "react";
import UseAuth from "../../Hooks/UseAuth";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";

const OrderedFood = () => {
  const { user } = UseAuth();
  const [orderedFood, setOrderedFood] = useState([]);
  // const axiosSecure = useAxiosSecure()
  console.log(orderedFood);

  // const url = `/orderdFood?email=${user?.email}`;

  // useEffect(() => {

  //   axiosSecure.get(url)
  //   .then(res=> setOrderedFood(res.data))
  // }, [url, axiosSecure]);

  useEffect(() => {
    if (user) {
      // console.log(email);
      fetch(`http://localhost:5000/api/v1/purchase/food/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setOrderedFood(data));
    }
  }, [user]);

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/MDH6Zfh/oredered-Item.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="text-blue-600 font-bold text-2xl mb-4">My Order History</h1>
            <div className="overflow-x-auto">
              <table className="table">
               
                {/* head */}
                <thead className="text-white">
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                
                    <th>Food Name</th>
                    <th>Price</th>
                    <th>Added Time</th>
                    <th>Food Owner</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {
                    orderedFood.map(food=> 
                        <tr key={food._id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      {/* <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={food.food_image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Hart Hagerty</div>
                          <div className="text-sm opacity-50">
                            United States
                          </div>
                        </div>
                      </div> */}
                      {food.foodName}
                    </td>
                    <td>
                     {food.price}
                    </td>
                    <td>{user?.metadata.lastSignInTime}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">{user?.displayName}</button>
                    </th>
                  </tr>
                        )
                  }
                </tbody>
                
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderedFood;