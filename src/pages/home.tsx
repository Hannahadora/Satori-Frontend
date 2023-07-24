import Footer from "../components/Footer";
import WhoWeAre from "../components/Home/WhoWeAre";
import reasons from "../../public/json/reasonToChoose";
import Hero from "../components/Home/Hero";
import Header from "../components/Header";
// import JoinWaitListBtn from "../components/JoinWaitListBtn";
import JoinWaitList from "../components/Home/JoinWaitList";

const home = () => {
  
  return (
    <>
      <Header />
      <Hero />
      <main className="w-full">
        <section className="app-container py-[60px]">
          <h3 className="lg:mb-[40px] mb-[30px] lg:text-[40px] text-[30px] text-center">
            Why Choose Satori
          </h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[24px] gap-y-[32px]">
            {reasons.map((el, i) => (
              <div
                key={i}
                className="px-[20px] py-[28px] rounded-[16px] bg-[#F1FBFD]"
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="w-[60px] h-[60px]">
                    <img
                      src={el.icon}
                      alt={`${el.title}-icon`}
                      className="mb-[10px]"
                    />
                  </div>
                  <p className="sub-title_01">{el.title}</p>
                  <p>{el.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
       <JoinWaitList />
      </main>
      <WhoWeAre />
      <Footer />
    </>
  );
};

export default home;
