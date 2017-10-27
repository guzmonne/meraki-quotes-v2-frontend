import T from 'prop-types';

export const IMerakiQuotes = {
  AdminMargin: T.number,
  DealApproved: T.bool,
  Description: T.string,
  Discount: T.number,
  HardwareMargin: T.number,
  LicenseYears: T.number,
  Name: T.string,
  ServiceLevel: T.oneOf(['9x5xNBD', '24x7x4']),
  ServiceMargin: T.number,
  SoftwareMargin: T.number,
  Devices: T.array,
}
