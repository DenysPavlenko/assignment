import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './index.sass';

const ListGroup = ({ children, className }) => {
  const classes = classNames({
    'list-group': true,
    [className]: className
  });

  return (
    <div className={classes}>
      <div className="list-group__row">
        {React.Children.map(children, child => (
          <div className="list-group__col">{child}</div>
        ))}
      </div>
    </div>
  );
};

ListGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ListGroup;
