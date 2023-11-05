import { Helmet } from "react-helmet-async";


const Blog = () => {
    return (
        <div>
            <Helmet>
            <title>FoodHero | Blog</title>
            </Helmet>
            <h1 className="text-3xl text-center">Blogs</h1>
        </div>
    );
};

export default Blog;