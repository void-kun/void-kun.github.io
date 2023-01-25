import React, { lazy, Suspense } from 'react';
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Loading from './components/loading';
import MainLayout from './components/mainlayout';

const MIN_LAZYLOAD = 500; // second
const Category = lazy(() => {
  return Promise.all([
    import('./pages/Category.page'),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZYLOAD)),
  ]).then(([moduleExports]) => moduleExports);
});
const Detail = lazy(() => {
  return Promise.all([
    import('./pages/Detail.page'),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZYLOAD)),
  ]).then(([moduleExports]) => moduleExports);
});
const Photo = lazy(() => {
  return Promise.all([
    import('./pages/Photo.page'),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZYLOAD)),
  ]).then(([moduleExports]) => moduleExports);
});
const Post = lazy(() => {
  return Promise.all([
    import('./pages/Post.page'),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZYLOAD)),
  ]).then(([moduleExports]) => moduleExports);
});

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      {['', 'posts'].map((path) => (
        <Route key={path} path={path} element={<Post />} />
      ))}
      {['', 'posts'].map((path) => (
        <Route key={`${path}/:slug`} path={path} element={<Detail />} />
      ))}
      <Route path="categories" element={<Category />} />
      <Route path="photos" element={<Photo />} />
    </Route>
  )
);

const App = () => {
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <div className="flex w-full h-full">
          <RouterProvider router={router} />
        </div>
      </Suspense>
    </RecoilRoot>
  );
};

export default App;
