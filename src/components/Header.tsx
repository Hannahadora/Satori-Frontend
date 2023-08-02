import logo from "../assets/images/satori-logo.png";
// import JoinWaitListBtn from "./JoinWaitListBtn";

const Header = () => {
  return (
    <header className="w-full z-[2] bg-[#ffffff] top-0 fixed">
      <main className="app-container">
        <div className="py-[24px] flex items-center justify-between">
          <div className="lg:w-[200px] md:w-[120] w-[80px]">
            <img src={logo} alt="logo" />
          </div>
          <div className="max-w-[336px] w-[100%]">
            <button type="button" className="btn pry-btn py-[8px] px-[16px]">
              <a className="w-full m-0 p-0" href="#waitlist-section">Join our waitlist</a>
            </button>
          </div>
        </div>
      </main>
    </header>
  );
};

export default Header;
