import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div>
            <Helmet>
            <title>FoodHero | Home</title>
            </Helmet>
            <h2 className="text-3xl">Home page</h2>
        </div>
    );
};

export default Home;