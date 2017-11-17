import './styles.css';
import React from 'react';
import FileSaver from 'file-saver';
import Card from '../../../Card/';
import Button from '../../../../../../common/Button/';
import 
  MerakiQuoteXML 
from '../../../../../../modules/meraki-quote/meraki-quote.xml.js'

class MerakiQuoteShowActionBar extends React.Component {
  downloadQuote = () => {
    const {merakiQuote} = this.props;
    const blob = new Blob([
      MerakiQuoteXML(merakiQuote)
    ], { 
      type: "application/xls"
    });
    FileSaver.saveAs(blob, `${merakiQuote.Name}.xls`);
  }

  render() {
    const { toggleDeleting, deleting } = this.props;

    return (
      <Card className="MerakiQuoteShowActionBar">
        <Button>Compartir</Button>
        <Button>Clonar</Button>
        <Button onClick={this.downloadQuote}>
          Descargar
        </Button>
        <Button
          active={deleting}
          color="red"
          onClick={toggleDeleting}>Eliminar</Button>
      </Card>
    );
  }
}

export default MerakiQuoteShowActionBar;
