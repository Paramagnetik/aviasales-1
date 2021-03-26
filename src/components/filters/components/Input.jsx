import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Input.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'input';

const Input = ({ name, text, checked, index, onChange }) => (
  <label className={cn(`${CLASS_NAME}-label`)}>
    <input
      className={cn(`${CLASS_NAME}`)}
      type="checkbox"
      name={name}
      index={index}
      checked={checked}
      onChange={() => onChange(index, checked)}
    />
    <span className={cn(`${CLASS_NAME}__checkbox`)} />
    {text}
  </label>
);

export default Input;

Input.defaultProps = {
  index: 0,
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};
