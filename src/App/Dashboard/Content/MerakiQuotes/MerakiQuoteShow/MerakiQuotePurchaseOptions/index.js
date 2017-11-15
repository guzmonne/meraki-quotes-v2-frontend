import './styles.css';
import React from 'react';
import accounting from 'accounting';
import Card from '../../../Card/';
import {
  calculateServiceCost,
  calculateAdministrationCost,
  calculateHardwareMonthlyPrice,
  calculateLicenseMonthlyPrice
} from '../../../../../../modules/services.js';

const calculateUnifiedPrice = (merakiQuote) => (
  calculateServiceCost(merakiQuote) / (1 - merakiQuote.ServiceMargin) +
  calculateAdministrationCost(merakiQuote) +
  calculateHardwareMonthlyPrice(merakiQuote) +
  calculateLicenseMonthlyPrice(merakiQuote)
);

const calculateAdministratedPrice = (merakiQuote) => (
  calculateServiceCost(merakiQuote) / (1 - merakiQuote.ServiceMargin) +
  calculateAdministrationCost(merakiQuote) +
  calculateLicenseMonthlyPrice(merakiQuote)
);

const calculateTraditionalPrice = (merakiQuote) => (
  calculateServiceCost(merakiQuote) / (1 - merakiQuote.ServiceMargin) +
  calculateLicenseMonthlyPrice(merakiQuote)
);

const calculateHardwareCost = (merakiQuote) => {
  const {Devices=[], HardwareMargin, Discount} = merakiQuote;
  const hardwareCost = (
    Devices
    .filter(({PartNumber}) => PartNumber.indexOf('LIC') === -1)
    .reduce((acc, {Price, Intro=0, Qty}) => (
      acc + Price * Qty * (1 - Discount) * (1 + Intro)
    ), 0)
  );

  console.log(hardwareCost);

  return hardwareCost / (1 - HardwareMargin);
}

const MerakiQuotePurchaseOptions = ({
  merakiQuote
}) => (
  <div className="MerakiQuotePurchaseOptions">
    <Card>
      <h3 className="yellow">Solución Unificada*</h3>
      <div className="price">
        <span>Cuouta Mensual</span>
        <span>
          {accounting.formatMoney(calculateUnifiedPrice(merakiQuote))}
        </span>
      </div>
      <p>* Contrato a 36 meses obligatorio</p>

    </Card>
    <Card>

      <h3 className="green">Solución Administrada</h3>
      <div className="price">
        <span>Inversión Inicial</span>
        <span>
          {accounting.formatMoney(calculateHardwareCost(merakiQuote))}
        </span>
      </div>
      <div className="price">
        <span>Cuouta Mensual</span>
        <span>
          {accounting.formatMoney(calculateAdministratedPrice(merakiQuote))}
        </span>
      </div>
    </Card>
    <Card>

      <h3 className="red">Solución Administrada**</h3>
      <div className="price">
        <span>Inversión Inicial</span>
        <span>
          {accounting.formatMoney(calculateHardwareCost(merakiQuote))}
        </span>
      </div>
      <div className="price">
        <span>Cuouta Mensual</span>
        <span>
          {accounting.formatMoney(calculateTraditionalPrice(merakiQuote))}
        </span>
      </div>
      <p>** Con el fin de impulsar más las soluciones administradas, se sugiere ofrecer esta solución con margenes más elevados de manera de disminuir la diferencia con las otras dos soluciones.</p>
    </Card>
  </div>  
);

export default MerakiQuotePurchaseOptions;
