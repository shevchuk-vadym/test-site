import React, { FC } from 'react';
import s from './SubTitle.module.scss';

const SubTitle: FC<ISubTitle> = ({ className, children }) => (
  <span className={`${s.subTitle} ${className}`}>{children}</span>
);

interface ISubTitle {
  children: React.ReactNode;
  className?: string;
}

SubTitle.defaultProps = {
  className: '',
};

export default SubTitle;
