import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
const LayoutRoot = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-main-bg">
                <Header/>
                <main className="grow">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
}
 
export default LayoutRoot;