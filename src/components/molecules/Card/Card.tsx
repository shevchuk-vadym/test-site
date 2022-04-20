import { FC } from 'react';
import WaterMark from '../../atoms/WaterMark/WaterMark';
import Markup from '../Markup/Markup';

import s from './Card.module.scss';

const Card: FC<ICard> = ({ className, imageUrl }) => (
  <div className={`${s.skin} ${className}`}>
    <img src={imageUrl} alt="" className={s.image} />
    <WaterMark />
    <Markup subTitle="SUPER SALE" title="Summer collection" />
  </div>
);

interface ICard {
  className?: string;
  imageUrl: string;
}

Card.defaultProps = {
  className: '',
};
export default Card;
