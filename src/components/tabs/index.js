import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './index.sass';

const Tabs = ({ children, activeTab, onClick, className }) => {
  const activeTabRef = React.createRef();
  const indicatorRef = React.createRef();

  const classes = classNames({
    'tabs': true,
    [className]: className
  });

  React.useEffect(() => {
    const tab = activeTabRef.current;
    const indicator = indicatorRef.current;
    // Get sizes for indicator's positioning
    const tabWidth = tab.offsetWidth;
    const tabOffsetLeft = tab.offsetLeft;
    // Apply styles to the indicator
    indicator.style.left = `${tabOffsetLeft}px`;
    indicator.style.width = `${tabWidth}px`;
  }, [activeTab]);

  return (
    <div className={classes}>
      <div className="tabs__wrap">
        {React.Children.map(children, child => {
          const { label } = child.props;
          return (
            React.cloneElement(child, {
              key: label,
              isActive: activeTab === label,
              className: 'tabs__tab',
              ref: activeTab === label ? activeTabRef : null,
              onClick: () => onClick(label)
            })
          );
        })}
      </div>
      <div className="tabs__indicator" ref={indicatorRef}></div>
    </div>
  );
};

Tabs.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  activeTab: PropTypes.string,
};

export default Tabs;
