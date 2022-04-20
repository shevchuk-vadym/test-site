import { FC } from 'react';
import Card from '../../molecules/Card/Card';

import s from './Container.module.scss';

const Container: FC<IContainer> = ({ images, className }) => {
  const items = images.map((imageUrl) => <Card {...{ imageUrl }} />);
  return (
    <div className={`${s.container} ${className}`}>
      {items}
    </div>
  );
};
interface IContainer {
  images: string[];
  className?: string;
}
Container.defaultProps = {
  className: '',
};

export default Container;
