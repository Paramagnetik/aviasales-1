import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './FlyghtInfo.module.scss';

const transfersCounter = stops => {
  const transfers = stops.length
  switch (transfers) {
    case 0:
      return 'Без пересадок'
    case 1:
      return '1 пересадка';
    case 2:
    case 3:
      return `${transfers} пересадки`
    default: 
      return '-'
  }
}

const durationFormatter = (time) => {
  let minutes = time % 60;
  const hours = Math.floor(time / 60);

  minutes = minutes >= 10 ? minutes : `0${minutes}`;

  return `${hours}ч ${minutes}м`;
}

const timeFormatter = (date, duration) => {
  const from = `${new Date(date).getHours() >= 10 ? new Date(date).getHours() : `0${new Date(date).getHours()  }`}:${new Date(date).getMinutes()}`;
  let to = new Date(date).getTime() + duration * 60 * 1000;
  let hours = new Date(to).getHours();
  let minutes = new Date(to).getMinutes();
  hours = hours >= 10 ? hours : `0${hours}`;
  minutes = minutes >= 10 ? minutes : `0${minutes}`;
  to = `${hours}:${minutes}`;

  return `${from} - ${to}`;
}

const CLASS_NAME = 'flyght-info';
const cn = classnames.bind(styles);

const FlyghtInfo = ({ segments }) => {

  const [ flyghtTo, flyghtFrom ] = segments;

  return (
    <>
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__item`)}>
          <span className={cn(`${CLASS_NAME}__text`)}>{flyghtTo.origin} – {flyghtTo.destination}</span>
          <span className={cn(`${CLASS_NAME}__description`)}>{timeFormatter(flyghtTo.date, flyghtTo.duration)}</span>
        </div>
        <div className={cn(`${CLASS_NAME}__item`)}>
          <span className={cn(`${CLASS_NAME}__text`)}>В пути</span>
          <span className={cn(`${CLASS_NAME}__description`)}>{durationFormatter(flyghtTo.duration)}</span>
        </div>
        <div className={cn(`${CLASS_NAME}__item`)}>
          <span className={cn(`${CLASS_NAME}__text`)}>{transfersCounter(flyghtTo.stops)}</span>
          <span className={cn(`${CLASS_NAME}__description`)}>{(flyghtTo.stops).join(', ')}</span>
        </div>
      </div>
      <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__item`)}>
        <span className={cn(`${CLASS_NAME}__text`)}>{flyghtFrom.origin} – {flyghtFrom.destination}</span>
        <span className={cn(`${CLASS_NAME}__description`)}>{timeFormatter(flyghtFrom.date, flyghtFrom.duration)}</span>
      </div>
      <div className={cn(`${CLASS_NAME}__item`)}>
        <span className={cn(`${CLASS_NAME}__text`)}>В пути</span>
        <span className={cn(`${CLASS_NAME}__description`)}>{durationFormatter(flyghtFrom.duration)}</span>
      </div>
      <div className={cn(`${CLASS_NAME}__item`)}>
        <span className={cn(`${CLASS_NAME}__text`)}>{transfersCounter(flyghtFrom.stops)}</span>
        <span className={cn(`${CLASS_NAME}__description`)}>{(flyghtFrom.stops).join(', ')}</span>
      </div>
    </div>
  </>
  )
};

export default FlyghtInfo;

FlyghtInfo.defaultProps = {
  segments: [],
}

FlyghtInfo.propTypes = {
  segments: PropTypes.arrayOf(PropTypes.objectOf),
}




