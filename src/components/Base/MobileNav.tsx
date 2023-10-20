import "../../style/header.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import close_icon from "../../assets/icons/close.svg";

interface MobileNavProps {
  closeMobileNav: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ closeMobileNav }) => {

  const navigate = useNavigate();

  const goToWaitlist = () => {
    navigate("/join-waitlist");
  };
  const handleNavLinkClick = () => {
    // Close mobile navigation when a link is clicked
    closeMobileNav();
  };
  return (
    <div>
      <div className="app-header w-full h-[80%] z-[2] top-0 fixed">
        <div className="flex flex-col items-end justify-end">
          <nav className="w-[80%] mt-[30px] px-[24px] py-[24px]">
          <div className="mb-[20px] flex items-center justify-end">
              <img className="cursor-pointer"
                onClick={handleNavLinkClick}
                src={close_icon}
                alt="close"
              />
            </div>
            <ul className="flex flex-col items-start w-[100%]">
              <li className="text-left px-[20px[ py-[15px] text-[14px] font-[500]">
                <NavLink onClick={handleNavLinkClick}
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active-hnav-link" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="text-left px-[20px[ py-[15px] text-[14px] font-[500]">
                <NavLink onClick={handleNavLinkClick}
                  to="/about-us"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active-hnav-link" : ""
                  }
                >
                  About us
                </NavLink>
              </li>
              <li className="text-left px-[20px[ py-[15px] text-[14px] font-[500]">
                <NavLink onClick={handleNavLinkClick}
                  to="/blog"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active-hnav-link" : ""
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li className="text-left px-[20px[ py-[15px] text-[14px] font-[500]">
                <NavLink onClick={handleNavLinkClick}
                  to="/contact-us"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active-hnav-link" : ""
                  }
                >
                  Contact us
                </NavLink>
              </li>
              <li className="text-left px-[20px[ py-[15px] text-[14px] font-[500]">
                <NavLink onClick={handleNavLinkClick}
                  to="/faqs"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active-hnav-link" : ""
                  }
                >
                  FAQs
                </NavLink>
              </li>
            </ul>
          <div className="w-auto">
            <button
              type="button"
              className="w-full btn sec-btn py-[12px] px-[24px] mt-[24px]"
              onClick={goToWaitlist}
            >
              Log in
            </button>
            <button
              type="button"
              className="w-full btn pry-btn py-[12px] px-[24px] mt-[24px]"
              onClick={goToWaitlist}
            >
              Sign up
            </button>
          </div>
          </nav>

        </div>
      </div>
    </div>
  );
};

export default MobileNav;
