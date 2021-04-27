import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import Tab from 'components/tab';
// Styles
import './index.sass';

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

const Tabs = ({ className }) => {
  const classes = classNames({
    'tabs': true,
    [className]: className
  });

  const [activeTab, setActiveTab] = React.useState('a');

  const handleTabClick = letter => setActiveTab(letter);

  return (
    <div className={classes}>
      {letters.map((letter, idx) => (
        <Tab
          key={idx}
          letter={letter}
          number={letters.length - 1 - idx}
          isActive={activeTab === letter}
          onClick={() => handleTabClick(letter)}
          className="tabs__tab"
        />
      ))}
    </div>
  );
};

Tabs.propTypes = {
  className: PropTypes.string,
};

export default Tabs;
