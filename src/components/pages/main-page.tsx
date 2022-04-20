import { FC } from 'react';

import s from './mainPage.module.scss';

import Container from '../organisms/Container/Container';
import img1 from '../assets/slate/slate_1.png';
import img2 from '../assets/slate/slate_2.svg';
import img3 from '../assets/slate/slate_3.svg';
import img4 from '../assets/slate/slate_4.svg';
import img5 from '../assets/slate/slate_5.svg';
import img6 from '../assets/slate/slate_6.svg';
import img7 from '../assets/slate/slate_7.svg';
import img8 from '../assets/slate/slate_8.svg';
import img9 from '../assets/slate/slate_9.svg';
import img10 from '../assets/slate/slate_10.svg';
import img11 from '../assets/slate/slate_11.svg';
import img12 from '../assets/slate/slate_12.svg';
import img13 from '../assets/slate/slate_13.svg';
import img14 from '../assets/slate/slate_14.svg';
import img15 from '../assets/slate/slate_15.svg';
import img16 from '../assets/slate/slate_16.svg';
import FullPage from '../organisms/FullPage/FullPage';

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
];

const MainPage: FC = () => (
  <div className={s.container}>
    {/* <Container {...{ images }} /> */}
    <FullPage {...{ images }} />
  </div>
);

export default MainPage;
