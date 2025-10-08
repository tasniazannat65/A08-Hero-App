import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import PageError from "../ErrorHandle/PageError";



export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <PageError></PageError>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/apps',
                Component: Apps,
              
            },
            {
                path: '/installation',
                Component: Installation
            },
           
        ]
    }
])