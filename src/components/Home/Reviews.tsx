import { useState, useEffect } from "react";
import { IReview, usersReviews } from "../../../public/json/userReviews";
import quoteIcon from "../../assets/icons/quote.svg"

const Reviews = () => {
  const [reviews, setReviews] = useState(usersReviews);

  useEffect(() => {
    setReviews(usersReviews)
  }, [])
  

  return (
    <div className="app-container">
      <div className="text-center mt-[80px]">
        <h3 className="md:text-[36px] text-[28px] font-600 leading-[46px]">Real Stories, Real Impact</h3>
        <p className="text-[#555E5F] md:text-[22px] text-[16px]">
          Don’t just take our word for it; Hear from our users
        </p>
      </div>

      <div className="w-full flex flex-row lg:overflow-x-hidden overflow-x-scroll lg:px-[100px] px-[36px] px-[0]">
        {reviews &&
          reviews.map((review: IReview, i: any) => (
            <div
              key={i}
              className="min-w-[346px] rounded-[16px] border border-[#E6E8E8] bg-[#fff] p-[16px] my-[40px] mr-[16px] text-[14px] leading-[20px]"
            >
              <p className="border-b border-[#E6E8E8] pb-[12px]">{review.msg}</p>
              <div className="w-full mt-[18px] flex flex-row items-start">
                <img className="w-[40px] h-[40px] rounded-full mr-[16px]" src={review.icon} alt="" />
                <div>
                  <p className="">{review.name}</p>
                  <p>{review.role}</p>
                </div>
                <img className="self-end" src={quoteIcon} alt="" />
              </div>
            </div>
          ))}
      </div>

      <div className="flex items-center justify-center">
        <button className="sec-btn text-[18px] px-[16px] py-[8px] rounded-[100px]">View all</button>
      </div>
    </div>
  );
};

export default Reviews;
