import React from 'react';
import { Link } from 'react-router-dom';
import { PostCardType } from '../../pages/Post.page';

const PostCard = (props: PostCardType) => {
  return (
    <div className="pt-3 pb-3 break-inside-avoid">
      <div className="flex flex-col md:gap-8  md:flex-row">
        <span className="text-sm text-text-light min-w-fit pt-1">{props.timestamp}</span>
        <div className="flex flex-col">
          <Link
            className="text-text font-medium text-lg hover:text-brown-dark"
            to={`/posts/${props.slug}`}
          >
            {props.title}
          </Link>
          {props.categories &&
            props.categories.map((category) => (
              <Link
                to={`/categories/${category.path}`}
                key={`${props.slug}_${category.path}`}
                className="text-brown-dark hover:underline"
              >
                #{category.name}
              </Link>
            ))}
          <p className="text-text-light text-base">{props.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
