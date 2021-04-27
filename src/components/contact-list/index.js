import React from 'react';
// Components
import Typography from 'components/typography';
import Tabs from 'components/tabs';
// Styles
import './index.sass';

const ContactList = () => {
  return (
    <div className="contact-list">
      <Typography component="h1" className="contact-list__title">Contact List</Typography>
      <div className="contact-list__tabs">
        <Tabs />
      </div>
      <div className="contact-list__body">
      </div>
    </div>
  );
};

export default ContactList;
