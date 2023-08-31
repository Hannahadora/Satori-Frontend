import { useState } from 'react';
import LatestPostData from './LatestPostData';

type LatestPostItem = {
  id: number;
  img: string;
  heading: string;
  content: string;
};

const LatestPostDisplay = () => {
  const [posts, setPosts] = useState<LatestPostItem[]>([LatestPostData[0]]);

  const handleLatestArticlesClick = () => {
    const shuffledPosts = [LatestPostData[0], ...LatestPostData.slice(1).sort(() => Math.random() - 0.5)];
    setPosts(shuffledPosts);
  };

  return (
    <div className="p-8">
    <div className=''>
        <div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md mb-4" onClick={handleLatestArticlesClick}>Latest Articles</button>
          <h2 className='text-lg font-semibold'>What is Mental health and why is it important?</h2>
          <p>Mental health is a state of mental well-being that enables people to cope with the stresses of life, realize their abilities, learn well and work well, and contribute to their community</p>
        </div>
        </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-md shadow-md">
            <img src={post.img} alt={post.heading} className="mb-2" />
            <h2 className="text-lg font-semibold mb-2">{post.heading}</h2>
            <p className="text-gray-700">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPostDisplay;
