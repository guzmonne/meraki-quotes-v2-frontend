import T from 'prop-types';

export const IUser = {
  createdAt: T.oneOfType([T.string, T.number]),
  updatedAt: T.oneOfType([T.string, T.number]),
  username: T.string,
  ID: T.string,
  email: T.string,
  verified: T.bool,
}
