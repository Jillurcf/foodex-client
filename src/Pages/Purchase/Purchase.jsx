import axios from "axios";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";

const Purchase = () => {
    const {user} = UseAuth()
    console.log(user.email);
    const handlePurchase = e =>{
        e.preventDefault()
        const form = e.target;
        const foodName = form.foodName.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const name = user.displayName
        const email = user.email;
        const buyingDate = form.buyingDate.value;
        const purchase = {foodName, price, quantity, name, email, buyingDate}
        console.log(purchase);
        
        axios.post('https://assignment11-server-side-chi.vercel.app/api/v1/purchase', purchase, {withCredentials: true})
       .then(res => {
        console.log(res.data);
        Swal.fire('Purchase successfull')
        
       })

      //  fetch('http://localhost:5173/api/v1/purchase', {
      //     method: "POST",
      //     headers: {
      //       "content-type": "application/json",
      //     },
      //     body: JSON.stringify(purchase)
      //   })
    }
  return (
    <div>
   <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/YBcMKnH/purchase.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
     
    <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handlePurchase} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Food Name</span>
          </label>
          <input type="text"  name="foodName" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name="price" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="number" name="quantity" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Buyer Name</span>
          </label>
          <input type="text" defaultValue={user.displayName} placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Buyer Email</span>
          </label>
          <input type="email" defaultValue={user.email} placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Buying Date</span>
          </label>
          <input type="date" name="buyingDate" placeholder="" className="input input-bordered" required />
        </div>
       
        <div className="form-control mt-6">
          <button className="btn btn-primary">Purchase</button>
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

export default Purchase;
