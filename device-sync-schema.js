module.exports = {
  ip: {
    optional: false,
    type: 'string',
    pattern: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  },
  port: {
    optional: true,
    type: 'number',
    min: 0,
    max: 65535,
    integer: true,
    convert: true
  },
  account: {
    optional: false,
    type: 'string',
    empty: false
  },
  password: {
    optional: false,
    type: 'string',
    empty: false
  }
};

