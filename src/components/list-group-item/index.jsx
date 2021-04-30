import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import Typography from 'components/typography';
// Styles
import './index.sass';

const ListGroupItem = ({ children, className, onClick }) => {
  const classes = classNames({
    'list-group-item': true,
    [className]: className
  });

  return (
    <div tabIndex="1" className={classes} style={{ cursor: onClick ? 'pointer' : 'default' }} onClick={onClick}>
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
