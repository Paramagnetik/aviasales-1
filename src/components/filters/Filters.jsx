import React from 'react';
import classnames from 'classnames/bind';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Filters.module.scss';
import { setAllFiltersCheckedAction, setFilterCheckedAction } from '../../redux/actions';
import Input from './components';

const CLASS_NAME = 'filters';
const cn = classnames.bind(styles);

const Filters = ({ filters, setFilterChecked, isFilterAllChecked, setAllFiltersChecked }) => {
  const handleToggleAllCheckboxes = () => {
    setAllFiltersChecked(!isFilterAllChecked);
    setFilterChecked(filters.map((item) => ({ ...item, isActive: !isFilterAllChecked })));
  };

  const handleToggleCheckbox = (index, checked) => {
    const newFilters = [...filters];
    newFilters[index].isActive = !checked;
    setFilterChecked(newFilters);

    const isAllActive = newFilters.every((item) => item.isActive);
    setAllFiltersChecked(isAllActive);
  };

  return (
    <div className={cn(CLASS_NAME)}>
      <span className={cn(`${CLASS_NAME}__title`)}>Количество пересадок</span>
      <Input name="all-transfers" text="Все" checked={isFilterAllChecked} onChange={handleToggleAllCheckboxes} />
      <div className={cn(`${CLASS_NAME}__controls`)}>
        {filters.map(({ name, text }, index) => (
          <Input
            onChange={handleToggleCheckbox}
            name={name}
            index={index}
            text={text}
            checked={filters[index].isActive}
            key={name}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ filters }) => ({
  ...filters,
});

const mapDispatchToProps = {
  setFilterChecked: setFilterCheckedAction,
  setAllFiltersChecked: setAllFiltersCheckedAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

Filters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFilterAllChecked: PropTypes.bool.isRequired,
  setFilterChecked: PropTypes.func.isRequired,
  setAllFiltersChecked: PropTypes.func.isRequired,
};