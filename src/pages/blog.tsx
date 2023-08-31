import  {useState} from 'react';
import { useNavigate } from "react-router-dom";
import LatestPostData from '../components/blog/LatestPostData';
import AllPostsDisplay from '../components/blog/AllPostsDisplay';
// import LatestPostDisplay from '../components/blog/LatestPostDisplay';
import HeroImg from '../assets/images/dummy/blogHero.png'
import BecomeBlogger from '../components/blog/BecomeBlogger';

type LatestPostItem = {
  id: number;
  img: string;
  heading: string;
  content: string;
};

const Blog = () => {
  const [randomPostId, setRandomPostId] = useState<number | null>(null);
  const getRandomPost = () => {
    const randomIndex = Math.floor(Math.random() * LatestPostData.length);
    const randomPostId = LatestPostData[randomIndex].id;
    setRandomPostId(randomPostId);
  };

  const selectedPost = LatestPostData.find(post => post.id === randomPostId);

    const navigate = useNavigate();
  
    const getStarted = () => {
      navigate("/join-waitlist");
    };
  return (
    <div className="lg:w-[70%] md-[60%] w-full mx-auto mt-36 --gray-9 text-center text-[22px] ">
      <div className="app-container text-center text-gray-500">
        <h1 className='lg:text-[56px] md:text-[52px] text-[50px] lg:leading-p[70px] font-[700]'>Stories and Articles</h1>
        <p className='pt-8'>Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
        <div className="flex justify-center items-center pt-8"> 
          <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ">
          <input className="flex p-[12px 14px 12px 16px] items-center gap-2 self-stretch border rounded-md border-gray-300 bg-white shadow-xs w-80" type="email" placeholder="Enter your email"/>
          <button className="flex items-center justify-center w-40 h-10 p-2 bg-accent-color-main text-white rounded-full shadow-xs hover:transition-colors duration-300" type="submit" onClick={getStarted}>Suscribe</button>
        </form>
        </div>
        <p className='pt-2 '>We care about your data in our privacy policy</p>
    
        
        <div className='pt-16'>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-2'>
  <div className="w-569 h-266">
    <img src={HeroImg} alt="" className="object-cover" />
  </div>
  <div className="w-[100%] h-266 flex flex-col justify-center">
  <button onClick={getRandomPost} className='--c-yellow-07 text-[20px] text-left'>Latest Article</button>      
    <h2 className="text-[32px] font-semibold mb-2 text-justify">
      What is Mental health and why is it important?
    </h2>
    <p className='text-justify'>
      Mental health is a state of mental well-being that enables people to
      cope with the stresses of life, realize their abilities, learn well
      and work well, and contribute to their community
    </p>
  </div>
</div>


        
        {selectedPost && (
          <div className="post-item flex flex-col md:flex-row">
            <div className="post-img md:mr-4 mb-4 md:mb-0">
              <img src={selectedPost.img} alt={selectedPost.title} />
            </div>
            <div className="post-content">
              <h2 className='text-[32px] font-bold'>{selectedPost.heading}</h2>
              <p className='text-justify'>{selectedPost.content}</p>
            </div>
          </div>
        )}

        <AllPostsDisplay />
        <BecomeBlogger />

        <div className="flex pb-20 flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between border-t border-gray-300 pt-4">
      <div><span>prev</span></div>
      <div className="flex space-x-6 items-center --gray-14">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>9</span>
      </div>
      <div><span>next</span></div>
    </div>
      </div>
    </div>
    </div>
  );
};

export default Blog;
