import About1 from '../../assets/images/faq/About1.png';
import About2 from '../../assets/images/faq/About2.png';
import About3 from '../../assets/images/faq/About3.png';
import mission from '../../assets/images/faq/Mission.png';
import vision from '../../assets/images/faq/Vision.png';
import value from '../../assets/images/faq/Values.png';

function Mission() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 py-20 px-20 lg:text-xl md:text-lg sm:text-base bg-accent-color-02'>
      
        <div className=''>
            <img src={About1} alt="picture" />
        </div>


        <div className='w-[100%] py-20'>
          <img src={mission} alt="image" className='pb-4 sm-[5%] md-[50%]' />
          <p className='lg:text-xl md:text-lg sm:text-base'>Our mission is to empower individuals across Nigeria to prioritize their mental health and embrace a life of emotional wellbeing. We strive to create a compassionate and inclusive platform that offers accessible, evidence-based mental health support, fostering a sense of connection, understanding, and resilience. Through innovative technology and a supportive community, we aim to inspire individuals to cultivate mindfulness, find inner balance, and lead happier, healthier lives.</p>
        </div>

        <div className='w-[100%] py-20'>
          <img src={vision} alt="image"className='pb-4 sm-[5%] md-[50%]' />
          <p>At Satori, we envision a Nigeria where mental health is openly discussed, understood, and prioritized. We aim to be a global leader in promoting mental wellness and self-discovery through technology. By leveraging cutting-edge technology and human-centric design, we aim to revolutionize the mental health landscape, empowering individuals to unlock their full potential and lead lives filled with purpose, joy, and personal growth.</p>
        </div>
        <div className='w-[100%]  py-20'>
            <img src={About2} alt="picture" />
        </div>

        <div className='w-[100%]'>
            <img src={About3} alt="picture" />
        </div>
        <div className='w-[100%] py-20'>
          <img src={value} alt=""  className='pb-4 sm-[5%] md-[50%]'/>
          <p>We are driven by empathy, compassion and fostering a safe and inclusive space for individuals to grow on their emotional journeys. We value evidence-based practices, ensuring the effectiveness and relevance of our mental health support. User-centric design and continuous growth guide our approach, as we prioritize privacy, transparency, and authentic connections within our community. These core values inspire us daily, empowering individuals worldwide to find inner balance, personal growth, and lasting well-being.</p>
        </div>
      </div>
   
  );
}

export default Mission;
