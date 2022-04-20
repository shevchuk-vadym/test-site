import { FC } from 'react';
import s from './WaterMark.module.scss';

const WaterMark: FC<IMark> = () => <div className={`${s.watermark}`}> </div>;

interface IMark {
  className?: string;
}

WaterMark.defaultProps = {
  className: '',
};
export default WaterMark;
