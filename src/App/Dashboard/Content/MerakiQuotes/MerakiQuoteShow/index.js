import './styles.css';
import React from 'react';
import T from 'prop-types';
import get from 'lodash/get';
import MerakiQuoteShowHeader from './MerakiQuoteShowHeader/';
import SearchMerakiDeviceForm from './SearchMerakiDeviceFormContainer.js';
import MerakiQuoteShowGlobalOptions from './MerakiQuoteShowGlobalOptions/';
import MerakiQuoteShowActionBar from './MerakiQuoteShowActionBar/';
import MerakiQuoteTable from './MerakiQuoteTable/';
import MerakiQuoteGlobalVariables from './MerakiQuoteGlobalVariables/';
import MerakiQuotePurchaseOptions from './MerakiQuotePurchaseOptions/';
import MerakiNameAndDescriptionModal from './MerakiNameAndDescriptionModal/';
import {IMerakiQuotes} from '../IMerakiQuotes.js';
import Spinner from '../../../../../common/Spinner/';

class MerakiQuoteShow extends React.Component {
  state = {
    deleting: false,
  }

  componentWillMount() {
    const key = get(this.props, 'match.params.key');
    if (!key) return;
    this.props.fetch(key);
  }

  componentWillReceiveProps(newProps) {
    if (
      newProps.cloning === false &&
      this.props.cloning === true &&
      newProps.id
    )
      this.props.history.push(`/merakiQuotes/${newProps.id}`);
  }

  updateQuote = (updates) => {
    const key = get(this.props, 'match.params.key');
    if (!key) return;
    this.props.updateQuote(key, updates)
  }

  toggleDeleting = () => (
    this.setState(state => ({
      deleting: !state.deleting
    }))
  )

  render() {
    const {updateQuote, toggleDeleting} = this;
    const {deleting} = this.state;
    const {
      merakiQuote={},
      openModal,
      closeModal,
      showingModal,
      clone,
    } = this.props;

    if ( !merakiQuote.LicenceYears ) 
      return <Spinner color="black" size="xl"/>

    return (
      <div className="MerakiQuoteShow">
        <MerakiQuoteShowHeader
          openModal={openModal}
          onUpdate={updateQuote}
          {...merakiQuote} 
        />
        <SearchMerakiDeviceForm 
          merakiQuote={merakiQuote}
          onUpdate={updateQuote}
        />
        <MerakiQuoteShowGlobalOptions 
          {...merakiQuote}
          onUpdate={updateQuote}
        />
        <MerakiQuoteShowActionBar
          clone={clone}
          deleting={deleting} 
          toggleDeleting={toggleDeleting}
          merakiQuote={merakiQuote}
        />
        <MerakiQuoteTable 
          deleting={deleting}
          merakiQuote={merakiQuote}
          onUpdate={updateQuote}
        />
        <MerakiQuoteGlobalVariables {...merakiQuote} onUpdate={updateQuote} />
        <MerakiQuotePurchaseOptions merakiQuote={merakiQuote} />
      {showingModal &&  
        <MerakiNameAndDescriptionModal
          onUpdate={updateQuote}
          closeModal={closeModal}
          {...merakiQuote}
        />
      }
      </div>
    )
  }
}

MerakiQuoteShow.propTypes = {
  merakiQuote: T.shape(IMerakiQuotes),
  fetch: T.func,
  showingModal: T.bool,
  openModal: T.func,
  closeModal: T.func,
  clone: T.func,
};

export default MerakiQuoteShow
