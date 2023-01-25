import React from 'react';
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import MainLayout from './components/mainlayout';
import Post from './pages/Post.page';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      {['', 'posts'].map((path) => (
        <Route key={path} path={path} element={<Post />} />
      ))}
      <Route path="categories" element={<Post />} />
      <Route path="photos" element={<Post />} />
    </Route>
  )
);

const App = () => {
  return (
    <RecoilRoot>
      <div className="flex w-full h-full">
        <RouterProvider router={router} />
      </div>
    </RecoilRoot>
  );
};

export default App;
