import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Link, useNavigate } from 'react-router-dom';
import PrismSyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { PostDetailType } from '../../pages/Detail.page';

type MarkdownViewProps = {
  postSlug: string;
};

const MarkdownComponent: object = {
  // @ts-ignore
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <PrismSyntaxHighlighter
        children={String(children).replace(/\n$/, '')}
        style={oneDark}
        language={match[1]}
        PreTag="div"
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  image: ({ alt, src, title }: { alt?: string; src?: string; title?: string }) => (
    <img alt={alt} src={src} title={title} style={{ maxWidth: '48rem' }} />
  ),
};

const MarkdownView = ({ postSlug }: MarkdownViewProps) => {
  const navigate = useNavigate();
  const [data, setData] = useState<PostDetailType>();
  useEffect(() => {
    if (!postSlug) return;
    async function fetchData() {
      try {
        const data = await require(`../../markdown/${postSlug}.json`);
        setData({
          ...data,
          markdown: data.markdown.join('\n'),
        });
      } catch (error) {}
    }
    fetchData();
  }, [postSlug, navigate]);

  if (!data) return null;
  return (
    <div className="pt-4">
      <article className="prose flex flex-col m-auto">
        <h1 className="mb-4">{data.title}</h1>
        <span className="w-36 h-[2px]  bg-brown-light"></span>
        <time className="mb-12">{data.timestamp}</time>
        {data.banner_url && <img src={data.banner_url} alt="banner" className="" />}
        <ReactMarkdown
          children={data.markdown}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={MarkdownComponent}
        />
      </article>
      <div className="mt-8 flex">
        <span className="font-medium text-lg mr-4">Category:</span>
        {data.categories &&
          data.categories.map((category) => (
            <Link
              key={`${category.path}_markdown`}
              to={`/categories/${category.path}`}
              className="grid place-content-center text-brown-dark font-medium hover:underline mr-4"
            >
              #{category.name}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MarkdownView;
