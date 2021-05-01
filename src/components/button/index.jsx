import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './index.sass';

const Button = ({ children, href, className, variant, disabled, onClick, type, style }) => {
  const classes = classNames({
    'button': variant && !disabled,
    [`button--${variant}`]: variant,
    [className]: className
  });

  const Tag = href ? 'a' : 'button';

  return (
    <Tag href={href} className={classes} disabled={!href && disabled} onClick={onClick} style={style} type={type}>
      {children}
    </Tag>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  style: PropTypes.object,
};

export default Button;
