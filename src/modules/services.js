/* DEFAULTS */
const NBD = '9x5xNBD';

const SERVICE_LEVEL_CONSTANTS = {
  '9x5xNBD': {
    admin: 2.030,
    service: 0.4444
  },
  '24x7x4': {
    admin: 3.041,
    service: 1.405
  }
}

const MODIFIER_DISCOUNT = 0.5

const MODIFIER_MAX_DEVICES = 50

const SERVICE_COST_PER_DEVICE = 7
const SERVICE_MAX_DISCOUNT = 0.5

const ADMIN_COST = {
  'Wireless': 50,
  'Switches': 50,
  'UTM': 200
}

const ADMIN_CATEGORIES = [
  'Wireless',
  'Switches',
  'UTM',
];

const ADMIN_MAX_DISCOUNT = 0.70

const MAX_DEVICES = 50

const LN = Math.log

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

export const calculateServiceCost = (quote) => {
  const serviceTypeModifier = quote.ServiceLevel === NBD ? 2 : 1;
  const qty = (
    quote.Devices
    .filter(isHardware)
    .filter(device => ADMIN_CATEGORIES.indexOf(device.Category) !== -1)
    .reduce((acc, device) => acc + device.Qty, 0)
  );
  return serviceLog(qty) * qty * serviceTypeModifier;
}

export const calculateAdministrationCost = (quote) => (
  quote.Devices
  .filter(isHardware)
  .filter(device => ADMIN_CATEGORIES.indexOf(device.Category) !== -1)
  .reduce((acc, device) => {
    const {Category, Qty} = device;
    const adminLog = log(ADMIN_COST[Category], ADMIN_MAX_DISCOUNT, MAX_DEVICES);
    return acc + adminLog(Qty) * Qty;
  }, 0)
);
