import React, { useEffect } from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import Ticket from '../ticket';
import styles from './TicketList.module.scss';
import { getSearchIdThunk, getTicketsThunk } from '../redux/actions';

const CLASS_NAME = 'tickets-list';
const cn = classnames.bind(styles);

const TicketsList = ({ tickets, searchId, getSearchId, getTickets, stop }) => {

  useEffect(() => {
    getSearchId();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ]);

  if (searchId && !stop) {
    getTickets(searchId);
  }

  const ticketsList = tickets.map(ticket => {
    const id = uuidv4();
    return <Ticket ticket={ticket} key={id} />
  });

  return (
    <ul className={cn(CLASS_NAME)}>
      {ticketsList}
    </ul>
  )
}

const mapStateToProps = ({ tickets, searchId, activeTab, stop }) => ({
  tickets,
  searchId,
  stop,
  activeTab,
});

const mapDispatchToProps = {
  getSearchId: getSearchIdThunk,
  getTickets: getTicketsThunk,
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);

TicketsList.defaultProps = {
  tickets: [],
  searchId: '',
  stop: false,
  getSearchId: () => {},
  getTickets: () => {},
}

TicketsList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tickets: PropTypes.array,
  searchId: PropTypes.string,
  getSearchId: PropTypes.func,
  getTickets: PropTypes.func,
  stop: PropTypes.bool,
}