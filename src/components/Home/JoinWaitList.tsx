import { useState } from "react";
import { database } from "../../firebase";
import { ref, push, set } from "firebase/database";
import { toast } from "react-toastify";
import loadingGif from '../../assets/loading-gif.gif'

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
      toast('You have been added to the waitlist!!! 😊')
    } catch (error) {
      toast("Error adding to waitlist:");
      console.error("Error adding to waitlist:", error);
    } finally {
      const emailInput = document.getElementsByName("email")[0] as HTMLInputElement;
      emailInput.value = "";
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#F9F9F9] py-[60px]" id="waitlist-section">
      <div className="app-container flex flex-col items-center justify-center">
        <h5 className="lg:w-[75%] w-[100%] text-center lg:mb-[60px] mb-[40px] lg:text-[28px] text-[22px]">
          Don’t miss out on the opportunity to take control of your mental
          health and unlock a brighter future
        </h5>
        <form
          onSubmit={handleWaitListJoining}
          className="lg:w-[75%] w-[100%] py-[8px] pr-[8px] pl-[16px] bg-[#fff] rounded-[16px] border border-[#D3D7D7] flex items-center justify-between"
        >
          <div className="w-[50%]">
            <input
              placeholder="Enter your email"
              className="bg-transparent w-full"
              type="text"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="lg:w-[40%] w-[50%]">
            <button
              type="submit"
              className="btn pry-btn py-[12px]"
              disabled={isSubmitting}
            >
              {isSubmitting ? <div className="w-full flex items-center justify-center"><img className="w-[20px] h-[20px]" src={loadingGif} alt="loading-spinner" /></div> : "Join our waitlist"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default JoinWaitList;
