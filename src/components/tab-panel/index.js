import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './index.sass';

const TabPanel = React.forwardRef(({ children, className }, ref) => {
  const classes = classNames({
    'tab-panel': true,
    [className]: className
  });

  return (
    <div className={classes} ref={ref}>
      {children}
    </div>
  );
});

TabPanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default TabPanel;
