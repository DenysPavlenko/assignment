import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
// Components
import Typography from 'components/typography';
// Hooks
import useClickOutside from 'hooks/use-click-outside';
import useTabClick from 'hooks/use-tab-click';
// Styles
import './index.sass';
// Assets
import { ReactComponent as CloseIcon } from 'assets/images/icons/close.svg';

const ContactCard = ({ children, avatar, firstName, lastName, className, ...otherProps }) => {
  const [isOpened, setIsOpened] = React.useState(false);
  const contactCardRef = React.useRef(null);
  const contactCardWrapRef = React.useRef(null);

  const classes = classNames({
    'contact-card': true,
    [className]: className
  });

  const toggleOpen = () => setIsOpened(isOpened => !isOpened);
  const handleClose = () => setIsOpened(false);

  useClickOutside(contactCardRef, handleClose);
  useTabClick(contactCardRef, handleClose);

  return (
    <div ref={contactCardRef}>
      {React.Children.map(children, child => (
        React.cloneElement(child, { onClick: toggleOpen })
      ))}
      <div className={classes}>
        <CSSTransition nodeRef={contactCardWrapRef} in={isOpened} timeout={300} classNames="contact-card-animation" unmountOnExit>
          <div className="contact-card__wrap" ref={contactCardWrapRef}>
            <CloseIcon className="contact-card__close" onClick={handleClose} />
            <div className="contact-card__row">
              <div className="contact-card__left">
                <img className="contact-card__avatar" src={avatar} alt="avatar" />
              </div>
              <div className="contact-card__right">
                <Typography component="h5" className="contact-card__name">{firstName} {lastName}</Typography>
                <div>
                </div>
                <table className="contact-card__details">
                  <tbody>
                    {Object.keys(otherProps).map(key => (
                      <tr key={key}>
                        <td className="contact-card__details-name">
                          <Typography component="span" variant="h6">{key}:</Typography>
                        </td>
                        <td className="contact-card__details-value">
                          <Typography component="span" variant="p">{otherProps[key]}</Typography>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  children: PropTypes.node,
  avatar: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  className: PropTypes.string,
};

export default ContactCard;
