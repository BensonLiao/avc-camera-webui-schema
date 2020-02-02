const IOType = require('./constants/io-type');
const GateType = require('./constants/gate-type');

module.exports = {
  isEnable: {
    // 硬體輸入
    type: 'boolean'
  },
  ioType: {
    // 平常狀態
    optional: false,
    type: 'string',
    empty: false,
    enum: IOType.all()
  },
  gateType: {
    // 輸出類型
    optional: false,
    type: 'string',
    empty: false,
    enum: GateType.all()
  },
  pulse: {
    // 訊號緩衝時間 (秒)
    optional: true,
    type: 'string',
    pattern: /^[\d]{1,2}$/,
    min: 1,
    max: 80,
    check: function (value, schema) {
      if (schema.optional && (value == null || value === '')) {
        return true;
      }

      if (typeof value !== 'string') {
        return this.makeError('string', null, value);
      }

      if (!schema.pattern.test(value)) {
        return this.makeError('stringPattern', schema.pattern, value);
      }

      const number = Number(value);
      if (number < schema.min) {
        return this.makeError('numberMin', schema.min, value);
      }

      if (number > schema.max) {
        return this.makeError('numberMax', schema.max, value);
      }

      return true;
    }
  },
  delay: {
    // 延後間格時間 (秒)
    optional: true,
    type: 'string',
    pattern: /^[\d]{1,4}$/,
    min: 5,
    max: 1800,
    check: function (value, schema) {
      if (schema.optional && (value == null || value === '')) {
        return true;
      }

      if (typeof value !== 'string') {
        return this.makeError('string', null, value);
      }

      if (!schema.pattern.test(value)) {
        return this.makeError('stringPattern', schema.pattern, value);
      }

      const number = Number(value);
      if (number < schema.min) {
        return this.makeError('numberMin', schema.min, value);
      }

      if (number > schema.max) {
        return this.makeError('numberMax', schema.max, value);
      }

      return true;
    }
  }
};
