const SMTPEncryptionType = require('./constants/smtp-encryption-type');
const SMTPPort = require('./constants/smtp-port');

module.exports = {
  encryption: {
    // 加密
    optional: false,
    type: 'string',
    empty: false,
    enum: SMTPEncryptionType.all()
  },
  host: {
    // IP 位址
    optional: true,
    type: 'string',
    empty: true,
    max: 1024
  },
  port: {
    // 埠
    optional: false,
    type: 'string',
    empty: false,
    enum: SMTPPort.all()
  },
  account: {
    // 帳號
    optional: true,
    type: 'string',
    empty: true,
    max: 1024
  },
  password: {
    // 密碼
    optional: true,
    type: 'string',
    empty: true,
    max: 1024
  },
  senderName: {
    // 寄件人名稱
    optional: true,
    type: 'string',
    empty: true,
    max: 1024
  },
  senderEmail: {
    // 寄件人電子郵件
    optional: true,
    type: 'string',
    empty: true,
    max: 1024
  },
  interval: {
    // 通知時間間隔 (秒)
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
  },
  isEnableLoginNotification: {
    // 登入通知信
    type: 'boolean'
  },
  isEnableAuth: {
    // 電子郵件登入認證
    type: 'boolean'
  }
};
