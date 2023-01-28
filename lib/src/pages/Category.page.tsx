import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export type CategoryType = {
  name: string;
  path: string;
};

const Category = () => {
  const [category, setCategory] = useState<Array<CategoryType>>([]);

  useEffect(() => {
    try {
      const data = require('./../markdown/categories.json');
      setCategory(data);
    } catch (error) {}
  }, []);

  return (
    <div className='w-full flex flex-wrap'>
      {category.length > 0 &&
        category.map((c) => (
          <Link
            key={c.path}
            className="text-brown-dark font-normal text-lg mr-4 hover:underline"
            to={`/categories/${c.path}`}
          >
            #{c.name}
          </Link>
        ))}
    </div>
  );
};

export default Category;
