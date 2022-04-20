import { FC } from 'react';
import Button from '../../atoms/buttons/component';
import Container from '../Container/Container';

import s from './FullPage.module.scss';

const a = 'Load more';

const FullPage: FC<IFullPage> = ({ images, className }) => (
  <div className={`${className} ${s.page}`}>
    <Container images={images} />
    <Button className={s.button}>{a}</Button>
  </div>
);
interface IFullPage {
  images: string[];
  className?: string;
}
FullPage.defaultProps = {
  className: '',
};

export default FullPage;
