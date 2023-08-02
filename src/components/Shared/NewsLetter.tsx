import { useState } from "react";
import "../../style/footer.css";
import { database } from "../../firebase";
import { ref, push, set } from "firebase/database";
import { toast } from "react-toastify";
import loadingGif from "../../assets/images/loading-gif.gif";

const NewsLetter = () => {
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

  const handleSubmit = async (e: any) => {
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
      const emailInput = document.getElementsByName(
        "email"
      )[1] as HTMLInputElement;
      const usernameInput = document.getElementsByName(
        "username"
      )[0] as HTMLInputElement;
      emailInput.value = "";
      usernameInput.value = "";
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#F8FAFC]">
      <section className="app-container lg:py-[40px] py-[30px]">
        <div className="bg-[#9BE6F2] rounded-[20px] lg:py-[30px] py-[20px] px-[16px]">
          <p className="mb-[10px] lg:text-[40px] text-[30px] text-center font-[600]">
            Join our newsletter
          </p>
          <p className="mb-[24px] text-center">Stay connected and updated on the latest updates, and insights</p>
          <form
            onSubmit={handleSubmit}
            className="lg:w-[45%] w-full mx-auto flex flex-col items-center justify-center"
          >
            <input
              placeholder="Full name"
              className="w-full mb-[16px] footer-input"
              type="text"
              name="username"
              required
              onChange={handleChange}
            />
            <input
              placeholder="Email address"
              className="w-full mb-[16px] footer-input"
              type="text"
              name="email"
              required
              onChange={handleChange}
            />
            <button
              type="submit"
              className="btn pry-btn lg:ml-[16px] ml-[0]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="w-full m-0 p-0 flex items-center justify-center">
                  <img
                    className="w-[20px] h-[20px]"
                    src={loadingGif}
                    alt="loading-spinner"
                  />
                </div>
              ) : (
                "Subscribe Now"
              )}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default NewsLetter;
