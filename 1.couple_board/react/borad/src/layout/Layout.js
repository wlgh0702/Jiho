import {Outlet} from "react-router-dom";
import Header from "../pages/common/Header";
import Footer from "../pages/common/Footer";

function Layout() {

    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;