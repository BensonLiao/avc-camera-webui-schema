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
    type: 'string',
    empty: true,
    pattern: /^([a-f0-9-]{36})?$/
  },
  note: {
    optional: true,
    type: 'string',
    empty: true,
    max: 128
  },
  pictures: {
    optional: false,
    type: 'array',
    empty: false,
    min: 1,
    max: 1,
    items: {
      optional: false,
      type: 'string',
      empty: false,
      max: 1048576 // 1MB = 1024 * 1024 = 1048576 bytes
    }
  }
};
