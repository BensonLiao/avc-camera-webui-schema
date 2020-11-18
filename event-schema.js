module.exports = {
  id: {
    optional: false,
    type: 'string',
    pattern: /^[a-f0-9-]{36}$/
  },
  time: {
    optional: false,
    type: 'date',
    convert: true
  }
};
