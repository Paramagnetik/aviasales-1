/* eslint-disable id-length */
import React, { useEffect } from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { Alert, BackTop } from 'antd';
import Ticket from '../ticket';
import styles from './TicketList.module.scss';
import { getSearchIdThunk, getTicketsThunk } from '../../redux/actions';
import Spinner from '../spinner';
import ButtonMore from '../button-more/ButtonMore';

const CLASS_NAME = 'tickets-list';
const cn = classnames.bind(styles);

function sortTickets(tickets, ticketsShown, activeTab, activeFilters) {
  const filters = [...activeFilters];
  filters.shift();
  const sortedTickets = tickets.filter(ticket => filters.reduce((acc, item, i) => {
    if (item) {
      acc.push(i)
    }
    return acc;
  }, []).includes(ticket.segments[0].stops.length));

  if (activeTab === 'faster') {
    return sortedTickets
      .sort(
        (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
      )
      .slice(0, ticketsShown);
  }

  return sortedTickets
    .sort((a, b) => a.price - b.price)
    .slice(0, ticketsShown);
}

const TicketsList = ({ searchId, getSearchId, getTickets, stop, isLoading, visibleTickets, tickets }) => {
  useEffect(() => {
    getSearchId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (searchId && !stop) {
      getTickets(searchId);
    }
  }, [getTickets, searchId, stop, tickets]);

  const ticketsList = visibleTickets.map((ticket) => {
    const id = uuidv4();
    return <Ticket ticket={ticket} key={id} />;
  });

  return (
    <>
      {isLoading && <Spinner />}
      {ticketsList.length === 0 ? (
        <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="info" showIcon />
      ) : (
        <>
          <ul className={cn(CLASS_NAME)}>{ticketsList}</ul>
          {ticketsList.length && <ButtonMore />}
          <BackTop>
            <div className={cn(`${CLASS_NAME}__back-top`)}>&uarr;</div>
          </BackTop>
        </>
      )}
    </>
  );
};

const mapStateToProps = ({ tickets, filters, searchId }) => ({
  searchId: searchId.searchId,
  stop: tickets.stop,
  activeTab: filters.activeTab,
  isLoading: tickets.isLoading,
  ticketsShown: tickets.ticketsShown,
  tickets: tickets.tickets,
  visibleTickets: sortTickets(tickets.tickets, tickets.ticketsShown, filters.activeTab, filters.activeFilters),
});

const mapDispatchToProps = {
  getSearchId: getSearchIdThunk,
  getTickets: getTicketsThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);

TicketsList.defaultProps = {
  tickets: [],
  visibleTickets: [],
  searchId: '',
  stop: true,
  isLoading: true,
  getSearchId: () => {},
  getTickets: () => {},
};

TicketsList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object),
  visibleTickets: PropTypes.arrayOf(PropTypes.object),
  searchId: PropTypes.string,
  getSearchId: PropTypes.func,
  getTickets: PropTypes.func,
  stop: PropTypes.bool,
  isLoading: PropTypes.bool,
};
