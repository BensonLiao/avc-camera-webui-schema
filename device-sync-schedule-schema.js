module.exports = {
  interval: {
    type: 'number',
    empty: false,
    integer: true,
    min: 1,
    max: 365
  },
  deviceList: {
    type: 'array',
    items: 'string',
    min: 1,
    max: 16
  }
};
