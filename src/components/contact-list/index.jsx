import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
// Redux
import { fetchContactListRequest } from 'redux/contact-list/actions';
import { selectContactList } from 'redux/contact-list/selectors';
// Components
import Typography from 'components/typography';
import Spinner from 'components/spinner';
import ErrorIndicator from 'components/error-indicator';
import Tabs from 'components/tabs';
import Tab from 'components/tab';
import TabPanel from 'components/tab-panel';
import TabPanels from 'components/tab-panels';
import ListGroup from 'components/list-group';
import ListGroupItem from 'components/list-group-item';
import ContactCard from 'components/contact-card';
// Styles
import './index.sass';

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

const ContactList = ({ fetchContactListRequest, contactList: { loading, data, error } }) => {
  const [activeLetter, setActiveLetter] = React.useState('a');
  const handleTabClick = letter => setActiveLetter(letter);

  React.useLayoutEffect(() => {
    fetchContactListRequest();
  }, [fetchContactListRequest]);

  return (
    <div className='contact-list'>
      <Typography component='h1' className='contact-list__title'>Contact List</Typography>
      <div className='contact-list__tabs'>
        <Tabs activeTab={activeLetter} onClick={handleTabClick}>
          {letters.map((letter, idx) => (
            <Tab key={idx} label={letter} number={(data && data[letter]) ? data[letter].length : 0} />
          ))}
        </Tabs>
      </div>
      <div className='contact-list__body'>
        {error && <ErrorIndicator retry={fetchContactListRequest} />}
        {loading && <Spinner boxed />}
        {data &&
          <TabPanels activePanel={activeLetter}>
            <TabPanel>
              <ListGroup>
                {data[activeLetter].map(item => (
                  <ContactCard
                    key={item.id.value}
                    avatar={item.picture.large}
                    firstName={item.name.first}
                    lastName={item.name.last}
                    email={item.email}
                    phone={item.phone}
                    street={item.location.street.name}
                    city={item.location.city}
                    state={item.location.state}
                    postcode={item.location.postcode}
                  >
                    <ListGroupItem>{item.name.first}, {item.name.last}</ListGroupItem>
                  </ContactCard>
                ))}
              </ListGroup>
            </TabPanel>
          </TabPanels>
        }
      </div>
    </div>
  );
};

ContactList.propTypes = {
  fetchContactListRequest: PropTypes.func,
  contactList: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.object,
    error: PropTypes.string,
  })
};

const mapStateToProps = createStructuredSelector({
  contactList: selectContactList
});

const mapDispatchToProps = {
  fetchContactListRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
