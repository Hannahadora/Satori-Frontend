import { Outlet } from "react-router-dom";
import Footer from "../components/Base/Footer";


const MainLayout = () => {
  return <main>
    
    <Outlet />
    <Footer />
  </main>;
};

export default MainLayout;
