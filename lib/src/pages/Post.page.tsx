import React from 'react';
import { useRecoilValue } from 'recoil';
import { fetchPostCards, PostCard as PostCardProps } from '../state/posts';
import PostCard from '../components/postcard';

const Post = () => {
  const postCards = useRecoilValue(fetchPostCards);

  return (
    <div className="columns-1 2xl:columns-3 lg:columns-2 gap-x-4">
      {postCards && postCards.map((card) => <PostCard key={card.slug} {...card} />)}
    </div>
  );
};

export default Post;
