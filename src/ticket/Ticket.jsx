import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import FlyghtInfo from '../flyght-info';
import styles from './Ticket.module.scss';

const CLASS_NAME = 'ticket';
const cn = classnames.bind(styles);

const Ticket = ({ ticket }) => {
  const { price, segments, carrier } = ticket;

  return (
    <li className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__header`)}>
        <span className={cn(`${CLASS_NAME}__price`)}>{price.toLocaleString()} P</span>
        <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt="Aviacompany logo" />
      </div>
      <FlyghtInfo segments={segments} />
    </li>
  );
};

Ticket.defaultProps = {
  ticket: {},
  price: 0,
};

Ticket.propTypes = {
  ticket: PropTypes.objectOf(PropTypes.any),
  price: PropTypes.number,
};

export default Ticket;
