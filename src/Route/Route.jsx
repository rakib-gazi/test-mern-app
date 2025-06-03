import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Shops from "../pages/Shops";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement: ,
    children: [
      {
        path: "*",
        element:<PrivateRoute><Shops/></PrivateRoute> , 
      },
      {
        path: "/",
        element: <SignUp/>,
      },
      {
        path: "/signup",
        element:<SignUp/> ,
      },
     {
        path: "/signin",
        element: <SignIn/>,
      },
     {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard/></PrivateRoute>,
      },
    ],
  },
]);
export default router;
