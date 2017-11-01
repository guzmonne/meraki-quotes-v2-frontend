import './styles.css';
import React from 'react';
import T from 'prop-types';
import get from 'lodash/get';
import MerakiQuoteShowHeader from './MerakiQuoteShowHeader/';
import SearchMerakiDeviceForm from './SearchMerakiDeviceForm/';
import MerakiQuoteShowGlobalOptions from './MerakiQuoteShowGlobalOptions/';
import MerakiQuoteShowActionBar from './MerakiQuoteShowActionBar/';
import {IMerakiQuotes, empty} from '../IMerakiQuotes.js';
import Spinner from '../../../../../common/Spinner/';

class MerakiQuoteShow extends React.Component {
  componentWillMount() {
    const key = get(this.props, 'match.params.key');
    if (!key) return;
    this.props.fetch(key);
  }

  render() {
    let {merakiQuote={}, fetching} = this.props;

    if (fetching === true) return <Spinner color="black" size="xl"/>

    return (
      <div className="MerakiQuoteShow">
        <MerakiQuoteShowHeader {...merakiQuote} />
        <SearchMerakiDeviceForm />
        <MerakiQuoteShowGlobalOptions {...merakiQuote} />
        <MerakiQuoteShowActionBar />
      </div>
    )
  }
}

MerakiQuoteShow.propTypes = {
  merakiQuote: T.shape(IMerakiQuotes),
  fetching: T.bool,
  fetch: T.func,
};

export default MerakiQuoteShow
