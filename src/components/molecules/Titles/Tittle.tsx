import React, { FC } from 'react';
import Sale from '../../atoms/Title/Title';
import Season from '../../atoms/SubTitle/SubTitle';
import WaterMark from '../../atoms/WaterMark/WaterMark';
import s from './Tittle.module.scss';

const Tittle: FC<ITittle> = ({ title, subTitle, className }) => (
  <div className={`${s.tittle} ${className}`}>
    <Sale>{title}</Sale>
    <Season>{subTitle}</Season>
  </div>
);

interface ITittle {
  subTitle: React.ReactNode;
  title: React.ReactNode;
  className?: string;
}

Tittle.defaultProps = {
  className: '',
};
export default Tittle;
