import React from 'react';

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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="w-569 h-266">
            <img src={post.latest} alt="" className="object-cover" />
          </div>
          <div className="w-[100%] h-266 flex flex-col justify-center">
            <p className="yellow-07 text-[20px] text-left">{post.title}</p>
            <h2 className="text-[32px] font-semibold mb-2 text-justify pt-4">
              {post.heading}
            </h2>
            <p className="text-justify gray-14">{post.intro}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestArticles;
