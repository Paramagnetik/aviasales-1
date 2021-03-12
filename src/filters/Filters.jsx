import React from 'react';
import classnames from 'classnames/bind';
import styles from './Filters.module.scss';

const CLASS_NAME = 'filters';
const cn = classnames.bind(styles);

const Filters = () => (
  <div className={cn(CLASS_NAME)}>
    <span className={cn(`${CLASS_NAME}__title`)}>Количество пересадок</span>
    <div className={cn(`${CLASS_NAME}__controls`)}>
      <label className={cn(`${CLASS_NAME}__label`)}>
        <input className={cn(`${CLASS_NAME}__input`)} type="checkbox" name="all-transfer" />
        <span className={cn(`${CLASS_NAME}__checkbox`)} />
        Все
      </label>
      <label className={cn(`${CLASS_NAME}__label`)}>
        <input className={cn(`${CLASS_NAME}__input`)} type="checkbox" name="no-transfer" defaultChecked />
        <span className={cn(`${CLASS_NAME}__checkbox`)} />
        Без пересадок
      </label>
      <label className={cn(`${CLASS_NAME}__label`)}>
        <input className={cn(`${CLASS_NAME}__input`)} type="checkbox" name="one-transfer" defaultChecked />
        <span className={cn(`${CLASS_NAME}__checkbox`)} />
        1 пересадка
      </label>
      <label className={cn(`${CLASS_NAME}__label`)}>
        <input className={cn(`${CLASS_NAME}__input`)} type="checkbox" name="two-transfer" defaultChecked />
        <span className={cn(`${CLASS_NAME}__checkbox`)} />
        2 пересадки
      </label>
      <label className={cn(`${CLASS_NAME}__label`)}>
        <input className={cn(`${CLASS_NAME}__input`)} type="checkbox" name="three-transfer" />
        <span className={cn(`${CLASS_NAME}__checkbox`)} />
        3 пересадки
      </label>
    </div>
  </div>
);

export default Filters;
