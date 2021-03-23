import React from 'react';
import classnames from 'classnames/bind';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ButtonMore.module.scss';
import { takeMoreTicketsActions } from '../../redux/actions';

const cn = classnames.bind(styles);

const ButtonMore = ({ showMoreTickets }) => (
  <button className={cn('button-more')} type="button" onClick={showMoreTickets}>
    Показать больше билетов
  </button>
);

const mapDispatchToProps = {
  showMoreTickets: takeMoreTicketsActions,
};

export default connect(null, mapDispatchToProps)(ButtonMore);

ButtonMore.defaultProps = {
  showMoreTickets: () => {},
};

ButtonMore.propTypes = {
  showMoreTickets: PropTypes.func,
};
