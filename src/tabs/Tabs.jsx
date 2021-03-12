import React from 'react';
import classnames from 'classnames/bind';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Tabs.module.scss';
import { setActiveTabAction } from '../redux/actions';

const CLASS_NAME = 'tabs';
const cn = classnames.bind(styles);

const Tabs = ({ activeTab, onTabClick }) => (
  <div className={cn(CLASS_NAME)}>
    <button
      className={cn(`${CLASS_NAME}__tab`, { [`${CLASS_NAME}__tab--active`]: activeTab === 'cheaper' })}
      type="button"
      name="cheaper"
      onClick={onTabClick}
    >
      Самый дешевый
    </button>
    <button
      className={cn(`${CLASS_NAME}__tab`, { [`${CLASS_NAME}__tab--active`]: activeTab === 'faster' })}
      type="button"
      name="faster"
      onClick={onTabClick}
    >
      Самый быстрый
    </button>
  </div>
);

const mapStateToProps = state => ({
  activeTab: state.activeTab,
})

const mapDispatchToProps = dispatch => ({
    onTabClick: event => {
      dispatch(setActiveTabAction(event.target.name))
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);

Tabs.defaultProps = {
  activeTab: 'cheaper',
  onTabClick: () => {},
}

Tabs.propTypes = {
  activeTab: PropTypes.string,
  onTabClick: PropTypes.func,
}
