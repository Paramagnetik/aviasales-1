import React from 'react';
import { Spin } from 'antd';
import classnames from 'classnames/bind';
import styles from './Spinner.module.scss';
import 'antd/dist/antd.css';

const cn = classnames.bind(styles);

const Spinner = () => (
  <div className={cn('spinner-wrapper')}>
    <Spin size="large" tip="Загружаем оставшиеся билеты" />
  </div>
);

export default Spinner;
