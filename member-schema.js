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
    max: 128
  },
  organization: {
    optional: true,
    type: 'string',
    empty: true,
    max: 128
  },
  group: {
    optional: true,
    type: 'number',
    integer: true
  },
  note: {
    optional: true,
    type: 'string',
    empty: true,
    max: 128
  }
};
