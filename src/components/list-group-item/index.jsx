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
    <div className={classes}>
      <Typography component="span" variant="p" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>{children}</Typography>
    </div>
  );
};

ListGroupItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default ListGroupItem;
