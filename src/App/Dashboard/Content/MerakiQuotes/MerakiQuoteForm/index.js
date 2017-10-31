import './styles.css';
import React from 'react';
import T from 'prop-types';
import get from 'lodash/get';
import {IMerakiQuote, empty} from '../IMerakiQuotes.js';
import Form from '../../../../../common/Form/';
import ControlInput from '../../../../../common/ControlInput/';
import Button from '../../../../../common/Button/';
import DateFromNow from '../../../../../common/DateFromNow/'
import SearchMerakiDeviceForm from './SearchMerakiDeviceForm/';

class MerakiQuoteForm extends React.Component {
  render() {
    const {
      merakiQuote,
    } = this.props;

    return (
      <div className="MerakiQuoteForm">
        <h2>{merakiQuote.Name}</h2>
        <h2><small>{merakiQuote.Description}</small></h2>

        <div className="MerakiQuoteForm__header">

          <div className="MerakiQuoteForm__header__createdBy">
            <dt>Creado Por</dt>
            <dd>{merakiQuote.UserName}</dd>
          </div>

          <div className="MerakiQuoteForm__header__createdAt">
            <dt>Creado</dt>
            <dd><DateFromNow>{merakiQuote.createdAt}</DateFromNow></dd>
          </div>

          <div className="MerakiQuoteForm__header__updatedAt">
            <dt>Actualizado</dt>
            <dd><DateFromNow>{merakiQuote.updatedAt}</DateFromNow></dd>
          </div>

        </div>

        <SearchMerakiDeviceForm />
      </div>
    );
  }
}

MerakiQuoteForm.propTypes = {
  merakiQuote: T.shape(IMerakiQuote),
};

export default MerakiQuoteForm;
