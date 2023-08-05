import { NavLink } from "react-router-dom";
import logo from "../../assets/images/satori-logo.png";
import menu_icon from "../../assets/icons/menu.svg";
import "../../style/header.css";
import { useNavigate } from "react-router-dom";

const AppHeader = () => {
  const navigate = useNavigate();

  const goToWaitlist = () => {
    navigate("/join-waitlist");
  };

  return (
    <header className="app-header w-full z-[2] top-0 fixed">
      <main className="app-container">
        <div className="py-[24px] flex items-center justify-between">
          <div className="lg:w-[200px] md:w-[120] w-[80px] cursor-pointer">
            <img src={logo} alt="logo" onClick={() => navigate('/')}/>
          </div>

          <nav className="md:block hidden">
            <ul className="flex items-center">
              <li className="header_nav-link">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active-hnav-link" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="header_nav-link">
                <NavLink
                  to="/about-us"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active-hnav-link" : ""
                  }
                >
                  About us
                </NavLink>
              </li>
              <li className="header_nav-link">
                <NavLink
                  to="/blog"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active-hnav-link" : ""
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li className="header_nav-link">
                <NavLink
                  to="/contact-us"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active-hnav-link" : ""
                  }
                >
                  Contact us
                </NavLink>
              </li>
              <li className="header_nav-link">
                <NavLink
                  to="/faqs"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active-hnav-link" : ""
                  }
                >
                  FAQs
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="w-auto md:flex hidden items-center ">
            <button
              type="button"
              className="w-full btn sec-btn py-[12px] px-[24px] mr-[24px]"
              onClick={goToWaitlist}
            >
              Log in
            </button>
            <button
              type="button"
              className="w-full btn pry-btn py-[12px] px-[24px]"
              onClick={goToWaitlist}
            >
              Sign up
            </button>
          </div>

          <div className="md:hidden block">
            <img src={menu_icon} alt="" />
          </div>
        </div>
      </main>
    </header>
  );
};

export default AppHeader;
