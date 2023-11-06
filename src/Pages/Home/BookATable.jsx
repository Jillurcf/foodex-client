const BookATable = () => {
  return (
    <div className="my-8">
      <div className="card w-1/2 flex mx-auto bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-white text-4xl fon-bold">BooK A Table</h2>
         <div className="">
         <input type="number" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
         <input type="date" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
         <input type="time" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
            
         </div>
          <div className="card-actions justify-end">
            <button className="btn btn-warning">Book Now!</button>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookATable;
