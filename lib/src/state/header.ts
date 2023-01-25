import { atom } from 'recoil';

const HEADER_TITLE = 'HEADER_TITLE';
const headerState = atom({
  key: HEADER_TITLE,
  default: '',
});

export { HEADER_TITLE, headerState };
