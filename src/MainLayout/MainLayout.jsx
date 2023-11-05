import Footers from "../components/Footer/Footers";
import Header from "../components/Navbar/Header";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footers></Footers>
        </div>
    );
};

export default MainLayout;