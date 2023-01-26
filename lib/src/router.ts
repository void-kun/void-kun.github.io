import { lazy } from 'react';

const MIN_LAZYLOAD = 500; // second
export const Category = lazy(() => {
  return Promise.all([
    import('./pages/Category.page'),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZYLOAD)),
  ]).then(([moduleExports]) => moduleExports);
});
export const Detail = lazy(() => {
  return Promise.all([
    import('./pages/Detail.page'),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZYLOAD)),
  ]).then(([moduleExports]) => moduleExports);
});
export const Photo = lazy(() => {
  return Promise.all([
    import('./pages/Photo.page'),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZYLOAD)),
  ]).then(([moduleExports]) => moduleExports);
});
export const Post = lazy(() => {
  return Promise.all([
    import('./pages/Post.page'),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZYLOAD)),
  ]).then(([moduleExports]) => moduleExports);
});
