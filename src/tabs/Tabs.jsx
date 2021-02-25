import React from 'react';
import classnames from 'classnames/bind';
import styles from './Tabs.module.scss';

const CLASS_NAME = 'tabs';
const cn = classnames.bind(styles);

const Tabs = () => {

  const activeTab = 'cheaper';

  return (
    <div className={cn(CLASS_NAME)}>
      <button className={cn(`${CLASS_NAME}__tab`, {[`${CLASS_NAME}__tab--active`]: activeTab === 'cheaper'})} type="button">Самый дешевый</button>
      <button className={cn(`${CLASS_NAME}__tab`, {[`${CLASS_NAME}__tab--active`]: activeTab === 'faster'})} type="button">Самый быстрый</button>
    </div>
  )
 }

export default Tabs;

