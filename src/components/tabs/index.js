import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import Tab from 'components/tab';
// Styles
import './index.sass';

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

const Tabs = ({ className }) => {
  const activeTabRef = React.createRef();
  const indicatorRef = React.createRef();
  const [activeLetter, setActiveLetter] = React.useState('a');

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
  }, [activeLetter]);

  const handleTabClick = letter => setActiveLetter(letter);

  return (
    <div className={classes}>
      <div className="tabs__wrap">
        {letters.map((letter, idx) => (
          <Tab
            key={idx}
            letter={letter}
            number={letters.length - 1 - idx}
            isActive={activeLetter === letter}
            onClick={() => handleTabClick(letter)}
            className="tabs__tab"
            ref={activeLetter === letter ? activeTabRef : null}
          />
        ))}
      </div>
      <div className="tabs__indicator" ref={indicatorRef}></div>
    </div>
  );
};

Tabs.propTypes = {
  className: PropTypes.string,
};

export default Tabs;
