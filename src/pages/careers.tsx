import img1 from "../assets/images/careers_1.png";
import img2 from "../assets/images/careers_2.png";
import careerBenefits from "../../public/json/careerBenefits";
import { useState } from "react";
import {IJobData, IJobRole, jobOpenings} from '../../public/json/jobOpenings'
import { BiChevronDownCircle, BiChevronRightCircle, BiChevronUpCircle } from "react-icons/bi";

const careers = () => {
    // Use an array of boolean states to manage whether each job's answer is shown or not
    const [showOpenings, setShowOpenings] = useState(new Array(jobOpenings.length).fill(false));


    const toggleShowOpenings = (index: any) => {
      setShowOpenings((prevState) => {
          const newState = prevState.map((state, i) => (i === index ? !state : false));
          return newState;
        });
    };
  
  return (
    <div className="mt-[160px] mb-[100px]">
      <div className="app-container">
        <h3 className="text-center text-[#010809] md:text-[56px] text-[30px] mb-[16px] font-[700]">
          Careers
        </h3>
        <div className="md:w-[60%] w-[80%] mx-auto">
          <p className="text-center text-[#758183] lg:text-[24px] md:text-[20px] text-[18px] font-[500] laeding-[34px]">
            Join our compassionate team and make a difference in mental health
            care – explore rewarding career opportunities with us!
          </p>
        </div>
        <div className="lg:w-[30%] md:w-[50%] w-[70%] mx-auto mt-[48px]">
          <button className="btn pry-btn px-[16px] py-[8px] text-[18px]">
           <a href="#job-openings">Browse open positions</a>
          </button>
        </div>

        <div className="mt-[48px]">
          <div className="flex md:flex-row flex-col items-center justify-between">
            <div className="md:mr-[24px] md:mb-[0] mb-[24px]">
              <img src={img1} alt="illus" />
            </div>
            <div>
              <img src={img2} alt="illust" />
            </div>
          </div>
        </div>

        <div className="mt-[120px]">
          <p className="font-[600] lg:text-[48px] md:text-[45px] text-[36px] text-center text-[#010809] leading-[60px]">
            Benefits of working with us
          </p>

          <div className="mt-[48px] flex flex-wrap items-center justify-center sm:space-x-[24px]">
            {careerBenefits.map((benefit: any, i) => (
              <div
                key={i}
                className="px-[38px] py-[39px] max-w-[340px] rounded-[30px] bg-[#fff] shadow mb-[32px]"
              >
                <img src={benefit.icon} alt="icon" />
                <p className="mt-[24px] mb-[16px] md:text-[24px] text-[20px] font-[500]">
                  {benefit.title}
                </p>
                <p className="text-[16px] text-[#758183] font-[400]">
                  {benefit.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[120px]" id="job-openings">
          <p className="font-[600] lg:text-[48px] md:text-[45px] text-[36px] text-center text-[#010809] leading-[60px]">
            Open Roles
          </p>
          <p className="mx-auto md:w-[60%] w-[80%] text-[#555E5F] font-[500] lg:text-[24px] md:text-[20px] text-[18px] leading-[34px] text-center">
            We’re growing fast, and looking for smart, passionate and talented
            people with great attitudes to join our team. Here’s what’s open
            right now.
          </p>

          <div className="mt-[48px]">
            <div className="pt-[20px] flex items-end justify-between">
              <p className="md:text-[24px] text-[20px]">
                3 roles, all <span className="font-[700]">Remote</span>
              </p>

              <div>
                <p className="text-[12px]">Search jobs by keyword:</p>
                <input
                  type="text"
                  className="border-b border-[#333] p-[4px] text-[12px]"
                  placeholder="Search"
                />
              </div>
            </div>

            <div className="mt-[48px]">
              {jobOpenings.map((job: IJobData, i) => (
                <div
                  key={i}
                  className="mb-[32px]"
                >
                 <div className="flex items-center justify-between border-b py-[16px]">
                    <p className="lg:text-[24px] md:text-[20px] text-[16px] font-[600]">{job.category}</p>
                    <div className="flex items-center">
                      {!showOpenings[i] && (
                        <p className="md:text-[20px] text-[16px] mr-[16px] font-[500]">{job.openings} Opening{job.openings > 1 && 's'}</p>
                      )}
                      <div className="cursor-pointer" onClick={() => toggleShowOpenings(i)}>
                      {showOpenings[i] ? <BiChevronDownCircle/> : <BiChevronUpCircle/>}
                      </div>
                    </div>
                  </div>

                  {showOpenings[i] && (
                      job.roles.map((role: IJobRole, i: any) => (
                      <div key={i} className="flex items-center justify-between py-[16px">
                        <p className="mt-[10px] text-[#353B3C]">{role.title}</p>
                        <div className="mt-[10px] flex">
                        <p className="mr-[16px] text-[#353B3C]">{role.type}</p>
                        <BiChevronRightCircle className="cursor-pointer" />
                        </div>
                      </div>
                      ))
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default careers;
