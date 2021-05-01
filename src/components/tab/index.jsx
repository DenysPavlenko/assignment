import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import Typography from 'components/typography';
import './index.sass';

const Tab = React.forwardRef(({ label, number, isActive, onClick, className }, ref) => {
  const classes = classNames({
    'tab': true,
    'is-disabled': number === 0,
    'is-active': isActive,
    [className]: className
  });

  const handleClick = e => {
    e.currentTarget.blur();
    onClick();
  };

  return (
    <button className={classes} disabled={number === 0} onClick={handleClick} ref={ref}>
      <Typography component="h4" className="tab__label">{label}</Typography>
      <Typography component="p" className="tab__number">{number}</Typography>
    </button>
  );
});

Tab.defaultProps = {
  number: 0
};

Tab.propTypes = {
  label: PropTypes.string,
  number: PropTypes.number,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  className: PropTypes.string,
};

export default Tab;
