module.exports = {
  isEnable: {
    type: 'boolean'
  },
  maskAreas: {
    optional: false,
    type: 'array',
    empty: true,
    min: 0,
    max: 4,
    items: {
      type: 'object',
      props: {
        x: {
          optional: false,
          type: 'number',
          min: 0,
          max: 100,
          integer: true
        },
        y: {
          optional: false,
          type: 'number',
          min: 0,
          max: 100,
          integer: true
        },
        width: {
          optional: false,
          type: 'number',
          min: 0,
          max: 100,
          integer: true
        },
        height: {
          optional: false,
          type: 'number',
          min: 0,
          max: 100,
          integer: true
        }
      }
    }
  }
};
