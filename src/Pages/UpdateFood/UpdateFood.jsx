import axios from "axios";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { useParams } from "react-router-dom";

const UpdateFood = () => {
const {user} = UseAuth()
const {id} = useParams()

    const handleUpdateFood = (e) => {
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
    
        const updateFood = {
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
        console.log(updateFood);
    
        axios.put(
          `https://assignment11-server-side-chi.vercel.app/api/v1/allFood/update/${id}`,
         updateFood,
          { withCredentials: true }
        );
        Swal.fire("Food Updated");
      
      };

    return (
        <div>
               <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/ZNXWRjT/Update.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="hero min-h-screen ">
              <div className="hero-content flex-col lg:flex-row-reverse">
               
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                  <form onSubmit={handleUpdateFood} className=" mt-36 card-body">
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
                      <button className="btn btn-primary">Update Food</button>
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

export default UpdateFood;