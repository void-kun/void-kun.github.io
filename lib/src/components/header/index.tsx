import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { headerState } from '../../state/header';

const Header = () => {
  let { pathname } = useLocation();
  const [headerTitle, setHeaderTitle] = useRecoilState(headerState);

  useEffect(() => {
    setHeaderTitle(pathname.replace('/', '').toUpperCase());
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
