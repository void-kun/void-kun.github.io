import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  let { pathname } = useLocation();
  const [headerTitle, setHeaderTitle] = useState<string>();

  useEffect(() => {
    const title = pathname.replace('/', '').toUpperCase();
    setHeaderTitle(title === '' ? 'POSTS' : title);
  }, [pathname, setHeaderTitle]);

  return (
    <div className="w-full flex flex-col gap-4 pt-8 pb-8">
      <span className="text-sm font-medium">mình thích thì mình viết thôi :3</span>
      <div className="flex">
        <span className="text-2xl font-medium">{headerTitle}</span>
      </div>
    </div>
  );
};

export default Header;
