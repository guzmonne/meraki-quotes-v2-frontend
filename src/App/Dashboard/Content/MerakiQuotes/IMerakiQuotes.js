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
  createdAt: T.string,
  updatedAt: T.string,
  UserName: T.string,
}

export const empty = () => ({
  AdminMargin: 0.3,
  DealApproved: false,
  Description: '',
  Discount: 0.35,
  HardwareMargin: 0.20,
  LicenseYears: 3,
  Name: '',
  ServiceLevel: '9x5xNBD',
  ServiceMargin: 0.3,
  SoftwareMargin: 0.2,
  Devices: [],
  createdAt: '',
  updatedAt: '',
  UserName: '',
});
