import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../mainlayout/Mainlayout";
import Login from "../pages/Login";
import DashboardMain from "../pages/DashboardMain";
import Registation from "../pages/Registation";



const router=createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout/>,
        children:[
            {
                path:'/',
                element:<DashboardMain/>
            },
        ],
    },
   
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/registation',
        element:<Registation/>
    },
])
export default router