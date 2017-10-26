import './styles.css';
import React from 'react';
import T from 'prop-types';
import get from 'lodash/get';
import {IMerakiDevice} from '../IMerakiDevices.js';
import Form from '../../../../../common/Form/';
import ControlInput from '../../../../../common/ControlInput/';
import Button from '../../../../../common/Button/';

const MerakiDeviceForm = ({
  merakiDevice,
  color,
  loading,
  error,
  onSubmit,
  fieldsDisabled
}) => (
  <Form data={merakiDevice}>{({
    data,
    handleOnChange,
    handleOnSubmit
  }) => (
    <form className="MerakiDeviceForm" onSubmit={handleOnSubmit(onSubmit)}>
      <ControlInput
        value={data.Category}
        label="Categoría"
        type="text"
        error={get(error, 'details.0.path.0') === 'Category'}
        errorMessage={get(error, 'details.0.message')}
        onChange={handleOnChange('Category')}
        readOnly={fieldsDisabled.Category}
      />
      <ControlInput
        value={data.PartNumber}
        label="Número de Parte"
        type="text"
        error={get(error, 'details.0.path.0') === 'PartNumber'}
        errorMessage={get(error, 'details.0.message')}
        onChange={handleOnChange('PartNumber')}
        readOnly={fieldsDisabled.PartNumber}
      />
      <ControlInput
        value={data.Description}
        label="Descripción"
        type="text"
        error={get(error, 'details.0.path.0') === 'Description'}
        errorMessage={get(error, 'details.0.message')}
        onChange={handleOnChange('Description')}
      />
      <ControlInput
        value={data.ImageUrl}
        label="Imagen (ej. http://placehold.it/50x50)"
        type="text"
        error={get(error, 'details.0.path.0') === 'ImageUrl'}
        errorMessage={get(error, 'details.0.message')}
        onChange={handleOnChange('ImageUrl')}
      />
      <ControlInput
        value={data.Price}
        label="Precio"
        type="number"
        step="0.01"
        error={get(error, 'details.0.path.0') === 'Price'}
        errorMessage={get(error, 'details.0.message')}
        onChange={handleOnChange('Price')}
      />
      <Button color={color} type="submit" loading={loading}>
        Aceptar
      </Button>
    </form>
  )}</Form>
);

MerakiDeviceForm.propTypes = {
  color: T.string,
  merakiDevices: T.shape(IMerakiDevice),
  fieldsDisabled: T.shape({
    Category: T.bool,
    PartNumber: T.bool,
  })
};

MerakiDeviceForm.defaultProps = {
  fieldsDisabled: {
    merakiDevicesname: false,
    PartNumber: false,
  }
};

export default MerakiDeviceForm;
