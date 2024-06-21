import {Outlet} from "react-router-dom";
import {Header} from "../components/HeaderComponent/Header";
import {FooterComponent} from "../components/FooterComponent/FooterComponent";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export {MainLayout};