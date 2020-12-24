module.exports = {
  ip: {
    optional: false,
    type: 'string',
    pattern: /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/
  },
  port: {
    optional: false,
    type: 'string',
    pattern: /^[\d]{1,5}$/,
    min: 1,
    max: 65535
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

