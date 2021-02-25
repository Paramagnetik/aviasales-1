import React from 'react';
import classnames from 'classnames/bind';
import FlyInfo from '../fly-info';
import image from './img/S7-Logo.png';
import styles from './Ticket.module.scss';

const CLASS_NAME = 'ticket';
const cn = classnames.bind(styles);

const Ticket = () => (
  <li className={cn(CLASS_NAME)}>
    <div className={cn(`${CLASS_NAME}__header`)}>
      <span className={cn(`${CLASS_NAME}__price`)}>13 400 Р</span>
      <img src={image} alt="Aviacompany logo" />
    </div>
    <FlyInfo />
    <FlyInfo />
  </li>
)

export default Ticket;
