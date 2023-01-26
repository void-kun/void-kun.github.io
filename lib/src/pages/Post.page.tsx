import React, { useEffect, useState } from 'react';
import PostCard from '../components/postcard';

type Category = {
  name: string;
  path: string;
};

export type PostCardType = {
  timestamp: string;
  title: string;
  slug: string;
  summary: string;
  categories: Array<Category>;
};

const Post = () => {
  const [postCards, setPostCards] = useState<Array<PostCardType>>([]);

  useEffect(() => {
    try {
      const data = require('./../markdown/posts.json');
      setPostCards(data);
    } catch (error) {}
  }, []);

  return (
    <div className="columns-1 2xl:columns-3 lg:columns-2 gap-x-4">
      {postCards && postCards.map((card) => <PostCard key={card.slug} {...card} />)}
    </div>
  );
};

export default Post;
