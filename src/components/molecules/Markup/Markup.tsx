import React, { FC } from 'react';
import Sale from '../../atoms/Title/Title';
import Season from '../../atoms/SubTitle/SubTitle';
import s from './Markup.module.scss';

const Markup: FC<IMarkup> = ({ title, subTitle, className }) => (
  <div className={`${s.tittle} ${className}`}>
    <Sale>{subTitle}</Sale>
    <Season>{title}</Season>
  </div>
);

interface IMarkup {
  subTitle: React.ReactNode;
  title: React.ReactNode;
  className?: string;
}

Markup.defaultProps = {
  className: '',
};
export default Markup;
