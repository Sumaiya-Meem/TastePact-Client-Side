import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import AddFood from "../Pages/AddFoods/AddFood";
import PrivateRoute from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/addFood",
          element: <PrivateRoute><AddFood></AddFood></PrivateRoute>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        
        
       
    ]
    },
  ]);

export default router;
