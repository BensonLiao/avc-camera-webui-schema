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
    max: 16
  },
  note: {
    optional: true,
    type: 'string',
    enpty: true,
    max: 1024
  }
};
