module.exports = {
  id: {
    optional: false,
    type: 'number',
    integer: true
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
