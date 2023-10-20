import React from 'react';

interface AllPostItem {
  id: number;
  img: string;
  title: string;
  heading: string;
  content: string;
  button: string;
  links: string[];
}

interface AllPostsProps {
  posts: AllPostItem[];
  selectedId: number[];
  onSpanClick?: (id: number) => void; 
  limit?: number;
}
const AllPosts: React.FC<AllPostsProps> = ({ posts, selectedId, onSpanClick, limit }) => {
const selectedIds = Array.isArray(selectedId) ? selectedId : [selectedId];
const filteredPosts = posts.filter((post) => selectedIds.includes(post.id));


  const postsToDisplay = limit ? filteredPosts.slice(0, limit) : filteredPosts; // Conditionally limit the number of items to display

  const shuffleArray = (array: string[]): string[] => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 pt-8">
        {postsToDisplay.map((post) => (
          <div key={post.id} className="border rounded-md shadow-md article-card">
            <img src={post.img} alt={post.title} />
            <div className='article-text'>
              <h2 className="text-lg font-semibold mb-2 px-4 text-justify pt-2 article-heading">{post.heading}</h2>
              <p className="text-gray-700 text-justify px-4 text-lg article-paragraph">{post.content}</p>
            </div>
            <button className="flex h-4 py-4 px-4 font-medium flex-col read-article justify-center items-center rounded-full my-4 mx-4 border bg-white text-accent-color-main">{post.button}</button>
            {shuffleArray(post.links).map((link, index) => (
             <div
             key={index}
             onClick={() => onSpanClick?.(post.id)} 
             className={`link-${index + 1} text-left text-[11px] flex items-center justify-center custom-link-style`}
             style={{ display: 'inline-flex', justifyItems: 'space-around' }}
           >
             {link}
           </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
