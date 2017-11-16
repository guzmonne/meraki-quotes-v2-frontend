import './styles.css';
import React from 'react';
import Card from '../../../Card/';
import Button from '../../../../../../common/Button/';

const MerakiQuoteShowActionBar = ({
  toggleDeleting,
  deleting,
}) => (
  <Card className="MerakiQuoteShowActionBar">
    <Button>Compartir</Button>
    <Button>Clonar</Button>
    <Button>Descargar</Button>
    <Button 
      active={deleting}
      color="red"
      onClick={toggleDeleting}>Eliminar</Button>
  </Card>
);

export default MerakiQuoteShowActionBar;
