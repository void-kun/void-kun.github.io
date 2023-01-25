import React from 'react';
import { Link } from 'react-router-dom';
import { PostCard as PostCardProps } from '../../state/posts';

const PostCard = (props: PostCardProps) => {
  return (
    <div className="pt-3 pb-3 break-inside-avoid">
      <div className="flex gap-8">
        <span className="text-sm text-text-light min-w-fit pt-1">{props.timestamp}</span>
        <div className="flex flex-col">
          <Link className="text-text font-medium text-lg hover:text-brown-dark" to={props.slug}>
            {props.title}
          </Link>
          {props.categories &&
            props.categories.map((category) => (
              <Link
                to={category.path}
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
