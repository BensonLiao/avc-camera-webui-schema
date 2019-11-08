module.exports = {
  id: {
    optional: false,
    type: 'string',
    empty: false,
    pattern: /^[a-f0-9-]{36}$/
  },
  name: {
    optional: false,
    type: 'string',
    empty: false,
    max: 16
  },
  note: {
    optional: true,
    type: 'string',
    empty: true,
    max: 1024
  }
};
