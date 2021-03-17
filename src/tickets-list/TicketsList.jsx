import React, { useEffect } from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { Alert, BackTop } from 'antd';
import Ticket from '../ticket';
import styles from './TicketList.module.scss';
import { getSearchIdThunk, getTicketsThunk } from '../redux/actions';
import Spinner from '../spinner';
import ButtonMore from '../button-more/ButtonMore';

const CLASS_NAME = 'tickets-list';
const cn = classnames.bind(styles);

function sortTickets(tickets, take, activeTab, transfers) {
  const sortedTickets = [...tickets];

  if (activeTab === 'faster') {
    return sortedTickets
            .sort((a, b) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration))
            .filter(ticket => transfers.includes(ticket.segments[0].stops.length))
            .slice(0, take)
  }
  
  return sortedTickets
          .sort((a, b) => a.price - b.price)
          .filter(ticket => transfers.includes(ticket.segments[0].stops.length))
          .slice(0, take);
}

const TicketsList = ({ searchId, getSearchId, getTickets, stop, isLoading, tickets, activeTab, take, transfers}) => {
  useEffect(() => {
    getSearchId();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (searchId && !stop) {
      getTickets(searchId)
    }
  }, [getTickets, searchId, stop, tickets])
  
  const visibleTickets = sortTickets(tickets, take, activeTab, transfers);

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
          {ticketsList.length && <ButtonMore/>} 
          <BackTop>
            <div className={cn(`${CLASS_NAME}__back-top`)}>&uarr;</div>
          </BackTop>
        </>
      )}
    </>
  );
};

const mapStateToProps = ({ tickets, searchId, activeTab, stop, isLoading, take, transfers }) => ({
  searchId,
  stop,
  activeTab,
  isLoading,
  take,
  tickets,
  transfers,
});

const mapDispatchToProps = {
  getSearchId: getSearchIdThunk,
  getTickets: getTicketsThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);

TicketsList.defaultProps = {
  tickets: [],
  searchId: '',
  stop: true,
  isLoading: true,
  activeTab: 'cheaper',
  take: 5,
  transfers: [],
  getSearchId: () => {},
  getTickets: () => {},
};

TicketsList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object),
  searchId: PropTypes.string,
  getSearchId: PropTypes.func,
  getTickets: PropTypes.func,
  stop: PropTypes.bool,
  isLoading: PropTypes.bool,
  take: PropTypes.number,
  activeTab: PropTypes.string,
  transfers: PropTypes.arrayOf(PropTypes.number),
};


