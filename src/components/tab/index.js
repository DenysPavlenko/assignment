import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import Typography from 'components/typography';
import './index.sass';

const Tab = React.forwardRef(({ letter, number, isActive, onClick, className }, ref) => {
  const classes = classNames({
    'tab': true,
    'is-disabled': number === 0,
    'is-active': isActive,
    [className]: className
  });

  return (
    <button className={classes} disabled={number === 0} onClick={onClick} ref={ref}>
      <Typography component="h4" className="tab__letter">{letter}</Typography>
      <Typography component="p" className="tab__number">{number}</Typography>
    </button>
  );
});

Tab.defaultProps = {
  number: 0
};

Tab.propTypes = {
  letter: PropTypes.string,
  number: PropTypes.number,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  className: PropTypes.string,
};

export default Tab;
