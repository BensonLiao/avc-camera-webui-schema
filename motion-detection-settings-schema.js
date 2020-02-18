module.exports = {
  isEnable: {
    // 辨識功能
    type: 'boolean'
  },
  sensibility: {
    // 靈敏度
    optional: false,
    type: 'number',
    min: 1,
    max: 5,
    integer: true
  },
  areas: {
    // 觸發區域
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
