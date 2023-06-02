import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";

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
            element: <Order/>
        },
        {
          path: "/login",
          element: <Login/>
         },
        {
          path: "/signUp",
          element: <Register/>
         },
      ],
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard/></PrivateRoute>,
      children: [
        //users routes
        {
          path: 'userHome',
          element: <UserHome/>,
        },
        {
          path: 'myCart',
          element: <MyCart/>,
        },
        {
          path: 'payment',
          element: <Payment/>,
        },
        // admin routes
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome/></AdminRoute>,
        },
        {
          path: 'allUsers',
          element: <AdminRoute><AllUsers/></AdminRoute>,
        },
        {
          path: 'addItem',
          element: <AdminRoute><AddItem/></AdminRoute>
        },
        {
          path: 'manageItems',
          element: <AdminRoute><ManageItems/></AdminRoute>
        },
      ]
    }
  ]);

  export default router;