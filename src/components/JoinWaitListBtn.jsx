import React from "react";

const JoinWaitListBtn = () => {
  return (
    <button
    type="button"
      className="btn pry-btn py-[12px]"
      // onClick={() => {
      //   const email = "mitela260@gmail.com";
      //   const subject = "Join Waitlist";
      //   const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      //     subject
      //   )}`;
      //   window.location.href = mailtoLink;
      // }}
    >
      <a href="#waitlist-section">Join our waitlist</a>
    </button>
  );
};

export default JoinWaitListBtn;
