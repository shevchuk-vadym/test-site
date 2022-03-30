import React, { FC } from 'react';

import Skin from '../molecules/Skin/Skin';
import s from './mainPage.module.scss';

import Content from '../molecules/Content/Content';
import Container from '../organisms/Container/Container';

const t = 'SUPER SALE';
const d = 'Summer collection';
const items = [
  {
    title: 'summer collection',
    imageUrl: '',
  },
];

console.log(items);
const MainPage: FC = () => (
  <div className={s.container}>
    <Container title={t} subTitle={d} />
  </div>
);

export default MainPage;
