import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MarkdownView from '../components/markdownview';

type Category = {
  name: string;
  path: string;
};

export type PostDetailType = {
  timestamp: string;
  title: string;
  slug: string;
  summary: string;
  markdown: string;
  banner_url?: string;
  categories: Array<Category>;
};

const Detail = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [postSlug, setPostSlug] = useState<string>('');

  useEffect(() => {
    // Validate pathname
    if (!pathname || pathname.match(/\/posts\/[A-Z]+\//g)) {
      navigate('/');
    }
    setPostSlug(pathname.replace('/posts/', ''));
  }, [pathname, navigate]);

  return (
    <div className="max-w-3xl m-auto">
      <MarkdownView postSlug={postSlug} />
    </div>
  );
};

export default Detail;
