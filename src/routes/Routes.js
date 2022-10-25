import { createBrowserRouter } from "react-router-dom";
import CourseLayout from "../layout/CourseLayout";
import Main from "../layout/Main";
import Blogs from "../pages/Blogs/Blogs";
import AllCourses from "../pages/Courses/AllCourses/AllCourses";
import CourseContainer from "../pages/Courses/CourseContainer/CourseContainer";
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
                // loader: () => fetch('http://localhost:5000/allCourses')
            },
            {
                path: "/courses",
                element: <Courses></Courses>,
                children: [
                    {
                        path: "/courses/allCourses",
                        element: <AllCourses></AllCourses>,
                        loader: ()=>fetch('http://localhost:5000/allCourses')
                    },
                    {
                        path: "/courses/:group",
                        element: <CourseContainer></CourseContainer>,
                        loader : ({params})=> fetch(`http://localhost:5000/courses/${params.group}`)
                    },
                    {
                        path: "/courses/c",
                        element: <h1>c</h1>
                    },
                    {
                        path: "/courses/d",
                        element: <h1>d</h1>
                    }
                ]
            }
            , 
            {
                    path: 'courses/allCourses',
                    element: <AllCourses></AllCourses>
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
