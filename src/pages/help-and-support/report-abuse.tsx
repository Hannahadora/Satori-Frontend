import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

const ReportAbuse = () => {
  return (
    <main className="lg:my-[130px] md:my-[100px] my-[80px]">
      <div className="app-container">
        <Link to={"/help-and-support"}>
          <div className="flex items-center lg:mb-[94px] md:mb-[40px] mb-[20px] cursor-pointer">
            <BiChevronLeft className="mr-[8px]" />
            <p className="hover:font-[600] text-[16px]">Back</p>
          </div>
        </Link>

        <h3 className="font-ubuntu lg:text-[48px] md:text-[40px] text-[32px] lg:leading-[60px] font-[700] text-[#010809] text-center">
          Report Abuse
        </h3>

        <p className="md:leading-[36px] leading-[28px] md:mt-[40px] mt-[20px] text-[555E5F] md:text-[24px] text-[18px]">
          At Satori Mental Health, we are committed to maintaining a safe and
          nurturing environment for all users of our app. If you come across any
          content, interactions, or behavior that you believe may be abusive or
          inappropriate, we encourage you to follow these steps to report such
          instances promptly:
        </p>

        <ul className="my-[40px] md:leading-[36px] leading-[28px] text-[555E5F] md:text-[24px] text-[18px] list-disc list-inside">
          <li className="md:mb-[40px] mb-[20px]">
            <b>Identify the Concern:</b> If you encounter content, comments,
            messages, or interactions that you find abusive, offensive, or
            inappropriate, take a moment to assess the situation and determine
            if it warrants reporting.
          </li>
          <li className="md:mb-[40px] mb-[20px]">
            <b>Document the Incident:</b> It's helpful to gather evidence of the
            abusive behavior. Take screenshots, note the usernames involved, and
            capture any relevant details that can assist in understanding the
            context.
          </li>
          <li className="md:mb-[40px] mb-[20px]">
            <b>Locate the Reporting Mechanism:</b>
            In the Satori Mental Health app, access the reporting mechanism.
            This is typically found within the interface, often under a "Report
            Abuse" .
          </li>
          <li className="md:mb-[40px] mb-[20px]">
            <b>Choose the Appropriate Category:</b>
            Different platforms offer various reporting categories. Choose the
            category that best fits the type of abuse you're reporting, such as
            harassment, hate speech, or inappropriate content.
          </li>
          <li className="md:mb-[40px] mb-[20px]">
            <b>Provide Detailed Information:</b> Explain the situation as
            clearly and concisely as possible. Provide the context, usernames,
            dates, and any evidence you've collected. This information helps us
            understand the issue comprehensively.
          </li>

          <li className="md:mb-[40px] mb-[20px]">
            <b>Submit the Report:</b> Once you've filled in the necessary
            details, submit the report. This will trigger the review process,
            during which our team will assess the situation and take appropriate
            actions.
          </li>
          <li className="md:mb-[40px] mb-[20px]">
            <b>Trust the Process:</b> Rest assured that the report will be
            treated with utmost seriousness and confidentiality. Our team will
            investigate the matter thoroughly and take the necessary steps to
            address the abuse.
          </li>
          <li className="md:mb-[40px] mb-[20px]">
            <b>Follow Up:</b> If you believe it's necessary, follow up with our
            support team to inquire about the status of the report or any
            actions taken.
          </li>
          <li className="md:mb-[40px] mb-[20px]">
            <b>Be Vigilant:</b> While we strive to create a secure environment,
            staying vigilant and responsible online is crucial. Continue to
            report any instances of abuse to ensure a supportive community for
            all.
          </li>
        </ul>

        <p className="mb-[60px] text-[#555E5F] md:text-[24px] text-[18px] leading-[36px]">
          Your reports play a pivotal role in upholding the values of respect,
          empathy, and safety within the Satori Mental Health app. By promptly
          reporting abusive content, you contribute to the well-being of
          yourself and fellow users, fostering an atmosphere of healing and
          growth that defines our community. Thank you for being an active part
          of this shared endeavor.
        </p>
      </div>
    </main>
  );
};

export default ReportAbuse;
