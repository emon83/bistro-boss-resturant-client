import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/menu",
            element: <Menu/>
        },
        {
            path: "/order/:category",
            element: <PrivateRoute><Order/></PrivateRoute>
        },
        {
          path: "/login",
          element: <Login/>
         },
        {
          path: "/signUp",
          element: <Register/>
         },
      ]
    },
  ]);

  export default router;