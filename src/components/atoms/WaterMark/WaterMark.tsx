import React, { FC } from 'react';
import s from './WaterMark.module.scss';
import image from '../../assets/Ellipse 245.svg';

const WaterMark: FC<IMark> = () => <div className={`${s.watermark}`}>9</div>;

interface IMark {
  className?: string;
}

WaterMark.defaultProps = {
  className: '',
};
export default WaterMark;
