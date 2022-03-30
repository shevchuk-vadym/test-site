import React, { FC } from 'react';
import s from './Title.module.scss';

const Title: FC<ITitle> = ({ className, children }) => (
  <span className={`${s.title} ${className}`}>{children}</span>
);

interface ITitle {
  children: React.ReactNode;
  className?: string;
}

Title.defaultProps = {
  className: '',
};
export default Title;
