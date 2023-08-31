import { useState } from 'react';
import LatestPostData from './LatestPostData';

type LatestPostItem = {
  id: number;
  img: string;
  heading: string;
  content: string;
};

const LatestPostDisplay = () => {
  const [posts, setPosts] = useState<LatestPostItem[]>(LatestPostData);

  const handleAllPostsClick = () => {
  };

  return (
    <div className="p-8">

      <h2
        className="text-[36px] font-bold pb-8 mb-2 cursor-pointer text-left"
        onClick={handleAllPostsClick}
      >
        All Posts
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-md shadow-md">
            <img src={post.img} alt={post.heading} className="mb-2" />
            <h2 className="text-lg font-semibold mb-2 text-justify">{post.heading}</h2>
            <p className="text-gray-700 text-justify">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPostDisplay;
