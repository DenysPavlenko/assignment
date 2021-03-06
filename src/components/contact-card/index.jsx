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

const ContactCard = ({ children, avatar, firstName, lastName, className, email, phone, street, city, state, postcode }) => {
  const [isOpened, setIsOpened] = React.useState(false);
  const contactCardRef = React.useRef(null);
  const contactCardWrapRef = React.useRef(null);

  const details = { email, phone, street, city, state, postcode };

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
        React.cloneElement(child, { onClick: toggleOpen, isActive: isOpened })
      ))}
      <div className={classes}>
        <CSSTransition nodeRef={contactCardWrapRef} in={isOpened} timeout={300} classNames="contact-card-animation" unmountOnExit>
          <div className="contact-card__wrap" ref={contactCardWrapRef}>
            <button className="contact-card__close" onClick={handleClose}>
              <CloseIcon className="contact-card__close-icon" />
            </button>
            <div className="contact-card__row">
              <div className="contact-card__left">
                <img className="contact-card__avatar" src={avatar} alt="avatar" />
                <Typography component="h5" className="contact-card__name-mobile">{firstName} {lastName}</Typography>
              </div>
              <div className="contact-card__right">
                <Typography component="h5" className="contact-card__name">{firstName} {lastName}</Typography>
                <div>
                </div>
                <table className="contact-card__details">
                  <tbody>
                    {Object.keys(details).map((key, idx) => (
                      <tr key={key}>
                        <td className="contact-card__details-name">
                          <Typography component="span" variant="h6">{key}:</Typography>
                        </td>
                        <td className="contact-card__details-value">
                          <Typography component="span" variant="p" style={{ wordBreak: idx === 0 && 'break-all' }}>{details[key]}</Typography>
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
  email: PropTypes.string,
  phone: PropTypes.string,
  street: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  postcode: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default ContactCard;
