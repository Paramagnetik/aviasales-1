import React from 'react';
import classnames from 'classnames/bind';
import Ticket from '../ticket';
import styles from './TicketList.module.scss';

const CLASS_NAME = 'tickets-list';
const cn = classnames.bind(styles)

const TicketsList = () => (
  <ul className={cn(CLASS_NAME)}>
    <Ticket />
    <Ticket />
    <Ticket />
    <Ticket />
  </ul>
)


export default TicketsList;