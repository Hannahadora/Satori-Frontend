import { useEffect, useState } from "react";
import {
  IJobData,
  IJobRole,
  jobOpenings,
} from "../../../public/json/jobOpenings";
import { useParams } from "react-router-dom";

const jobDetails = () => {
  const [job, setJob] = useState<IJobRole | undefined>();
  const { jobId, jobCategory } = useParams();

  const fetchJob = () => {
    const jobCategoryX = jobOpenings.find(
      (category: IJobData) =>
        category.category.toLowerCase() === jobCategory?.toLowerCase()
    );
    const jobX = jobCategoryX?.roles.find((job: IJobRole) => job.id === jobId);
    setJob(jobX);
  };

  useEffect(() => {
    fetchJob();
  }, [jobId, jobCategory]);

  if (!job) {
    return <div>No job found for the specified ID and category.</div>;
  }

  return (
    <div className="mt-[160px] mb-[100px]">
      <div className="app-container">
        <h3 className="text-center text-[#010809] md:text-[56px] text-[30px] mb-[16px] font-[700]">
          {job.title}
        </h3>
        <p className="text-center text-[#010809] lg:text-[22px] md:text-[20px] text-[18px] font-[500] laeding-[28px]">
          {job.type} | <span className="text-[#0E606E]">Flexible</span>
        </p>

        <div className="md:mt-[160px] mt-[100px] bg-[#F1FBFD] lg:px-[102px] md:px-[50px] px-[20px] py-[40px] rounded-[40px]">
          <article>
            <div className="flex md:flex-row flex-col items-center md:justify-between justify-center leading-[26px]">
              <p className="md:text-[30px] text-[28px] text-[#010809] font-[600] md:mt-[0] mt-[16px]">
                About the role
              </p>
              <p className="md:text-[20px] text-[18px] font-[600]">
                Posted: <span className="font-[400]">{job.posted}</span>
              </p>
            </div>
            <p className="mt-[16px] font-[500] text-[18px] text-[#758183]">
              {job.about}
            </p>
          </article>
          <article className="md:mt-[48px] mt-[24px]">
            <p className="md:text-[28px] text-[24px] text-[#010809] font-[600]">
              Responsiblities
            </p>
            <ul className="mt-[16px] text-[18px] text-[#758183] list-disc list-inside">
              {job.responsibilities.map((responsibilty: string, i: any) => (
                <li
                  className="font-[400] md:text-[18px] text-[16px] text-[#758183]"
                  key={i}
                >
                  {responsibilty}
                </li>
              ))}
            </ul>
          </article>
          <article className="md:mt-[48px] mt-[24px]">
            <p className="md:text-[28px] text-[20]4px] text-[#010809] font-[600]">
              If the feeling is mutual, we offer:
            </p>
            <ul className="mt-[16px] text-[18px] text-[#758183] list-disc list-inside">
              {job.offers.map((offer: string, i: any) => (
                <li
                  className="font-[400] md:text-[18px] text-[16px] text-[#758183]"
                  key={i}
                >
                  {offer}
                </li>
              ))}
            </ul>
          </article>

          <article className="md:mt-[48px] mt-[24px]">
            <p className="font-[500] md:text-[18px] text-[16px] text-[#758183]">
              {job.note}
            </p>
          </article>

          <div className="md:w-[30%] md:mt-[54px] mt-[32px]">
            {" "}
            <a href={job.applicationLink} target="_blank">
              <button className="btn pry-btn px-[16px] py-[8px]">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default jobDetails;
