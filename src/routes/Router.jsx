import {
    createBrowserRouter,
  
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";
import ErrorElement from "../components/ErrorElement";
import AllCraft from "../page/AllCraft";
import MyList from "../page/MyList";
import AddCraft from "../page/AddCraft";
import Login from "../page/Login";
import Register from "../page/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<ErrorElement/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/allCraft',
            element: <AllCraft/>
        },
        {
            path:'/addCraft',
            element: <PrivateRoute><AddCraft/></PrivateRoute>
        },
        {
            path:'/myList',
            element: <PrivateRoute><MyList/></PrivateRoute>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path:'/register',
            element: <Register/>
        }
      ]
    },
  ]);



  export default router