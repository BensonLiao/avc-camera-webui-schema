module.exports = {
  deviceToken: {
    // 裝置金鑰
    optional: true,
    type: 'string',
    empty: true,
    max: 1024
  },
  deviceId: {
    // 裝置編碼
    optional: true,
    type: 'string',
    empty: true,
    max: 1024
  },
  interval: {
    // 通知時間間隔
    optional: true,
    type: 'custom',
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

      const frameRate = Number(value);
      if (frameRate < schema.min) {
        return this.makeError('numberMin', schema.min, value);
      }

      if (frameRate > schema.max) {
        return this.makeError('numberMax', schema.max, value);
      }

      return true;
    }
  }
};
