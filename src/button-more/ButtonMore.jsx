import React from 'react';
import classnames from 'classnames/bind';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ButtonMore.module.scss';
import { takeMoreTicketsActions } from '../redux/actions';

const cn = classnames.bind(styles);

const ButtonMore = ({ showMoreTickets, take }) => {

	const count = take + 5;

	return (
		<button 
			className={cn('button-more')} 
			type="button"
			onClick={() => showMoreTickets(count)}
		>
			Показать больше билетов
		</button>
	)
}

const mapStateToProps = ({ take }) => ({
	take,
});

const mapDispatchToProps = {
	showMoreTickets: takeMoreTicketsActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonMore);

ButtonMore.defaultProps = {
	take: 5,
	showMoreTickets: () => {},
}

ButtonMore.propTypes = {
	take: PropTypes.number,
	showMoreTickets: PropTypes.func,
}