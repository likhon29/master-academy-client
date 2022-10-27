import { createBrowserRouter } from "react-router-dom";
import CourseLayout from "../layout/CourseLayout";
import Main from "../layout/Main";
import Blogs from "../pages/Blogs/Blogs";
import CheckOut from "../pages/CheckOut/CheckOut";
import AllCourses from "../pages/Courses/AllCourses/AllCourses";
import CourseContainer from "../pages/Courses/CourseContainer/CourseContainer";
import CourseDetail from "../pages/Courses/CourseDetail/CourseDetail";
import Courses from "../pages/Courses/Courses/Courses";
import HscCourseContainer from "../pages/Courses/HscCourseContainer/HscCourseContainer";
import SscCourseContainer from "../pages/Courses/SscCourseContainer/SscCourseContainer";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import NotFound from "../pages/Others/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://master-academy-server.vercel.app/allCourses')
            },
            {
                path: "/courses/",
                element: <Courses></Courses>,
                children: [
                
                    {
                        path: "/courses/",
                        element: <CourseContainer></CourseContainer>,
                        loader: ()=>fetch('https://master-academy-server.vercel.app/allCourses')
                    },
                    {
                        path: "/courses/:id",
                        element: <CourseDetail></CourseDetail>,
                        loader : ({params})=> fetch(`https://master-academy-server.vercel.app/courses/${params.id}`)
                    },
                    {
                        path: "/courses/ssc",
                        element: <SscCourseContainer></SscCourseContainer>,
                        // loader: ()=>fetch('https://master-academy-server.vercel.app/allCourses')
        
                    },
                    {
                        path: "/courses/hsc",
                        element: <HscCourseContainer></HscCourseContainer>,
                        // loader: ()=>fetch('https://master-academy-server.vercel.app/allCourses')
        
                    },
                    // {
                    //     path: '/:group',
                    //     element: <CourseContainer></CourseContainer>,
                    //     loader: ({params})=> fetch(`http://localhost:3002/courses/category/${params.group}`)
                    // },
                    // {
                    //     path: "/courses/:group/:id",
                    //     element: <CourseContainer></CourseContainer>,
                    //     loader : ({params})=> fetch(`http://localhost:5000/courses/${params.group}/${params.id}`)
                    // },
                    
                    // {
                    //     path: "/courses/allCourses/:id",
                    //     element: <CourseDetail></CourseDetail>,
                    //     loader : ({params})=> fetch(`http://localhost:5000/course/${params.id}`)
                    // },
                    // {
                    //     path: "/courses/allCourses/:id",
                    //     element: <CourseDetail></CourseDetail>,
                    //     loader : ({params})=> fetch(`http://localhost:5000/course/${params.id}`)
                    // },
                    {
                        path: "/courses/ssc/:id",
                        element: <CourseDetail></CourseDetail>,
                        loader : ({params})=> fetch(`https://master-academy-server.vercel.app/courses/${params.id}`)
                    },
                    {
                        path: "/courses/hsc/:id",
                        element: <CourseDetail></CourseDetail>,
                        loader : ({params})=> fetch(`https://master-academy-server.vercel.app/courses/${params.id}`)
                    },
                    // {
                    //     path: "/courses/hsc/:id",
                    //     element: <CourseDetail></CourseDetail>,
                    //     loader : ({params})=> fetch(`http://localhost:5000/courses/${params.id}`)
                    // },
                    
                ]
            }
            , 
            {
                path: "/courses/ssc",
                element: <SscCourseContainer></SscCourseContainer>,
                // loader: ()=>fetch('https://master-academy-server.vercel.app/allCourses')

            },
            // {
            //         path: 'courses/allCourses',
            //         element: <AllCourses></AllCourses>
            // }
            {
                path: '/enroll/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params})=>fetch(`https://master-academy-server.vercel.app/courses/${params.id}`)
            },
             {
                path: '/faq',
                element : <FAQ></FAQ>,
            },
             {
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


// {
//     path: "/courses/allCourses",
//     element: <AllCourses></AllCourses>,
//     loader: ()=>fetch('http://localhost:5000/allCourses')
// },
// {
//     path: "/courses/:group",
//     element: <CourseContainer></CourseContainer>,
//     loader : ({params})=> fetch(`http://localhost:5000/courses/${params.group}`)
// },
// {
//     path: "/courses/allCourses/:id",
//     element: <CourseDetail></CourseDetail>,
//     loader : ({params})=> fetch(`http://localhost:5000/course/${params.id}`)
// },
// {
//     path: "/courses/ssc/:id",
//     element: <CourseDetail></CourseDetail>,
//     loader : ({params})=> fetch(`http://localhost:5000/course/${params.id}`)
// },
// {
//     path: "/courses/hsc/:id",
//     element: <CourseDetail></CourseDetail>,
//     loader : ({params})=> fetch(`http://localhost:5000/course/${params.id}`)
// },
// {
//     path: "/courses/d",
//     element: <h1>d</h1>
// }