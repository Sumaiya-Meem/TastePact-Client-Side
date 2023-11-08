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
import UpdateFood from "../Pages/UpdateFood/UpdateFood";
import ManageSingleFood from "../Pages/ManageSingleFood/ManageSingleFood";
import UpdateStatus from "../Pages/UpdateStatus/UpdateStatus";

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
          element:<PrivateRoute><SingleFood></SingleFood></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/addedFoods/${params.id}`)

        },
        {
          path:"/updateFood/:id",
          element:<PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/addedFoods/${params.id}`)

        },
        {
          path:"/status/:id",
          element:<PrivateRoute><UpdateStatus></UpdateStatus></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/requestFoods/${params.id}`)

        },
        
        {
          path:"/availableFood/food/:id",
          element:<PrivateRoute><SingleFood></SingleFood></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/addedFoods/${params.id}`)

        },

        {
          path: "/manageFood",
          element: <PrivateRoute><ManageFood></ManageFood></PrivateRoute>,
        },
        {
          path:"/manageFood/:id",
          element:<PrivateRoute><ManageSingleFood></ManageSingleFood></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/addedFoods/${params.id}`)

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
