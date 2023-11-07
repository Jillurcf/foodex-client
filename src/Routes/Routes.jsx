import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AllFoodItem from "../Pages/AllFoodItem/AllFoodItem";
import Blog from "../Pages/Blog/Blog";
import SignIn from "../Pages/SignIn/SignIn";
import Register from "../Pages/Register/Register";
import SeeDetail from "../Pages/AllFoodItem/SeeDetail";
import PrivateRoute from "./PrivateRoute";
import Purchase from "../Pages/Purchase/Purchase";
import AddFood from "../Pages/AddFood/AddFood";
import OrderedFood from "../Pages/OrcderedFood/OrderedFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'allFoodItems',
          element: <AllFoodItem></AllFoodItem>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: 'seeDetail/:id',
          element: <SeeDetail></SeeDetail>,
          loader: ({params})=> fetch(`https://assignment11-server-side-chi.vercel.app/api/v1/allFood/${params.id}`)

        },
        {
          path: 'purchasePage/:id',
          element: <PrivateRoute><Purchase></Purchase></PrivateRoute>,
          loader: ({params})=> fetch(`https://assignment11-server-side-chi.vercel.app/api/v1/allFood/${params.id}`)
          
        },
        {
          path: 'addFood',
          element: <AddFood></AddFood>,
          loader: ()=> fetch('http://localhost:5000/api/v1/allFood')
        },
        {
          path: 'orderdFood',
          element: <OrderedFood></OrderedFood>
        }
        

    ]
  },
  {
    path: 'signin',
    element: <SignIn></SignIn>
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  
]);
export default router;