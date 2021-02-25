import React from 'react';
import classnames from 'classnames/bind';
import styles from './FlyInfo.module.scss';

const CLASS_NAME = 'fly-info';
const cn = classnames.bind(styles);

const FlyInfo = () => (
  <div className={cn(CLASS_NAME)}>
    <div className={cn(`${CLASS_NAME}__item`)}>
      <span className={cn(`${CLASS_NAME}__text`)}>MOW – HKT</span>
      <span className={cn(`${CLASS_NAME}__description`)}>10:45 – 08:00</span>
    </div>
    <div className={cn(`${CLASS_NAME}__item`)}>
      <span className={cn(`${CLASS_NAME}__text`)}>В пути</span>
      <span className={cn(`${CLASS_NAME}__description`)}>21ч 15м</span>
    </div>
    <div className={cn(`${CLASS_NAME}__item`)}>
      <span className={cn(`${CLASS_NAME}__text`)}>2 пересадки</span>
      <span className={cn(`${CLASS_NAME}__description`)}>HKG, JNB</span>
    </div>
  </div>
)

export default FlyInfo;

 