import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostCard from '../components/postcard';
import Category, { CategoryType } from './Category.page';

export type PostCardType = {
  timestamp: string;
  title: string;
  slug: string;
  summary: string;
  categories: Array<CategoryType>;
};

const Post = () => {
  const [postCards, setPostCards] = useState<Array<PostCardType>>([]);
  const { slug } = useParams();

  useEffect(() => {
    try {
      const data = require('./../markdown/posts.json');

      if (!slug) {
        setPostCards(data);
        return;
      }
      const postCards = data.filter((post: PostCardType) => {
        return !!post.categories.find((cate) => cate.path === slug);
      });
      setPostCards(postCards);
    } catch (error) {}
  }, [slug]);

  return (
    <div className="w-full overflow-hidden">
      <Category />
      <div className="columns-1 2xl:columns-3 lg:columns-2 gap-x-4">
        {postCards && postCards.map((card) => <PostCard key={card.slug} {...card} />)}
      </div>
    </div>
  );
};

export default Post;
