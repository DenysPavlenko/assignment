import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import Typography from 'components/typography';
// Styles
import './index.sass';
// Utils
import { handleAccessibilityKeyPress } from 'utils/helpers';

const ListGroupItem = ({ children, className, onClick }) => {
  const classes = classNames({
    'list-group-item': true,
    [className]: className
  });

  const handleKeyPress = e => onClick && handleAccessibilityKeyPress(e, onClick);

  return (
    <div tabIndex="1" className={classes} style={{ cursor: onClick ? 'pointer' : 'default' }} onClick={onClick} onKeyPress={handleKeyPress}>
      <Typography component="h6">{children}</Typography>
    </div>
  );
};

ListGroupItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default ListGroupItem;
