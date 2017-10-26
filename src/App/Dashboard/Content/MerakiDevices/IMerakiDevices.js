import T from 'prop-types';

export const IMerakiDevice = {
  Category: T.string,
  createdAt: T.oneOfType([T.string, T.number]),
  Description: T.string,
  ID: T.string,
  PartNumber: T.string,
  Price: T.number,
  ImageUrl: T.string,
};
