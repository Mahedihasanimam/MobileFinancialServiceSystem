import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../mainlayout/Mainlayout";
import Login from "../pages/Login";
import DashboardMain from "../pages/DashboardMain";
import Registation from "../pages/Registation";
import SentMoney from "../components/user/SentMoney";
import Cashin from "../components/user/Cashin";
import Cashout from "../components/user/Cashout";



const router=createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout/>,
        children:[
            {
                path:'/',
                element:<DashboardMain/>
            },
            {
                path:'/sentmoney',
                element:<SentMoney/>
            },
            {
                path:'/cashin',
                element:<Cashin/>
            },
            {
                path:'/cashout',
                element:<Cashout/>
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