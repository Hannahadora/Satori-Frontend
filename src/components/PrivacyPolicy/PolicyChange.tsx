import "../../style/privacy-policy.css";

const PolicyChange = () => {
  return (
    <section id="policy-change" className="mt-[80px]">
      <div className="blue_bordered-card text-center py-[40px]">
        <h4 className="lg:text-[56px] md:text-[45px] text-[35px] font-[600] text-[#353B3C] mb-[40px] md:leading-[70px]">
          Will this policy change?
        </h4>
        <p className="md:text-[24px] text-[18px] font-[500]">
          If it does, we’ll let you know.
        </p>
      </div>

      <div className="mt-[40px]">
        <div className="">
          <article>
            <p className="md:text-[36px] text-[24px] font-[600] mb-[40px] pl-[20px]">
            5. Changes To This Privacy Policy
            </p>
            <p className="md:text-[22px] text-[20px] mb-[16px] text-[#353B3C]">
              We may update this Privacy Policy from time to time to reflect
              changes to our practices. The latest version will be posted on our
              Website, and the effective date will be stated at the beginning of
              the policy.
              <br />
              <br />
              If we do revise this Privacy Policy and make changes that are
              determined by us to be material, we will provide you notice and an
              opportunity to review the revised Privacy Policy before you
              continue to use Satori.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PolicyChange;
