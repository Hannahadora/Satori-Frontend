import About1 from '../../assets/images/faq/About1.png';
import About2 from '../../assets/images/faq/About2.png';
import About3 from '../../assets/images/faq/About3.png';
import mission from '../../assets/images/faq/Mission.png';
import vision from '../../assets/images/faq/Vision.png';
import value from '../../assets/images/faq/Values.png';
import Underlay1 from '../../assets/images/faq/leftunderlay.png';
// import Underlay2 from '../../assets/images/faq/rightunderlay.png';

  function Mission() {
    return (
      <div className='relative flex flex-col gap-8 py-20 mt-20 lg:px-20 px-5 lg:text-xl md:text-lg sm:text-base bg-accent-color-02'>
         <div className="absolute inset-0 bg-underlay bg-cover bg-center z-0">
          <img src={Underlay1} alt="" className="lg:w-20 md:w-15 w-10" />
          </div>

        <div className='flex flex-col md:flex-row gap-8'>
          <div className='w-[100%]  '>
            <img src={About1} alt="picture" />
          </div>
          <div className='w-full py-20'>
            <img src={mission} alt="image" className='pb-4 sm-[5%] md-[50%]' />
            <p className='lg:text-xl md:text-lg sm:text-base accent-color-11 text-justify'>Our mission is to empower individuals across Nigeria to prioritize their mental health and embrace a life of emotional wellbeing. We strive to create a compassionate and inclusive platform that offers accessible, evidence-based mental health support, fostering a sense of connection, understanding, and resilience. Through innovative technology and a supportive community, we aim to inspire individuals to cultivate mindfulness, find inner balance, and lead happier, healthier lives.</p>
          </div>
        </div>
  
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='w-full py-20 order-last md:order-first'>
            <img src={vision} alt="image" className='pb-4 sm-[5%] md-[50%]' />
            <p className='accent-color-11 text-justify'>At Satori, we envision a Nigeria where mental health is openly discussed, understood, and prioritized. We aim to be a global leader in promoting mental wellness and self-discovery through technology. By leveraging cutting-edge technology and human-centric design, we aim to revolutionize the mental health landscape, empowering individuals to unlock their full potential and lead lives filled with purpose, joy, and personal growth.</p>
          </div>
          <div className='w-[100%]   py-20 order-first md:order-last'>
            <img src={About2} alt="picture" />
          </div>
        </div>
  
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='w-[100%]'>
            <img src={About3} alt="picture" />
          </div>

          {/* <div className="absolute bottom-0 right-0 bg-underlay bg-cover bg-center z-0">
          <img src={Underlay2} alt="" className="lg:w-40 md:w-30 w-20 " />
          </div> */}
          <div className='w-full py-20'>
            <img src={value} alt="" className='pb-4 sm-[5%] md-[50%]' />
            <p className='accent-color-11 text-justify'>We are driven by empathy, compassion and fostering a safe and inclusive space for individuals to grow on their emotional journeys. We value evidence-based practices, ensuring the effectiveness and relevance of our mental health support. User-centric design and continuous growth guide our approach, as we prioritize privacy, transparency, and authentic connections within our community. These core values inspire us daily, empowering individuals worldwide to find inner balance, personal growth, and lasting well-being.</p>
          </div>
        </div>
      </div>
    );
  }
  

export default Mission;
