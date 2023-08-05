import logo from "../assets/images/satori-logo.png";
import { useNavigate } from "react-router-dom";
import '../style/header.css'

const JWLHeader = () => {
  const navigate = useNavigate()

  return (
    <header className="app-header w-full z-[2] top-0 fixed">
      <main className="app-container">
        <div className="py-[24px] flex items-center justify-between">
        <div className="lg:w-[200px] md:w-[120] w-[80px] cursor-pointer">
            <img src={logo} alt="logo" onClick={() => navigate('/')}/>
          </div>

          <div className="max-w-[336px] lg:w-[100%]">
            <button type="button" className="btn pry-btn py-[8px] px-[16px]">
              <a className="w-full m-0 p-0" href="#join-waitlist">Join our waitlist</a>
            </button>
          </div>
        </div>
      </main>
    </header>
  );
};

export default JWLHeader;
