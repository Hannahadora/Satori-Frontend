import Heroimg1 from '../assets/images/faq/Heroimg1.png'
import Heroimg2 from '../assets/images/faq/Heroimg2.png'
import WhoImg from '../assets/images/faq/Who we are.png'
import MainLayout from '../layout/MainLayout';
import Team from '../components/AboutUs/Team'
import Mission from '../components/AboutUs/Mission';



function AboutUs() {
    return (
        <>
        <div className='pt-36'>
            <div className='app-container text-center'>
                <h1 className='font-bold text-6xl '>About Us</h1>
                <p className=' text-black py-4 xl:text-2xl md:text-base sm:text-sm'>At Satori, we are dedicated to empowering lives, fostering well-being, and making a positive impact through exceptional healthcare and personalized services</p>
            </div>
            <div className="app-container grid grid-cols-1 md:grid-cols-2 gap-4 xl:pt-12 md:pt-8 sm:pt-4">
                <div className="md:w-900"><img src={Heroimg1} alt="heroimg" className="w-full h-auto" /></div>
                <div className="md:w-400"><img src={Heroimg2} alt="heroimg" className="w-full h-auto" /></div>
            </div>



        <div className='grid md:grid-cols-2 gap-4 xl:[20px] md:[15px] sm:[10px] py-20 px-20'>
        <div className='max-w-[] '>
            <img src={WhoImg} alt="img" className='md-[50%] sm-[5%]' />
        </div>
        <div className='max[]'>
        <p  className='lg:text-xl md:text-lg sm:text-base'>Founded by a team of passionate mental health professionals and tech enthusiasts, Satori aims to bridge the gap between mental health care and technology. Our user-friendly platform offers a diverse range of tools and resources designed to empower users in their journey towards emotional balance and resilience.</p>
        <p className='pt-4 lg:text-xl md:text-lg sm:text-base'>At Satori, we believe that everyone deserves access to effective mental health support. Through personalized features such as mood tracking, guided meditation, and peer support, users can find solace, strengthen coping strategies, and cultivate mindfulness.</p>
        </div>
        </div>
    <Mission />
    <Team />
    < MainLayout />
    </div>
    </>
 ) 

}  
export default AboutUs
