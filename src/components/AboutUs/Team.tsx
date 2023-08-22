import Ceo from '../../assets/images/faq/Ceo.png'
import Cto from '../../assets/images/faq/Cto.png'
import Devlead from "../../assets/images/faq/Devlead.png";
import Designer from '../../assets/images/faq/Designer.png'
import Illustrator from '../../assets/images/faq/Illustrator.png'
import Digital from '../../assets/images/faq/Digital.png'
import Health from '../../assets/images/faq/Health.png'
import Fullstack1 from '../../assets/images/faq/Fullstack1.png'
import Analyst from '../../assets/images/faq/Analyst.png'
import Dev from '../../assets/images/faq/Dev.png'
import Media from '../../assets/images/faq/Media.png'
import Fullstack2 from '../../assets/images/faq/Fullstack2.png'
import Team from '../../assets/images/faq/Team.png'



function TeamSection() {
    return(
        <>
        <div className=''>
        <div className='app-container'>
        <div className="flex flex-col items-center lg:p-20 pt-5 ">
                <img src={Team} alt="our-team" className="mb-4 sm-[5%] md-[50%]" />
                <h5 className="text-center lg:text-2xl md:text-1xl sm:text-lg pt-5">Meet our dynamic team of passionate experts, dedicated to creating innovative solutions and fostering positive change in the world</h5></div>

            
            <div className=' grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-6 pb-20'>
                <div className='team-profile'>
                    <img src={Ceo} alt="ceo" />
                    <h3 className='xl:text-3xl md:text-2xl sm:text-lg text-accent-color-main p-2'>Sandra Alabi</h3>
                    <p className='ps-2 xl:text-2xl md:text-1xl sm:text-lg'>Co Founder & CEO</p>
                    <p className='p-2 xl:text-lg md:text-base sm:text-sm'>A passionate visionary leading with innovation and integrity, driving company success through purposeful leadership.</p>
                </div>

                
                <div className='team-profile'>
                    <img src={Cto} alt="cto" />
                    <h3 className='xl:text-3xl md:text-2xl sm:text-lg text-accent-color-main p-2'>Janefrances Ayogu</h3>
                    <p className='ps-2 xl:text-2xl md:text-1xl sm:text-lg'>Co Founder & CTO</p>
                    <p className='p-2 xl:text-lg md:text-base sm:text-sm'>Technology wizard orchestrating innovation and technical excellence to fuel our company's future</p>
                </div>

                
                <div className='team-profile'>
                    <img src={Devlead} alt="leadDev" />
                    <h3 className='xl:text-3xl md:text-2xl sm:text-lg text-accent-color-main p-2'>Hannah Ejimofor</h3>
                    <p className='ps-2 xl:text-2xl md:text-1xl sm:text-lg'>Frontend Lead</p>
                    <p className='p-2 xl:text-lg md:text-base sm:text-sm'>A passionate visionary leading with innovation and integrity, driving company success through purposeful leadership.</p>
                </div> 

                
                <div className='team-profile'>
                    <img src={Dev} alt="dev" />
                    <h3 className='xl:text-3xl md:text-2xl sm:text-lg text-accent-color-main p-2'>Gabriel Nancy</h3>
                    <p className='ps-2 xl:text-2xl md:text-1xl sm:text-lg'>Frontend Developer</p>
                    <p className='p-2 xl:text-lg md:text-base sm:text-sm'>Front-end magician crafting pixel-perfect interfaces into captivating and seamless user interfaces.</p>
                </div>

                
                <div className='team-profile'>
                    <img src={Designer} alt="designer" />
                    <h3 className='xl:text-3xl md:text-2xl sm:text-lg text-accent-color-main p-2'>Eric Obulo</h3>
                    <p className='ps-2 xl:text-2xl md:text-1xl sm:text-lg'>Product Designer</p>
                    <p className='p-2 xl:text-lg md:text-base sm:text-sm'>Product design maven shaping visionary experiences that redefine user satisfaction.</p>
                </div>

                
                <div className='team-profile'>
                    <img src={Illustrator} alt="illustrator" />
                    <h3 className='xl:text-3xl md:text-2xl sm:text-lg text-accent-color-main p-2'>Adekale Olorunjuwonlo</h3>
                    <p className='ps-2 xl:text-2xl md:text-1xl sm:text-lg'>Illustrator</p>
                    <p className='p-2 xl:text-lg md:text-base sm:text-sm'>Artistic illustration maestro breathing life into art with exceptional creativity and storytelling.</p>
                </div>


                
                <div className='team-profile'>
                    <img src={Media} alt="media" />
                    <h3 className='xl:text-3xl md:text-2xl sm:text-lg text-accent-color-main p-2'>Jane Ifunanyachukwu</h3>
                    <p className='ps-2 xl:text-2xl md:text-2xl sm:text-lg'>Digital Assets Manager</p>
                    <p className='p-2 xl:text-lg md:text-base sm:text-sm'>Social media virtuoso building connections and driving engagement with strategic storytelling</p>
                </div>

                <div className='team-profile'>
                    <img src={Analyst} alt="analyst" />
                    <h3 className='xl:text-3xl md:text-2xl sm:text-lg text-accent-color-main p-2'>Ayomide Alayande</h3>
                    <p className='ps-2 xl:text-2xl md:text-2xl sm:text-lg'>Data Analyst</p>
                    <p className='p-2 xl:text-lg md:text-base sm:text-sm'>Unleashing insights from data to drive informed decisions and uncover hidden patterns as a skilled data analyst</p>
                </div>

                <div className='team-profile'>
                    <img src={Health} alt="writer" />
                    <h3 className='xl:text-3xl md:text-2xl sm:text-lg text-accent-color-main p-2'>Achi Kingsley</h3>
                    <p className='ps-2 xl:text-2xl md:text-2xl sm:text-lg'>Medical Writer</p>
                    <p className='p-2 xl:text-lg md:text-base sm:text-sm'>Medical writer illuminating complex topics with precision and empathy to promote understanding</p>
                </div>

                <div className='team-profile'>
                    <img src={Fullstack1} alt="fullstack" />
                    <h3 className='xl:text-3xl md:text-2xl sm:text-lg text-accent-color-main p-2'>Akinola Akinleye</h3>
                    <p className='ps-2 xl:text-2xl md:text-2xl sm:text-lg'>fullstack Developer</p>
                    <p className='p-2 xl:text-lg md:text-base sm:text-sm'>Creating robust and user-centric applications with expertise in both front-end and back-end technologies</p>
                </div>

               <div className='team-profile'>
                    <img src={Digital} alt="digital" />
                    <h3 className='xl:text-3xl md:text-2xl sm:text-lg text-accent-color-main p-2'>Onu Jane</h3>
                    <p className='ps-2 xl:text-2xl md:text-2xl sm:text-lg'>Digital Marketter</p>
                    <p className='p-2 xl:text-lg md:text-base sm:text-sm'>Driving digital success with strategic campaigns and data-driven insights as a dynamic digital marketer</p>
                </div> 

                <div className='team-profile'>
                    <img src={Fullstack2} alt="fullstack" />
                    <h3 className='xl:text-3xl md:text-2xl sm:text-lg text-accent-color-main p-2'>Emmanuel Onyeyaforo</h3>
                    <p className='ps-2 xl:text-2xl md:text-2xl sm:text-lg'>fullstack Developer</p>
                    <p className='p-2 xl:text-lg md:text-base sm:text-sm'>Building seamless digital solutions from top to bottom as a versatile full-stack developer</p>
                </div>
        </div>
        </div>
        </div>

        </>
    )
    
}
export default TeamSection