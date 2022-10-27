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
import Profile from "../pages/Others/Profile/Profile";
import TermsAndConditions from "../pages/Others/TermsAndCondition/TermsAndConditions";
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
                    
                    
                ]
            }
            , 
            {
                path: "/courses/ssc",
                element: <SscCourseContainer></SscCourseContainer>,
                // loader: ()=>fetch('https://master-academy-server.vercel.app/allCourses')

            },
            
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
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            ],
    },
    {
        path: '*',
        element: <NotFound></NotFound>
      }
]);

