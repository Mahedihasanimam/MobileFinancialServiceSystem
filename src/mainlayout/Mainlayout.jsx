import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopNab from "../components/TopNab";
import Footer from "../components/Footer";


const Mainlayout = () => {
    return (
        <div>
            {/* top nav  */}
            <TopNab/>
            {/* sidebar  */}
            <div className=" lg:flex ">
            <Sidebar/>
            <Outlet/>
            </div>
            {/* footer */}
            <Footer/>
        </div>
    );
};

export default Mainlayout;