import React from 'react';
import { useParams, Link } from 'react-router-dom';
import LatestsArticlesData from './LatestArticlesData'
import FullAllpostData from './FullAllPostData'
import AllPosts from './AllPosts';
import '../../style/blog.css';
import { BiChevronLeft } from "react-icons/bi";


const FullAllPosts: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();

  const article = LatestsArticlesData.find((item) => item.id === Number(articleId));

  if (!article) {
    return <div className='pt-32'>Article not found</div>;
  }

  const shuffleArray = (array: string[]): string[] => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const allLinks = FullAllpostData.flatMap(item => item.links);
  const shuffledLinks = shuffleArray(allLinks);
  const randomLinks = shuffledLinks.slice(0, 3); 


  const selectedIdArray = [1, 2, 4];


  return (
    <>
      <div className='pt-40 app-container'>
      <Link to={"/blog"}>
           <div className="flex items-center lg:mb-[94px] md:mb-[40px] mb-[20px] cursor-pointer">
               <BiChevronLeft className="mr-[8px]" />
               <p className="hover:font-[600] text-[16px]">Back</p>
          </div>
      </Link>
      <div className='lg:text-[48px] md:text-[46px] text-[28px] font-bold'><h2>{article.heading}</h2></div>
          <h2 className='text-[28px] font-normal gray-14 pt-8'>{article.intro}</h2>
          <img className='pt-8 text-center' src={article.latest} alt='Latest' />
          <h2 className='lg:text-[48px] md:text-[46px] text-[28px] font-bold text-center py-12'>{article.subtitle}</h2>
          <p className='pt-4 text-[28px] gray-12 leading-8'>{article.firstContent}</p>
          <div className='lg:row flex flex-col lg:flex-row pt-8'>
        <div className='lg:w-[100%] w-[100%]'>
          <img src={article.smallimg} alt='Small' className='max-w-full h-auto' />
        </div>
    <div className='lg:w-[100%] w-100%  text-[28px] lg:pt-0 pt-8'>
        <p className='leading-8'>{article.secondContent}</p>
        <p className='leading-8'>{article.thirdContent}</p>
    </div>
  </div>



      <div>
          <div className='w-100% leading-8 lg:pt-32  text-[28px]'><p>{article.fourthContent}</p></div>
          <img className='pt-4' src={article.fullimg} alt='Full' />
          <h2 className='text-[48px] font-bold text-center pt-12'>{article.secondSubtitle}</h2>
          <p className='leading-8 text-[28px] pt-8'>{article.lastContent}</p>
          <img className='pt-4' src={article.lastimg} alt='Last' />
          <p className='leading-8 text-[28px] pt-8'>{article.lastcontent}</p>
      </div>

      <div className="random-links flex gap-8 pt-20">
        {randomLinks.map((link: string, index: number) => (
          <div key={index}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`link-${index + 1}`}
            >
              {link}
            </a>
          </div>
        ))}
      </div>

        <div className='w-100%'><p className='leading-8 text-[28px] pt-12'>{article.summary}</p></div>
        <div className='text-right'>
          <button className=" my-8 w-44 h-12 px-4 justify-center items-center rounded-full pry-btn text-white">
            {article.installbtn}
          </button>
        </div>
        <div>
          <div className='flex justify-between'>
            <div className='flex gap-6'>
              <p className='text-[28px]'>{article.paragraph}</p>
              <button 
                className="flex text-center py-2 px-6 font-Urbanist text-16 font-normal font-weight-400 leading-16 text-accent-color-main share-btn">
                <span 
                className="mr-2"><img src={article.icon} alt="share_icon" />
                </span>{article.sharebutton}
                </button>
            </div>

            <div className='flex gap-2 align-center'>
              <p className='text-[28px]'>{article.socialParagraph}</p>
              <div className='flex gap-4'>
              <Link
                  className=""
                  to="https://www.twitter.com/"
                  target="_blank">
                  <img src={article.twitter} alt="twitter_icon" className='h-[26px] w-[23px]' />
              </Link> 
                
              
              <Link className="" to="https://www.instagram.com">
                  <img src={article.instagram} alt="instagram_icon" className='h-[30px] w-[23px]' />
              </Link>

              <Link
              className=""
              to="https://www.linkedIn.com/"
              target="_blank">
                  <img src={article.linkedin} alt="linkedin_icon" className='h-[30px] w-[23px]' /> 
              </Link>

              <Link
              className=""
              to="https://www.facebook.com/"
              target="_blank">
                  <img src={article.facebook} alt="facebook_icon" className='h-[30px] w-[23px]' />
              </Link>

                  <img src={article.whatsapp} alt="instagram_icon" className='h-[30px] w-[23px]' /> 
              </div>
            </div>
          </div>
        </div>

        <div className='mb-40'>
          <h2 className='text-[32px] text-black text-4xl pt-10'>Related Articles</h2>
          <AllPosts posts={FullAllpostData} selectedId={selectedIdArray} limit={3} />
        </div>
      </div>
    </>
  );
};

export default FullAllPosts;
