import React from 'react';
import classnames from 'classnames/bind';
import Filters from '../filters';
import Tabs from '../tabs';
import TicketsList from '../tickets-list';
import styles from './App.module.scss';
import image from './img/logo.png';

const CLASS_NAME = 'app';
const cn = classnames.bind(styles);

const App = () => (
  <div className={cn(CLASS_NAME)}>
    <img src={image} className={cn(`${CLASS_NAME}__logo`)} alt="Logo Aviasales" />
    <div className={cn(`${CLASS_NAME}__content`)}>
      <div className={cn('filters-wrapper')}>
        <Filters />
      </div>
      <div className={cn('product-list')}>
        <Tabs />
        <TicketsList />
      </div>
    </div>
  </div>
)

export default App;