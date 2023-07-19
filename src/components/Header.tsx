import logo from "../assets/satori-logo.png";
// import JoinWaitListBtn from "./JoinWaitListBtn";

const Header = () => {
  return (
    <header className="w-full z-[2] bg-[#ffffff] shadow top-0 fixed">
      <main className="app-container">
        <div className="py-[10px] flex items-center justify-between">
          <div className="lg:w-[200px] md:w-[120] w-[80px]">
            <img src={logo} alt="logo" />
          </div>
          <div className="">
            <button type="button" className="btn pry-btn py-[12px]">
              <a className="w-full" href="#waitlist-section">Join our waitlist</a>
            </button>
          </div>
        </div>
      </main>
    </header>
  );
};

export default Header;
