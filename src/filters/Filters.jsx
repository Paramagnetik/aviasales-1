import React from 'react';
import classnames from 'classnames/bind';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Filters.module.scss';
import { setFilterCheckedAction, setTransfersAction } from '../redux/actions';


const CLASS_NAME = 'filters';
const cn = classnames.bind(styles);

const FILTERS = [
  {name: 'all-transfer', text: 'Все'},
  {name: 'no-transfer', text: 'Без пересадок'},
  {name: 'one-transfer', text: '1 пересадка'},
  {name: 'two-transfer', text: '2 пересадки'},
  {name: 'three-transfer', text: '3 пересадки'},
];

const Filters = ({  activeFilters, transfers, setFilterChecked, setTransfers }) => {

  const toggleCheckboxes = ({ target }) => {

    if (target.name === 'all-transfer') {

     if (transfers.length < 4) {
       setTransfers([0, 1, 2, 3]);
       setFilterChecked([true, true, true, true, true]);
     } else {
      setTransfers([]);
      setFilterChecked([false, false, false, false, false]);
     }

    } else {
      const newTransfers = [...transfers];
      const newActiveFilters = activeFilters.map((item, i) => i === +target.dataset.transfers ? !item : item);

      if (newActiveFilters[0]) {
        setFilterChecked([!newActiveFilters.shift(),...newActiveFilters]);
      } else {
        setFilterChecked(newActiveFilters);
      }

      if (newTransfers.includes(+target.dataset.transfers - 1)) {
        setTransfers(newTransfers.filter(item => item !== +target.dataset.transfers - 1));
      } else {
        newTransfers.push(+target.dataset.transfers - 1);
        setTransfers(newTransfers);
        if (newTransfers.length === 4) {
          setFilterChecked([true, true, true, true, true]);
        }
      }
    }
  }

  const filters = FILTERS.map((item, i) => (
    <label className={cn(`${CLASS_NAME}__label`)} key={item.name}>
      <input 
        className={cn(`${CLASS_NAME}__input`)} 
        type="checkbox" 
        name={item.name} 
        checked={activeFilters[i]} 
        onChange={toggleCheckboxes} 
        data-transfers={i}
      />
      <span className={cn(`${CLASS_NAME}__checkbox`)} />
      {item.text}
    </label>
  ));

  return (
    <div className={cn(CLASS_NAME)}>
      <span className={cn(`${CLASS_NAME}__title`)}>Количество пересадок</span>
      <div className={cn(`${CLASS_NAME}__controls`)}>
        {filters}
      </div>
    </div>
  )
};

const mapStateToProps = ({ activeAllFilters, transfers, activeFilters }) => ({
  activeAllFilters,
  transfers,
  activeFilters,
})

const mapDispatchToProps = {
  setFilterChecked: setFilterCheckedAction,
  setTransfers: setTransfersAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

Filters.defaultProps = {
  activeFilters: [],
  transfers: [],
  setFilterChecked: () => {},
  setTransfers: () => {},
}
Filters.propTypes = {
  activeFilters: PropTypes.arrayOf(PropTypes.bool),
  transfers: PropTypes.arrayOf(PropTypes.number),
  setFilterChecked: PropTypes.func,
  setTransfers: PropTypes.func,
}