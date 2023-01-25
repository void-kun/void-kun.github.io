import { atom, selector } from 'recoil';

type Category = {
  name: string;
  path: string;
};

export type PostCard = {
  timestamp: string;
  title: string;
  slug: string;
  summary: string;
  categories: Array<Category>;
};

const POST_CARDS = 'POST_CARDS';
const POST_CARDS_FETCH = 'POST_CARDS_FETCH';
const initialPost: Array<PostCard> = [];

const postCardState = atom({
  key: POST_CARDS,
  default: initialPost,
});

const fetchPostCards = selector({
  key: POST_CARDS_FETCH,
  get: ({ get }) => {
    return [
      {
        timestamp: 'Th 4, 3 thg 2, 2023',
        title: 'AWS - Global infrastructures',
        slug: 'aws-global_infrastructures_1',
        summary:
          'Bài viết chém gió về AWS global infrastructure, nào là data center, availability zones, regions, etc ...',
        categories: [
          {
            name: 'AWS',
            path: 'aws',
          },
        ],
      },
      {
        timestamp: 'Th 4, 3 thg 2, 2023',
        title: 'AWS - Global infrastructures',
        slug: 'aws-global_infrastructures_2',
        summary:
          'Bài viết chém gió về AWS global infrastructure, nào là data center, availability zones, regions, etc ...',
        categories: [
          {
            name: 'AWS',
            path: 'aws',
          },
        ],
      },
      {
        timestamp: 'Th 4, 3 thg 2, 2023',
        title: 'AWS - Global infrastructures',
        slug: 'aws-global_infrastructures_3',
        summary:
          'Bài viết chém gió về AWS global infrastructure, nào là data center, availability zones, regions, etc ...',
        categories: [
          {
            name: 'AWS',
            path: 'aws',
          },
        ],
      },
    ];
  },
});

export { postCardState, fetchPostCards };
