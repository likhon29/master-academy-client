import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../pages/Blogs/Blogs";
import Courses from "../pages/Courses/Courses/Courses";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import NotFound from "../pages/Others/NotFound/NotFound";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/courses",
                element: <Courses></Courses>
            }
            , {
                path: '/blogs',
                element : <Blogs></Blogs>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            }
            ],
    },
    {
        path: '*',
        element: <NotFound></NotFound>
      }
]);
