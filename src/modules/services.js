/* DEFAULTS */
const MONTHS_IN_A_YEAR = 12,
  ANUAL_COMPOUND_INTEREST = 1.12,
  MONTHLY_COMPOUND_INTEREST = 0.0333,
  NBD = '9x5xNBD',
  SERVICE_COST_PER_DEVICE = 7,
  SERVICE_MAX_DISCOUNT = 0.5,
  ADMIN_COST = {
    'Wireless': 50,
    'Switches': 50,
    'UTM': 200
  },
  ADMIN_CATEGORIES = [
    'Wireless',
    'Switches',
    'UTM',
  ],
  ADMIN_MAX_DISCOUNT = 0.70,
  MAX_DEVICES = 50,
  LN = Math.log;

/**
 * Filter function to get the hardware devices from a Meraki Products collection
 * @param  {Object} model Meraki product object
 * @return {Boolean}      Wether the product is hardware or not
 */
export const isHardware = model => (
  model.PartNumber.indexOf('LIC') === -1
);
/**
 * Filter function to get the licenses devices from a Meraki Products collection
 * @param  {Object} model Meraki product object
 * @return {Boolean}      Wether the product is a license or not
 */
export const isLicense = model => (
  model.PartNumber.indexOf('LIC') > -1
)

const log = (init, discount, max) => (qty) => (
  Math.round((init - init * discount / LN(max) * LN(qty)) * 10000) / 10000
);

const serviceLog = (
  log(SERVICE_COST_PER_DEVICE, SERVICE_MAX_DISCOUNT, MAX_DEVICES)
);

export const calculateServiceCost = ({ Devices = [], ServiceLevel }) => {
  const serviceTypeModifier = ServiceLevel === NBD ? 1 : 2;
  const qty = (
    Devices
    .filter(isHardware)
    .filter(device => ADMIN_CATEGORIES.indexOf(device.Category) !== -1)
    .reduce((acc, device) => acc + device.Qty, 0)
  );
  return serviceLog(qty) * qty * serviceTypeModifier;
};

export const calculateServicePrice = (quote) => {
  const { ServiceMargin } = quote;
  const cost = calculateServiceCost(quote);
  return cost / (1 - ServiceMargin);
};

export const calculateAdministrationCost = ({ Devices = [] }) => (
  Devices
  .filter(isHardware)
  .filter(device => ADMIN_CATEGORIES.indexOf(device.Category) !== -1)
  .reduce((acc, device) => {
    const {Category, Qty} = device;
    const adminLog = log(ADMIN_COST[Category], ADMIN_MAX_DISCOUNT, MAX_DEVICES);
    return acc + adminLog(Qty) * Qty;
  }, 0)
);

export const calculateLicenseMonthlyPrice = ({ 
  LicenceYears,
  Devices = [],
  SoftwareMargin,
  Discount 
}) => {
  const licensesTotalCost = (
    Devices
      .filter(isLicense)
      .reduce((acc, {Price, Qty, Intro=0}) => (
        acc + Price * Qty * (1 - Discount) * (1 + Intro)
      ), 0)
    ),
    months = LicenceYears * MONTHS_IN_A_YEAR,
    interest = Math.pow(ANUAL_COMPOUND_INTEREST, LicenceYears);
  
  return interest * licensesTotalCost / (1 - SoftwareMargin) / months
};


export const calculateHardwareMonthlyPrice = ({
  LicenceYears,
  Devices = [],
  HardwareMargin,
  Discount
}) => {
  const hardwareTotalCost = (
    Devices
      .filter(isHardware)
      .reduce((acc, { Price, Qty, Intro = 0 }) => (
        acc + Price * Qty * (1 - Discount) * (1 + Intro)
      ), 0)
  );
  return hardwareTotalCost / (1 - HardwareMargin) * MONTHLY_COMPOUND_INTEREST;
};
