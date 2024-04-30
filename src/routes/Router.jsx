import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";
import ErrorElement from "../components/ErrorElement";
import AllCraft from "../page/AllCraft";
import MyList from "../page/MyList";
import AddCraft from "../page/AddCraft";
import Login from "../page/Login";
import Register from "../page/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";
import CategoryDetails from "../page/CategoryDetails";
import UpdateCraft from "../page/UpdateCraft";
import CraftItemDetails from "../components/CraftItemDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/artCraft"),
      },

      {
        path: "/craftItemDetails/:id",
        element:  <CraftItemDetails />,
        loader: ({ params }) =>fetch(`http://localhost:5000/artCraft/${params.id}`),
      },
      {
        path: "/allCraft",
        element: <AllCraft />,
        loader: () => fetch("http://localhost:5000/artCraft"),
      },
      {
        path: "/addCraft",
        element: (
          <PrivateRoute>
            <AddCraft />
          </PrivateRoute>
        ),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/artCraft"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/categoryDetails/:id",
        element: (
          <PrivateRoute>
            <CategoryDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/artCraft/${params.id}`),
      },
      {
        path: "/updateCraft/:id",
        element: (
          <PrivateRoute>
            <UpdateCraft />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/artCraft/${params.id}`),
      },
    ],
  },
]);

export default router;
