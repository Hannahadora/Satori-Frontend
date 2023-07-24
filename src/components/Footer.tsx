import { useState } from "react";
import "../style/footer.css";
import logo from "../assets/satori-logo.png";
import { database } from "../firebase";
import { ref, push, set } from "firebase/database";
import { toast } from "react-toastify";
import loadingGif from '../assets/loading-gif.gif'

// import { Link } from "react-router-dom";

// import google_icon from "../assets/devicon_google.png"
// import facebook_icon from "../assets/logos_facebook.png"
// import twitter_icon from "../assets/devicon_twitter.png"

const Footer = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const newPostRef = push(ref(database, "subscribers"));
      await set(newPostRef, formData);
      toast("Thank you for subscribing!!! 👍");
    } catch (error) {
      toast("Error Subscribing:");
      console.error("Error Subscribing:", error);
    } finally {
         // Clear input fields after submission
         setFormData({
          username: "",
          email: "",
        });
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#F8FAFC]">
      <section className="app-container lg:pt-[66px] pt-[40px] lg:pb-[86px] pb-[60px]">
        <div className="bg-[#9BE6F2] rounded-[20px] lg:py-[80px] py-[60px] flex flex-col items-center justify-center">
          <h3 className="mb-[18px] lg:text-[40px] text-[30px] text-center">
            Subscribe to our <br />
            newsletter
          </h3>
          <form
            onSubmit={handleSubmit}
            className="xl:w-auto lg:w-[60%] w-[80%] lg:grid flex flex-col items-center justify-center grid-cols-3 lg:space-x-[15px] space-x-0 lg:space-y-0 space-y-[16px]"
          >
            <input
              placeholder="Full name"
              className="xl:w-auto w-full footer-input"
              type="text"
              name="username"
              required
              onChange={handleChange}
            />
            <input
              placeholder="Email address"
              className="xl:w-auto w-full footer-input"
              type="text"
              name="email"
              required
              onChange={handleChange}
            />
            <button type="submit" className="btn pry-btn lg:ml-[16px] ml-[0]" disabled={isSubmitting}>
              {isSubmitting ? <div className="w-full flex items-center justify-center"><img className="w-[20px] h-[20px]" src={loadingGif} alt="loading-spinner" /></div> : "Subscribe"}
            </button>
          </form>
        </div>

        {/* <div className="mt-[116px] mb-[34px] grid lg:grid-cols-5 grid-cols-2">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="footer_nav-links">
            <h6 className="mb-[10px]">PAGES</h6>
            <Link className="mb-[10px]" to="/">Home</Link>
            <Link className="mb-[10px]" to="/">Blog</Link>
            <Link className="mb-[10px]" to="/">Resource</Link>
          </div>
          <div className="footer_nav-links">
            <h6 className="mb-[10px]">INFORMATION</h6>
            <Link className="mb-[10px]" to="/">About</Link>
            <Link className="mb-[10px]" to="/">Why choose Satori</Link>
            <Link className="mb-[10px]" to="/">Who we are</Link>
          </div>
          <div className="footer_nav-links">
            <h6 className="mb-[10px]">SUPPORT</h6>
            <Link className="mb-[10px]" to="/">Contact us</Link>
            <Link className="mb-[10px]" to="/">Terms of use</Link>
            <Link className="mb-[10px]" to="/">Privacy policy</Link>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-[16px] mb-[30px]">
          <Link mailto="" target="_blank"><img src={google_icon} alt="google_icon" /></Link>
          <Link to="https://www.facebook.com/" target="_blank"><img src={facebook_icon} alt="facebook_icon" /></Link>
          <Link to="https://www.twitter.com/" target="_blank"><img src={twitter_icon} alt="twitter_icon" /></Link>
        </div> */}

        <div className="border-t border-[#E2E8F0] mt-[24px]">
          <div className="flex items-center justify-center mb-[20px] mt-[50px]">
            <img src={logo} className="h-[58px] w-[174px]" alt="logo" />
          </div>
          <p className="text-[14px] text-center text-[#71717A]">
            © Copyright {new Date().getFullYear()}, All Rights Reserved{" "}
          </p>
        </div>
      </section>
    </main>
  );
};

export default Footer;
