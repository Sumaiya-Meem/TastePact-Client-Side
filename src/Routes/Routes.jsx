import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import AddFood from "../Pages/AddFoods/AddFood";
import PrivateRoute from "./PrivateRoutes";
import AvailableFood from "../Pages/AvailableFoods/AvailableFood";
import RequestFood from "../Pages/RequestFood/RequestFood";
import ManageFood from "../Pages/ManageFood/ManageFood";
import SingleFood from "../Pages/SingleFood/SingleFood";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          // loader:()=>fetch('http://localhost:5000/addedFoods')
        },
        {
          path: "/addFood",
          element: <PrivateRoute><AddFood></AddFood></PrivateRoute>,
        },
        {
          path: "/availableFood",
          element: <AvailableFood></AvailableFood>,
          // loader:()=>fetch('http://localhost:5000/addedFoods')
        },
        {
          path:"/food/:id",
          element:<SingleFood></SingleFood>,
          loader:({params})=>fetch(`http://localhost:5000/addedFoods/${params.id}`)

        },{
          path:"/availableFood/food/:id",
          element:<SingleFood></SingleFood>,
          loader:({params})=>fetch(`http://localhost:5000/addedFoods/${params.id}`)

        },

        {
          path: "/manageFood",
          element: <PrivateRoute><ManageFood></ManageFood></PrivateRoute>,
        },
        {
          path: "/foodRequest",
          element: <PrivateRoute><RequestFood></RequestFood></PrivateRoute>,
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
