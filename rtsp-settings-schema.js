module.exports = {
  isEnableAudioToStream: {
    // 將聲音記錄至串流除霧
    type: 'boolean'
  },
  isEnablePassword: {
    // 連線時需帳號密碼認證
    type: 'boolean'
  },
  tcpPort: {
    // RTSP/TCP 連接埠
    optional: false,
    type: 'custom',
    pattern: /^[\d]{4,5}$/,
    min: 1024,
    max: 65535,
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
        return this.makeError('numberMax', schema.min, value);
      }

      return true;
    }
  },
  udpPort: {
    // RTSP/UDP 連接埠
    optional: false,
    type: 'custom',
    pattern: /^[\d]{4,5}$/,
    min: 1024,
    max: 65535,
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
        return this.makeError('numberMax', schema.min, value);
      }

      return true;
    }
  },
  connectionLimit: {
    // 最大連接數
    optional: false,
    type: 'custom',
    pattern: /^\d$/,
    min: 1,
    max: 8,
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
        return this.makeError('numberMax', schema.min, value);
      }

      return true;
    }
  }
};
