import Heroimg1 from '../assets/images/faq/Heroimg1.png'
import Heroimg2 from '../assets/images/faq/Heroimg2.png'
import Team from '../components/AboutUs/Team'
import Mission from '../components/AboutUs/Mission';

function AboutUs() {
    return (
        <>
        <div className='className="lg:w-[70%] md-[60%] w-full mx-auto mt-36'>
            <div className='app-container text-center'>
                <h1 className='font-bold text-6xl '>About Us</h1>
                <p className='custom-gray-11 py-4 xl:text-2xl md:text-base sm:text-sm font-normal'>At Satori, we are dedicated to empowering lives, fostering well-being, and making a positive impact through exceptional healthcare and personalized services</p>
            </div>
            <div className="app-container text-center grid grid-cols-1 md:grid-cols-2 lg:gap-10 ">
                <div className="">
                     <img src={Heroimg1} alt="heroimg" className="heroImg-width2 rounded-[40px]" />
                </div>
                <div className="">
                    <img src={Heroimg2} alt="heroimg" className="heroImg-width1" />
                </div>
            </div>
        

<div className='flex flex-col lg:gap-11 lg:px-20 px-5  pt-4 lg:flex-row'>
    <div className='w-full lg:w-[282px]'>
      <h1 className='text-2xl lg:text-3xl'>Who <span className='accent-color-main'>we are</span></h1>
    </div>
    <div className='w-full lg:w-[792px] pt-5'>
      <p className='lg:text-xl md:text-lg text-base text-centertext-justify'>
        Founded by a team of passionate mental health professionals and tech enthusiasts, Satori aims to bridge the gap between mental health care and technology. Our user-friendly platform offers a diverse range of tools and resources designed to empower users in their journey towards emotional balance and resilience.
      <p className='lg:text-xl md:text-lg text-base text-center text-justify pt-5'>At Satori, we believe that everyone deserves access to effective mental health support. Through personalized features such as mood tracking, guided meditation, and peer support, users can find solace, strengthen coping strategies, and cultivate mindfulness.</p>
      </p>
    </div>
</div>






            </div>
            <Mission />
            <Team />
            </>
    )      

}  
export default AboutUs
