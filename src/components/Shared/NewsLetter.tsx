import { useState } from "react";
import "../../style/footer.css";
import { database } from "../../firebase";
import {
  ref,
  push,
  set,
  get,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";
import { toast } from "react-toastify";
import loadingGif from "../../assets/images/loading-gif.gif";
import satoriNotify from "../../../helpers/satoriNotify";

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

    const emailInput = document.getElementsByName(
      "email"
    )[0] as HTMLInputElement;
    const usernameInput = document.getElementsByName(
      "username"
    )[0] as HTMLInputElement;

    try {
      const subscribersRef = ref(database, "subscribers");

      // Check if email already exists
      const existingEmailQuery = query(
        subscribersRef,
        orderByChild("email"),
        equalTo(formData.email)
      );
      const existingEmailSnapshot = await get(existingEmailQuery);

      if (existingEmailSnapshot.exists()) {
        toast.info("Email already exists on the waitlist!!! 👍")
        satoriNotify(
          "Notification Title",
          "This is a notification message.",
          "success"
        );
      } else {
        const newPostRef = push(subscribersRef);
        await set(newPostRef, formData);
        toast.success("You have successfully joined the waitlist 😊");
      }
    } catch (error) {
      toast("Error Subscribing:");
      console.error("Error Subscribing:", error);
    } finally {
      emailInput.value = "";
      usernameInput.value = "";
      setIsSubmitting(false);
    }
  };

  return (
    <main id="join-waitlist" className="bg-[#F8FAFC]">
      <section className="app-container lg:py-[40px] py-[30px]">
        <div className="lg:mx-[80px] bg-[#9BE6F2] rounded-[20px] lg:py-[30px] py-[20px] px-[16px] flex flex-col items-center justify-center">
          <p className="lg:w-[60%] w-[100%] text-[#555E5F] text-center lg:mb-[10px] mb-[10px] lg:text-[24px] text-[18px] leading-[40px]">
            Don’t miss out on the opportunity to take control of your mental
            health and unlock a brighter future.
          </p>
          <h4 className="lg:text-[28px] text-[24px] font-600 lg:mb-[24px] mb-[20px]">
            100+ Subscribers
          </h4>
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
                "Join Now"
              )}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default NewsLetter;
