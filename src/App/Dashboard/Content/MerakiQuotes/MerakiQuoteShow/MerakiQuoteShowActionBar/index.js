import './styles.css';
import React from 'react';
import Card from '../../../Card/';
import Button from '../../../../../../common/Button/';

const MerakiQuoteShowActionBar = () => (
  <Card className="MerakiQuoteShowActionBar">
    <Button>Compartir</Button>
    <Button>Clonar</Button>
    <Button>Descargar</Button>
    <Button>Eliminar</Button>
  </Card>
);

export default MerakiQuoteShowActionBar;
