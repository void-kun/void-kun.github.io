import React, { Suspense } from 'react';
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Loading from './components/loading';
import MainLayout from './components/mainlayout';
import { Detail, Photo, Post } from './router';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      {['', 'posts'].map((path) => (
        <Route key={path} path={path} element={<Post />} />
      ))}
      <Route path="posts/:slug" element={<Detail />} />
      <Route path="categories/:slug" element={<Post />} />
      <Route path="photos" element={<Photo />} />
    </Route>
  )
);

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex w-full h-full overflow-x-hidden flex-col sm:flex-row">
        <RouterProvider router={router} />
      </div>
    </Suspense>
  );
};

export default App;
