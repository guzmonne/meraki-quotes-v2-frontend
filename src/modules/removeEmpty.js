export default object => {
  return Object.keys(object).reduce((acc, key) => {
    const value = object[key];
    if (value === undefined || value === '')
      return acc;
    return {...acc, [key]: value};
  }, {});
};
