import React, { FC } from 'react';
import Content from '../../molecules/Content/Content';
import s from './Container.module.scss';

const Container: FC<IContainer> = ({ subTitle, title, className }) => (
  <div className={`${s.container} ${className}`}>
    <Content subTitle={subTitle} title={title} />
    <Content subTitle={subTitle} title={title} />
    <Content subTitle={subTitle} title={title} />
    <Content subTitle={subTitle} title={title} />
    <Content subTitle={subTitle} title={title} />
    <Content subTitle={subTitle} title={title} />
    <Content subTitle={subTitle} title={title} />
    <Content subTitle={subTitle} title={title} />
    <Content subTitle={subTitle} title={title} />
    <Content subTitle={subTitle} title={title} />
    <Content subTitle={subTitle} title={title} />
    <Content subTitle={subTitle} title={title} />
    <Content subTitle={subTitle} title={title} />
    <Content subTitle={subTitle} title={title} />
    <Content subTitle={subTitle} title={title} />
    <Content subTitle={subTitle} title={title} />
  </div>
);
interface IContainer {
  subTitle: string;
  title: string;
  className?: string;
}
Container.defaultProps = {
  className: '',
};

export default Container;
