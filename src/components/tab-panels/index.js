import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
// Styles
import './index.sass';

const TabPanels = ({ children, activePanel, className }) => {
  const tabPanelRef = React.createRef(null);

  const classes = classNames({
    'tab-panels': true,
    [className]: className
  });

  return (
    <SwitchTransition mode={'out-in'} className={classes}>
      <CSSTransition nodeRef={tabPanelRef} key={activePanel} timeout={300} classNames="my-node">
        <>
          {React.Children.map(children, child => (
            React.cloneElement(child, { ref: tabPanelRef })
          ))}
        </>
      </CSSTransition>
    </SwitchTransition>
  );
};

TabPanels.propTypes = {
  children: PropTypes.node,
  activePanel: PropTypes.string,
  className: PropTypes.string,
};

export default TabPanels;
