import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroImg from '../assets/images/dummy/blogHero.png';
import BecomeBlogger from '../components/blog/BecomeBlogger';
import AllPostsData from '../components/blog/AllPostsData';
import AllPosts from '../components/blog/AllPosts';
import '../style/blog.css'

const Blog = () => {
  const navigate = useNavigate();
  const [selectedSpan, setSelectedSpan] = useState(1); 

  const handleSpanClick = (spanId : number) => {
    setSelectedSpan(spanId);
  };

  const getStarted = () => {
    navigate('/join-waitlist');
  };

  return (
    <div className="lg:w-[70%] md-[60%] w-full mx-auto mt-36 text-center text-[22px]">
      <div className="app-container text-center text-gray-500">
        

        <h1 className="lg:text-[56px] md:text-[52px] text-[50px] lg:leading-[70px] font-bold">
          Stories and Articles
        </h1>
        <p className="pt-8">
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates.
        </p>
        <div className="flex justify-center items-center pt-8">
          <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              className="flex p-[12px 14px 12px 16px] items-center gap-2 self-stretch border rounded-md border-gray-300 bg-white shadow-xs w-80"
              type="email"
              placeholder="Enter your email"
            />
            <button
              className="flex items-center justify-center w-40 h-10 p-2 bg-accent-color-main text-white rounded-full shadow-xs hover:transition-colors duration-300"
              type="submit"
              onClick={getStarted}
            >
              Subscribe
            </button>
          </form>
        </div>
        <p className="pt-2 pe-14">We care about your data in our privacy policy</p>

        <div className="pt-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div className="w-569 h-266">
              <img src={HeroImg} alt="" className="object-cover" />
            </div>
            <div className="w-[100%] h-266 flex flex-col justify-center">
              <p className="yellow-07 text-[20px] text-left">
                Latest Article
              </p>
              <h2 className="text-[32px] font-semibold mb-2 text-justify pt-4">
                What is Mental health and why is it important?
              </h2>
              <p className="text-justify --gray-14">
                Mental health is a state of mental well-being that enables
                people to cope with the stresses of life, realize their
                abilities, learn well and work well, and contribute to their
                community.
              </p>
            </div>
          </div>
        </div>
        <AllPosts posts={AllPostsData} selectedId={selectedSpan} onSpanClick={handleSpanClick} />
        <div className='p-20 '>
          <BecomeBlogger  />
        </div>

        <div className="flex pb-20 flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between border-t border-gray-300 pt-4">
          <div>
            <span>prev</span>
          </div>
          <div className="flex space-x-6 items-center --gray-14 cursor-pointer">
            <span className={selectedSpan === 1 ? 'active-span' : ''} onClick={() => handleSpanClick(1)}>1</span>
            <span className={selectedSpan === 2 ? 'active-span' : ''} onClick={() => handleSpanClick(2)}>2</span>
            <span className={selectedSpan === 3 ? 'active-span' : ''} onClick={() => handleSpanClick(3)}>3</span>
            <span className={selectedSpan === 4 ? 'active-span' : ''} onClick={() => handleSpanClick(4)}>4</span>
            <span className={selectedSpan === 5 ? 'active-span' : ''} onClick={() => handleSpanClick(5)}>5</span>
            <span className={selectedSpan === 6 ? 'active-span' : ''} onClick={() => handleSpanClick(6)}>6</span>
            <span className={selectedSpan === 7 ? 'active-span' : ''} onClick={() => handleSpanClick(7)}>7</span>
            <span className={selectedSpan === 8 ? 'active-span' : ''} onClick={() => handleSpanClick(8)}>8</span>
            <span className={selectedSpan === 9 ? 'active-span' : ''} onClick={() => handleSpanClick(9)}>9</span>
            <span className={selectedSpan === 10 ? 'active-span' : ''} onClick={() => handleSpanClick(10)}>10</span>
        </div>
          <div>
            <span>next</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;