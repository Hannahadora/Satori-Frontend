import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/blog.css';

interface LatestArticlesProps {
  post: {
    id: number;
    latest: string;
    title: string;
    heading: string;
    intro: string;
  };
}

const LatestArticles: React.FC<LatestArticlesProps> = ({ post }) => {
  return (
    <>
      <div className="pt-16">
        <Link to={"/FullLatestContents/1"}>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div className="w-569 h-266">
              <img src={post.latest} alt="" className="object-cover" />
            </div>
            <div className="w-[100%] h-266 flex flex-col justify-center">
              <p className="yellow-07 text-[20px] text-left custom-hover">{post.title}</p>
              <h2 className="text-[32px] font-semibold mb-2 text-justify pt-4 custom-hover">
                {post.heading}
              </h2>
              <p className="text-justify gray-14 custom-hover">{post.intro}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default LatestArticles;
