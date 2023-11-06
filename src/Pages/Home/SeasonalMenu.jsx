import image from '../../assets/images/seaonalMenu.jpg'

const SeasonalMenu = () => {
  return (
    <div className='mt-36'>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/KV7YTqb/seaonal-Menu.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Fresh Seasonal Menu</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-outline btn-secondary">Discover More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonalMenu;
