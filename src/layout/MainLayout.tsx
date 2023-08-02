import { Outlet } from "react-router-dom";
import AppFooter from "../components/Base/AppFooter";
import AppHeader from "../components/Base/AppHeader";


const MainLayout = () => {
  return <main>
    <AppHeader />
    <Outlet />
    <AppFooter />
  </main>;
};

export default MainLayout;
