import React, { FC } from 'react';
import WaterMark from '../../atoms/WaterMark/WaterMark';
import Tittle from '../Titles/Tittle';

import s from './Skin.module.scss';

const Skin: FC<ISkin> = ({ className, subTitle, title }) => (
  <div className={`${s.skin} ${className}`}>
    <WaterMark />
    <Tittle subTitle={subTitle} title={title} />
  </div>
);

interface ISkin {
  className?: string;
  subTitle: string;
  title: string;
}

Skin.defaultProps = {
  className: '',
};
export default Skin;
