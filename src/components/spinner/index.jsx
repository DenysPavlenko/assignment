import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './index.sass';

const Spinner = ({ boxed }) => {
  const classes = classNames({
    'spinner': true,
  });

  const spinner = (
    <div className={classes}>
      <div className="spinner__inner">
        <div></div>
        <div></div>
      </div>
    </div>
  );

  return boxed ? <div className="spinner-box">{spinner}</div> : spinner;
};

Spinner.propTypes = {
  boxed: PropTypes.bool,
};

export default Spinner;
