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
          loader: ({params})=> fetch(`http://localhost:5000/api/v1/allFood/${params.id}`)

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
  }
]);
export default router;