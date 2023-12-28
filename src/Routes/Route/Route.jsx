import { createBrowserRouter } from "react-router-dom";
import { Main } from "../../Layout/Main";
import { Home } from "../../Pages/Home/Home";
import { AboutUs } from "../../Pages/AboutUs/AboutUs";
import { BlogPage } from "../../Pages/BlogPage/BlogPage";
import { Service } from "../../Pages/Service/Service";
import { Contact } from "../../Pages/Contact/Contact";
import { Error404 } from "../../Pages/Error404/Error404";
import { ServiceDetails } from "../../Components/ServiceDetails/ServiceDetails";
import { BlogDetails } from "../../Components/BlogDetails/BlogDetails";
import axios from "axios";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/blog",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/blog/:id",
        loader: ({ params }) => axios.get(`/single-blog/${params.id}`),
        element: <BlogDetails></BlogDetails>
      },
    ],
  },
]);
