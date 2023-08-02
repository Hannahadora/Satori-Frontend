import { useState } from "react";
import { database } from "../../firebase";
import { ref, push, set } from "firebase/database";
import { toast } from "react-toastify";
import loadingGif from "../../assets/images/loading-gif.gif";

const JoinWaitList = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWaitListJoining = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const newPostRef = push(ref(database, "waitlist"));
      await set(newPostRef, formData);
      toast("You have been added to the waitlist!!! 😊");
    } catch (error) {
      toast("Error adding to waitlist:");
      console.error("Error adding to waitlist:", error);
    } finally {
      const emailInput = document.getElementsByName(
        "email"
      )[0] as HTMLInputElement;
      emailInput.value = "";
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="bg-[#F9F9F9] py-[60px] px-[120px] mx-[80px]"
      id="waitlist-section"
    >
      <div className="app-container flex flex-col items-center justify-center">
        <p className="lg:w-[60%] w-[100%] text-[#555E5F] text-center lg:mb-[24px] mb-[20px] lg:text-[24px] text-[18px] leading-[40px]">
          Don’t miss out on the opportunity to take control of your mental
          health and unlock a brighter future.
        </p>
        <h4 className="lg:text-[28px] text-[20px] font-600 lg:mb-[60px] mb-[40px]">
          100+ Subscribers
        </h4>
        <form
          onSubmit={handleWaitListJoining}
          className="lg:w-[60%] w-[100%] py-[8px] pr-[8px] pl-[16px] bg-[#fff] rounded-[16px] border border-[#D3D7D7] flex items-center justify-between"
        >
          <div className="w-[50%]">
            <input
              placeholder="Enter your email"
              className="bg-transparent w-full text-[16px]"
              type="text"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="lg:w-[40%] w-[50%]">
            <button
              type="submit"
              className="btn pry-btn lg:py-[12px] py-[10px]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="w-full flex items-center justify-center">
                  <img
                    className="w-[20px] h-[20px]"
                    src={loadingGif}
                    alt="loading-spinner"
                  />
                </div>
              ) : (
                "Join our waitlist"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default JoinWaitList;
